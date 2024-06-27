import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Jalousie = class Jalousie {

    constructor(page) {
        this.page = page;
    }

    async configureJalousie(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        let grundPreis_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.grundpreis] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), testcase.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.grundpreis, 119] }), testcase.vat] })).toFixed(2);
        let pendel_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.pendel, 119] }), testcase.vat] })).toFixed(2);
        let kette_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.kette, 119] }), testcase.vat] })).toFixed(2);
        let klemm_oben_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.klemm_oben, 119] }), testcase.vat] })).toFixed(2);
        let klemm_unten_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.klemm_unten, 119] }), testcase.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [testcase.grundpreis, testcase.kette, testcase.pendel, testcase.klemm_oben, testcase.klemm_unten] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, testcase.kette, testcase.pendel, testcase.klemm_oben, testcase.klemm_unten] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2)
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, pendel_mwst, kette_mwst, klemm_oben_mwst, klemm_unten_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2)
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, pendel_mwst, kette_mwst, klemm_oben_mwst, klemm_unten_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, testcase.versandkosten] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let steuer_betrag_2
        let steuer_betrag_3
        let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.versandkosten, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let steuer_betrag_gesamt = (jsonLogic.apply({ '+': [steuer_betrag, steuer_versand] })).toFixed(2)
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
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //****************************************************************************************************************************/

        const emailSuffix = Date.now();
        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // visit URL
        await this.page.goto(testcase.produkt)

        // check Startpreise on /jalousien  
        if (testcase.produktgruppe == "16mm") {
            await expect(this.page.locator('.testmenu > :nth-child(1)')).toContainText(testcase.ab_preis);
            await expect(this.page.locator('.testmenu > :nth-child(1)')).toContainText(testcase.ab_preis_red);
        }
        if (testcase.produktgruppe == "25mm") {
            await expect(this.page.locator('.testmenu > :nth-child(2)')).toContainText(testcase.ab_preis);
            await expect(this.page.locator('.testmenu > :nth-child(2)')).toContainText(testcase.ab_preis_red);
        }
        if (testcase.produktgruppe == "50mm") {
            await expect(this.page.locator('.testmenu > :nth-child(3)')).toContainText(testcase.ab_preis);
            await expect(this.page.locator('.testmenu > :nth-child(3)')).toContainText(testcase.ab_preis_red);
        }

        // set Produktgruppe
        await this.page.locator('.testmenu div').getByText(testcase.produktgruppe).click()

        // check Startpreise on configurator
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.ab_preis_red)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.ab_preis_red)



        //***************************************************** CONFIGURATION *****************************************************************//

        // set Jalousie Farbe
        await this.page.locator('#jalousie-collection > ul').locator(":scope > *")
            .getByText(testcase.farbe).first().click();

        // set Höhe und Breite
        await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);
        await this.page.locator('#breite_in_mm input').fill(testcase.breite);

        // set Befestigung
        await this.page.locator('.befestigung-type > div >  ul').locator(":scope > *")
            .getByText(testcase.befestigung).first().click();

        // set Bedienung
        await this.page.locator('.bedienung > ul').locator(":scope > *")
            .getByText(testcase.bedientyp).first().click();

        // set Farbe von Kette und Blende
        if (testcase.farbe_ketteUndBlende != "") {
            await this.page.locator('.farbe > :nth-child(4) > ul').locator(":scope > *")
                .getByText(testcase.farbe_ketteUndBlende).first().click();
        }

        // set Farbe Kette
        if (testcase.farbe_kette != "") {
            await this.page.locator('.farbe > :nth-child(5) > ul').locator(":scope > *")
                .getByText(testcase.farbe_kette).first().click();
        }

        // set Farbe Seitenblende
        if (testcase.farbe_seitenblende != "") {
            await this.page.locator('.farbe > :nth-child(6) > ul').locator(":scope > *")
                .getByText(testcase.farbe_seitenblende).first().click();
        }

        // set Bedienseite
        await this.page.locator('.bedienseite-type > div > ul').locator(":scope > *")
            .getByText(testcase.bedienseite).first().click();

        // set Pendelsicherung
        if (testcase.pendelsicherung != "") {
            await this.page.locator('.seitenfuehrung > div > ul').locator(":scope > *")
                .getByText(testcase.pendelsicherung).first().click();
        }

        // check prices after configuration
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(streichPreis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(redPreis)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(streichPreis)
        await expect(this.page.locator("#configurator-price-cart div.special-price > span")).toContainText(redPreis)

        // add to cart
        await this.page.locator('#configurator-price-cart > .add-to-cart input').clear();
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