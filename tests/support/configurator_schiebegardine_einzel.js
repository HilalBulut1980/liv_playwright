import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Schiebegardine_einzel = class Schiebegardine_einzel {

    constructor(page) {
        this.page = page;
    }

    async startFromConfigurator(testcase) {

        await this.page.goto('/schiebegardinen/schiebegardinen-konfigurator')
        await this.page.getByText(/Farbe & Eigenschaften ändern/).first().click();
        await this.page.getByText(testcase.produkt).first().click();
        await this.page.getByText(/Auswahl übernehmen/).first().click();

    }

    async startFromProductPage(testcase) {

        await this.page.goto(testcase.produkt)
        await expect(this.page.locator('.old-price')).toContainText(testcase.ab_preis)
        await expect(this.page.locator('.special-price')).toContainText(testcase.ab_preis_red)
        await this.page.locator("#configurator-button").click()
    }

    async configureSchiebegardineEinzel(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        // produkt
        let grundpreis = testcase.grundpreis.toFixed(2);
        let grundPreis_red = (jsonLogic.apply({ '*': [testcase.discount, grundpreis] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), testcase.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.grundpreis, 119] }), testcase.vat] })).toFixed(2);

        // paneelwagen
        let paneelwagen = testcase.pw_preis.toFixed(2);
        let paneelwagen_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [paneelwagen, 119] }), testcase.vat] })).toFixed(2);
        let paneelwagen_red = (jsonLogic.apply({ '*': [testcase.discount, paneelwagen] })).toFixed(2);
        let paneelwagen_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [paneelwagen_red, 119] }), testcase.vat] })).toFixed(2);

        // endstab
        let endstab = testcase.endstab_preis.toFixed(2);
        let endstab_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [endstab, 119] }), testcase.vat] })).toFixed(2);
        let endstab_red = (jsonLogic.apply({ '*': [testcase.discount, endstab] })).toFixed(2);
        let endstab_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [endstab_red, 119] }), testcase.vat] })).toFixed(2);



        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [grundpreis, paneelwagen, endstab] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, paneelwagen_red, endstab_red] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

        // Checkout & Backend
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, paneelwagen_mwst, endstab_mwst] })).toFixed(2);
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2);
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, paneelwagen_red_mwst, endstab_red_mwst] })).toFixed(2);
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2);
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let versandkosten = testcase.versandkosten.toFixed(2);
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, testcase.versandkosten] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let steuer_betrag_2
        let steuer_betrag_3
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

        streichPreis = streichPreis.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis = redPreis.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //****************************************************************************************************************************/

        const emailSuffix = Date.now();

        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }



        // set SG Typ
        await this.page.getByText(testcase.modell).first().click();

        // check Startpreise
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.ab_preis_red)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.ab_preis_red)

        // set Breite
        await this.page.locator('#breite_in_mm input').fill(testcase.breite);

        // set Höhe
        await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);

        // set Paneelwagen
        if (typeof testcase.paneelwagen !== "undefined" && testcase.paneelwagen == "ja") {
            await this.page.locator('img[alt="mit Paneelwagen"]').click();
        }

        // set Endstab
        if (typeof testcase.endstab !== "undefined") {
            await this.page.getByText(new RegExp("^" + testcase.endstab + "\\s*$")).first().click();
        }

        // set color Endstab/Paneelwagen
        if (typeof testcase.endstab_pw_farbe !== "undefined") {
            await this.page.locator('.endstab_farbe > div > ul').locator(":scope > *").getByText(testcase.endstab_pw_farbe).first().click();
        }
        
        // check prices
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(streichPreis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(redPreis)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(streichPreis)
        await expect(this.page.locator("#configurator-price-cart div.special-price > span")).toContainText(redPreis)

        // add to cart
        await this.page.locator('#configurator-price-cart > .add-to-cart input').fill(((testcase.anzahl).toString()));
        await this.page.locator('#configurator-price-cart > .add-to-cart button').click();


        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // cart functions
        await newCart.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, testcase.system)
        await newCart.checkCartTotals(testcase.system, warenkorbTotal, sieSparen, testcase.rabatt_code, testcase.rabatt_betrag, testcase.sieSparen_new, testcase.total_cart_new)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, testcase.rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, testcase.rabatt_betrag_backend, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, redPreis_mwst, redPreisTotal_mwst, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}