import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Doppelrollo = class Doppelrollo {

    constructor(page) {
        this.page = page;
    }

    async startFromProductPage(testcase) {

        await this.page.goto(testcase.produkt)
        await expect(this.page.locator('.old-price')).toContainText(testcase.ab_preis)
        await expect(this.page.locator('.special-price')).toContainText(testcase.ab_preis_red)
        await this.page.locator("#configurator-button").click()

    }

    async startFromConfigurator(testcase) {

        await this.page.goto('/doppelrollo/doppelrollo-konfigurator')
        await this.page.getByText(/Farbe & Eigenschaften ändern/).first().click();
        await this.page.getByText(testcase.produkt).first().click();
        await this.page.getByText(/Auswahl übernehmen/).first().click();
    }

    async configureDoppelrollo(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        let grundPreis_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.grundpreis] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), testcase.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.grundpreis, 119] }), testcase.vat] })).toFixed(2);
        let kette_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.kettenpreis, 119] }), testcase.vat] })).toFixed(2);
        let kassette_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.kassFarbenpreis, 119] }), testcase.vat] })).toFixed(2);
        let kassFarbe_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.kassFarbenpreis] })).toFixed(2);
        let kassette_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kassFarbe_red, 119] }), testcase.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [testcase.grundpreis, testcase.kettenpreis, testcase.kassFarbenpreis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, testcase.kettenpreis, kassFarbe_red] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)


        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        // rabatt_betrag, sieSparen_new, total_cart_new
        let rabatt_betrag;
        let sieSparen_new;
        let total_cart_new;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // cart
            rabatt_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            sieSparen_new = (jsonLogic.apply({ '+': [sieSparen, rabatt_betrag] })).toFixed(2)
            total_cart_new = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [warenkorbTotal, 100] }), testcase.rabatt_faktor_b] })).toFixed(2);

            sieSparen_new = sieSparen_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            total_cart_new = total_cart_new.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
            rabatt_betrag = rabatt_betrag.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        }

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\


        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2)
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, kette_mwst, kassette_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2)
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, kette_mwst, kassette_red_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, testcase.versandkosten] })).toFixed(2)

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = redPreis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, testcase.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] }))//.toFixed(3);
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding
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

        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        let rabatt_betrag_mwst = 0;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // checkout
            rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen_mwst, rabatt_betrag_mwst] })).toFixed(2)
            total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)
            total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
            summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst] })).toFixed(2)
            steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
            steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);

            rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        }

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\



        //-------------------------------------------------------------------------------------------------------------------------------\\
        //----------------------------------------------------- replace . with , ---------------------------------------------------------\\

        streichPreis = streichPreis.replace('.', ',')
        redPreis = redPreis.replace('.', ',')
        streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal = redPreisTotal.replace('.', ',')
        warenkorbTotal = warenkorbTotal.replace('.', ',')
        sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis_mwst = streichPreis_mwst.replace('.', ',')
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',')
        redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',')
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //********************************************************************************************************************************/

        const emailSuffix = Date.now();

        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // check Startpreise
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.ab_preis_red)
        await expect(this.page.locator("div.product-view div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("div.product-view div.special-price > span")).toContainText(testcase.ab_preis_red)

        // set Rollo-Typ
        // await this.page.locator('#type-selector-top > ul').locator(":scope > *").getByText(testcase.rollotyp).first().click(); // this command is more specific
        await this.page.getByText(testcase.rollotyp).first().click();

        // set Höhe & Breite
        await this.page.locator('#hoehe input').fill(testcase.hoehe);
        await this.page.locator('#breite input').fill(testcase.breite);

        // set Befestigung
        if (typeof testcase.befestigung != "undefined") {
            await this.page.locator('div[options-property="befestigung"]').locator(":scope > *").getByText(testcase.befestigung).first().click(); // this command is more specific
            // await this.page.getByText(testcase.befestigung).first().click();
        }

        // set Farbe der Kassette
        if (typeof testcase.kassettenfarbe != "undefined") {
            await this.page.locator('.additional > div > ul').locator(":scope > *").getByText(testcase.kassettenfarbe).first().click(); // this command is more specific
            // await this.page.getByText(testcase.kassettenfarbe).first().click();
        }

        // set Farbe der Verblendung
        if (typeof testcase.verblendung_farbe != "undefined") {
            await this.page.locator('.additional > div > ul').locator(":scope > *").getByText(testcase.verblendung_farbe).first().click(); // this command is more specific
            // await this.page.getByText(testcase.verblendung_farbe).first().click();
        }

        // set Art der Kugelkette
        if (typeof testcase.kugelkette != "undefined") {
            await this.page.locator('#montageoptionen > div > :nth-child(1) > div > ul').locator(":scope > *").getByText(testcase.kugelkette).first().click(); // this command is more specific
            // await this.page.getByText(testcase.kugelkette).first().click();
        }

        // set Bedienseite
        if (typeof testcase.bedienseite != "undefined") {
            // await page.locator('#montageoptionen > div > :nth-child(2) > div > ul').locator(":scope > *").getByText(value).first().click(); // this command is more specific
            await this.page.getByText(testcase.bedienseite).first().click();
        }

        // check konfigurierte Preise
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(streichPreis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(redPreis)
        await expect(this.page.locator("div.product-view div.old-price > span")).toContainText(streichPreis)
        await expect(this.page.locator("div.product-view div.special-price > span")).toContainText(redPreis)


        // add to cart
        // await this.page.locator('#configurator-price-cart > .add-to-cart input').clear();
        await this.page.locator('#configurator-price-cart > .add-to-cart input').fill(((testcase.anzahl).toString()));
        await this.page.locator('#configurator-price-cart > .add-to-cart button').click();


        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // cart functions
        await newCart.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, testcase.system)
        await newCart.checkCartTotals(testcase.system, warenkorbTotal, sieSparen, testcase.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, rabatt_betrag_mwst, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }

}


