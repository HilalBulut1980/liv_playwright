import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Service = class Service {

    constructor(page) {
        this.page = page;
    }

    async configureService(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        let preis = testcase.grundpreis.toFixed(2)
        let preis_total = (jsonLogic.apply({ '*': [preis, testcase.anzahl] })).toFixed(2)

        let warenkorbTotal = preis_total
        let sieSparen

        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        // rabatt_betrag, sieSparen_new, total_cart_new
        let rabatt_betrag;
        let sieSparen_new;
        let total_cart_new;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // cart
            rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            sieSparen_new = rabatt_betrag
            total_cart_new = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), testcase.rabatt_faktor_b] })).toFixed(2);

            rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_cart_new = total_cart_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

        }

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\


        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2);
        let preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis, 119] }), testcase.vat] })).toFixed(2);
        let preis_mwst_total = (jsonLogic.apply({ '*': [preis_mwst, testcase.anzahl] })).toFixed(2)

        // let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, preis_mwst_total] })).toFixed(2)
        let sieSparen_mwst //= (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [preis_mwst_total, versandkosten] })).toFixed(2)

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = preis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, testcase.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, testcase.vat] }), testcase.mwst_1] }))//.toFixed(3);
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding
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

        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        let rabatt_betrag_mwst = 0;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // checkout
            rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_mwst_total, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            sieSparen_mwst = rabatt_betrag_mwst
            total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
            total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
            summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst] })).toFixed(2)
            steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
            steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);

            rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

        }

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\


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
        einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

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
                response.url().includes(process.env.JS_FILES_SERVICE)
                && response.status() === 200, { timeout: 3000 })
        ]);

        // promise not sufficient here!
        // workaround
        await this.page.waitForTimeout(2000);


        if (testcase.produkt == "/zusatzauftrag-laengere-fuehrungsschnuere") {

            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(2) > .input-box > input").fill(testcase.produkt_name);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(5) > .input-box > input").fill(testcase.schienenfarbe);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(8) > .input-box > input").fill(testcase.breite);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(11) > .input-box > input").fill(testcase.hoehe);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(14) > .input-box > input").fill(testcase.wunschlaenge);
            await this.page.waitForTimeout(500);
            await this.page.selectOption(('#configurator-options > dl > :nth-child(16) > .input-box > select'), testcase.wunschseite)
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > .last > .input-box > textarea").fill(testcase.anmerkung);
            await this.page.waitForTimeout(500);

        }

        if (testcase.produkt == "/aenderungsauftrag-schnurlaenge") {

            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(2) > .input-box > input").fill(testcase.bestellnummer);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(5) > .input-box > input").fill(testcase.produkt_name);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(8) > .input-box > input").fill(testcase.breite);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(11) > .input-box > input").fill(testcase.hoehe);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(14) > .input-box > input").fill(testcase.wunschlaenge);
            await this.page.waitForTimeout(500);
        }
        if (testcase.produkt == "/aenderungsauftrag-breite") {

            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(2) > .input-box > input").fill(testcase.bestellnummer);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(5) > .input-box > input").fill(testcase.produkt_name);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(8) > .input-box > input").fill(testcase.breite);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(11) > .input-box > input").fill(testcase.hoehe);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(14) > .input-box > input").fill(testcase.kuerzung);
            await this.page.waitForTimeout(500);
        }
        if (testcase.produkt == "/reparaturauftrag-schnur-ersetzen") {

            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(2) > .input-box > input").fill(testcase.bestellnummer);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(5) > .input-box > input").fill(testcase.produkt_name);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(8) > .input-box > input").fill(testcase.breite);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(11) > .input-box > input").fill(testcase.hoehe);
            await this.page.waitForTimeout(500);
            await this.page.locator("#configurator-options > dl > :nth-child(14) > .input-box > input").fill(testcase.wunschlaenge);
            await this.page.waitForTimeout(500);
        }


        // check price
        await expect(this.page.locator(".price-container > .special-price > .price.our-price")).toContainText(preis);

        // add qty to cart
        // await this.page.locator(".cart-container > input").clear();
        await this.page.locator(".cart-container > input").fill((testcase.anzahl).toString());
        await this.page.locator(".cart-container > button > span > span").click();

        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // cart functions
        await newCart.checkCartSpecial(testcase.system, preis, preis_total)
        await newCart.checkCartTotals(testcase.system, warenkorbTotal, sieSparen, testcase.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, preis_mwst, preis_mwst_total, preis_mwst, preis_mwst_total, total_mwst)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, rabatt_betrag_mwst, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}