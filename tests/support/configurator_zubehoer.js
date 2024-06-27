import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Zubehoer = class Zubehoer {

    constructor(page) {
        this.page = page;
    }

    async configureZubehoer(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        let preis = testcase.grundpreis.toFixed(2)
        let preis_total = (jsonLogic.apply({ '*': [preis, testcase.anzahl] })).toFixed(2)

        let warenkorbTotal = preis_total
        let sieSparen

        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2);
        let preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis, 119] }), testcase.vat] })).toFixed(2);
        let preis_mwst_total = (jsonLogic.apply({ '*': [preis_mwst, testcase.anzahl] })).toFixed(2)

        // let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, preis_mwst_total] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [preis_mwst_total, versandkosten] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let steuer_betrag_2
        let steuer_betrag_3
        // let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.versandkosten, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        // let steuer_betrag_gesamt = (jsonLogic.apply({ '+': [steuer_betrag, steuer_versand] })).toFixed(2)
        let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let sideProduct_1
        let sideProduct_1_total
        let sideProduct_2
        let sideProduct_2_total
        let sideProduct_3
        let sideProduct_3_total
        let sideProduct_4
        let sideProduct_4_total
        let sideProduct_5
        let sideProduct_5_total

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

        preis = preis.replace('.', ',')
        preis_total = preis_total.replace('.', ',')
        preis_mwst = preis_mwst.replace('.', ',')
        preis_mwst_total = preis_mwst_total.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        warenkorbTotal = warenkorbTotal.replace('.', ',')
        total_mwst = total_mwst.replace('.', ',')
        total_backend = total_backend.replace('.', ',')
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\


        const emailSuffix = Date.now();
        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // visit product page
        await this.page.goto(testcase.produkt)

        // ******************************************* WAIT FOR JS FILES RESPONSE ****************************************************************
        // Warte auf die Antwort für js-Dateien und überprüfe den Statuscode 200
        // sonst entsteht JS-Error: opConfig not defined
        await Promise.all([
            this.page.waitForResponse(response =>
                response.url().includes(process.env.JS_FILES_ZUBEHOER)
                && response.status() === 200, { timeout: 3000 })
        ]);

        // promise not sufficient here!
        // workaround
        await this.page.waitForTimeout(2000);


        // ******************************************* OPTIONS ****************************************************************
        // no options: Stick&Fix-Set, Stick&Fix-Front-Set
        // one option: Bediengriff Design, Bediengriff Standard, GLW, Halteclip. Montageplatte, Sockelplatte, Klebestreifen, Stick & Fix Front, Verdrehsicherung
        // two options: Bedienstab, Falzfix, Spannschuh, Wandwinkel
        // three options: Klemmträger

        // SET OPTIONS
        if (typeof testcase.option_1 !== "undefined") {
            this.page.selectOption(('#configurator-options > dl > dd.last > .input-box > select'), testcase.option_1)
        }
        if (typeof testcase.option_2 !== "undefined") {
            this.page.selectOption(('#configurator-options > dl > dd:nth-of-type(1) > .input-box > select'), testcase.option_2)
        }
        if (typeof testcase.option_3 !== "undefined") {
            this.page.selectOption(('#configurator-options > dl > dd:nth-of-type(2) > .input-box > select'), testcase.option_3)
        }


        // check price
        await expect(this.page.locator('.price-container > .special-price')).toContainText(preis);

        // add qty to cart
        await this.page.waitForTimeout(1000);
        await this.page.locator('.cart-container > input').fill((testcase.anzahl).toString());
        await this.page.locator('.cart-container > button').click();

        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // cart functions
        await newCart.checkCartSpecial(testcase.system, preis, preis_total)
        await newCart.checkCartTotals(testcase.system, warenkorbTotal, sieSparen, testcase.rabatt_code, testcase.rabatt_betrag, testcase.sieSparen_new, testcase.total_cart_new)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, testcase.rabatt_betrag_checkout, testcase.sieSparen_checkout, versandkosten, preis_mwst, preis_mwst_total, preis_mwst, preis_mwst_total, total_mwst)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, testcase.rabatt_betrag_backend, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, preis_mwst, preis_mwst_total, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}