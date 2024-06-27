import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Kissenhuelle_set = class Kissenhuelle_set {

    constructor(page) {
        this.page = page;
    }

    async configureKissenhuelle_set(testcase) {

        let grundpreis = testcase.grundpreis.toFixed(2);
        let grundPreis_red = (jsonLogic.apply({ '*': [testcase.discount, grundpreis] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), testcase.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.grundpreis, 119] }), testcase.vat] })).toFixed(2);

        //zusatz
        let konfektion = testcase.konfektion.toFixed(2);
        let konfektion_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [konfektion, 119] }), testcase.vat] })).toFixed(2);
        let konfektion_red = (jsonLogic.apply({ '*': [testcase.discount, konfektion] })).toFixed(2);
        let konfektion_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [konfektion_red, 119] }), testcase.vat] })).toFixed(2);

        let befestigung_preis = testcase.befestigung_preis.toFixed(2);
        let befestigung_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [befestigung_preis, 119] }), testcase.vat] })).toFixed(2);

        //Kissen
        let kissen40_anzahl = testcase.kissen40
        let kissen50_anzahl = testcase.kissen50
        let kissen40 = testcase.kissen40_preis.toFixed(2);
        let kissen50 = testcase.kissen50_preis.toFixed(2);
        let kissen40_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kissen40, 119] }), testcase.vat] })).toFixed(2);
        let kissen50_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kissen50, 119] }), testcase.vat] })).toFixed(2);
        let kissen40_total = (jsonLogic.apply({ '*': [kissen40, kissen40_anzahl] })).toFixed(2)
        let kissen50_total = (jsonLogic.apply({ '*': [kissen50, kissen50_anzahl] })).toFixed(2)
        let kissen40_mwst_total = (jsonLogic.apply({ '*': [kissen40_mwst, kissen40_anzahl] })).toFixed(2)
        let kissen50_mwst_total = (jsonLogic.apply({ '*': [kissen50_mwst, kissen50_anzahl] })).toFixed(2)
        let kissen40_red = (jsonLogic.apply({ '*': [testcase.discount, kissen40] })).toFixed(2);
        let kissen50_red = (jsonLogic.apply({ '*': [testcase.discount, kissen50] })).toFixed(2);
        let kissen40_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kissen40_red, 119] }), testcase.vat] })).toFixed(2);
        let kissen50_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kissen50_red, 119] }), testcase.vat] })).toFixed(2);
        let kissen40_red_total = (jsonLogic.apply({ '*': [kissen40_red, kissen40_anzahl] })).toFixed(2)
        let kissen50_red_total = (jsonLogic.apply({ '*': [kissen50_red, kissen50_anzahl] })).toFixed(2)
        let kissen40_red_mwst_total = (jsonLogic.apply({ '*': [kissen40_red_mwst, kissen40_anzahl] })).toFixed(2)
        let kissen50_red_mwst_total = (jsonLogic.apply({ '*': [kissen50_red_mwst, kissen50_anzahl] })).toFixed(2)


        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [grundpreis, konfektion, befestigung_preis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, konfektion_red, befestigung_preis] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '+': [redPreisTotal, kissen40_red_total, kissen50_red_total] })).toFixed(2)
        let sieSparen1 = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)
        let sieSparen2 = (jsonLogic.apply({ '-': [kissen40_total, kissen40_red_total] })).toFixed(2)
        let sieSparen3 = (jsonLogic.apply({ '-': [kissen50_total, kissen50_red_total] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '+': [sieSparen1, sieSparen2, sieSparen3] })).toFixed(2)


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
        let versandkosten = testcase.versandkosten.toFixed(2);
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, konfektion_mwst, befestigung_preis_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2);
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, konfektion_red_mwst, befestigung_preis_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2);
        let sieSparen1_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let sieSparen2_mwst = (jsonLogic.apply({ '-': [kissen40_mwst_total, kissen40_red_mwst_total] })).toFixed(2)
        let sieSparen3_mwst = (jsonLogic.apply({ '-': [kissen50_mwst_total, kissen50_red_mwst_total] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen1_mwst, sieSparen2_mwst, sieSparen3_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, kissen40_red_mwst_total, kissen50_red_mwst_total, versandkosten] })).toFixed(2)

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = redPreis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, testcase.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, testcase.vat] }), testcase.mwst_1] }))//.toFixed(3);
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding
        let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);

        let sideProduct_1 = 0;
        let sideProduct_1_total = 0;
        let sideProduct_2// = 0;
        let sideProduct_2_total// = 0;
        let sideProduct_3
        let sideProduct_3_total
        let sideProduct_4
        let sideProduct_4_total
        let sideProduct_5
        let sideProduct_5_total
        let steuer_betrag_2
        let steuer_betrag_3

        //  if only Kissen 40cm exists
        if (kissen40_anzahl != 0 && kissen50_anzahl == 0) {
            console.log('Kissen40 exists')
            sideProduct_1 = kissen40_red_mwst
            sideProduct_1_total = kissen40_red_mwst_total
            steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, testcase.vat] }), testcase.mwst_2] }))//.toFixed(3);
            steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()   // needed for correct rounding
            console.log(sideProduct_1)
            console.log(sideProduct_1_total)
            console.log(steuer_betrag_2)
        }
        //  if only Kissen 50cm exists
        else if (kissen40_anzahl == 0 && kissen50_anzahl != 0) {
            console.log('Kissen50 exists')
            sideProduct_1 = kissen50_red_mwst
            sideProduct_1_total = kissen50_red_mwst_total
            steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, testcase.vat] }), testcase.mwst_2] }))//.toFixed(3);
            steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()   // needed for correct rounding
        }
        //  if both Kissen exist
        else if (kissen40_anzahl != 0 && kissen50_anzahl != 0) {
            console.log('both Kissen exist')
            sideProduct_1 = kissen40_red_mwst
            sideProduct_1_total = kissen40_red_mwst_total
            steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, testcase.vat] }), testcase.mwst_2] }))//.toFixed(3);
            steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()  // needed for correct rounding

            sideProduct_2 = kissen50_red_mwst
            sideProduct_2_total = kissen50_red_mwst_total
            steuer_betrag_3 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_2_total, testcase.vat] }), testcase.mwst_3] }))//.toFixed(3);
            steuer_betrag_3 = (Math.round(steuer_betrag_3 * 100) / 100).toFixed(2).toString()  // needed for correct rounding

            steuer_betrag_3 = steuer_betrag_3.replace('.', ',')
            sideProduct_2 = sideProduct_2.replace('.', ',')
            sideProduct_2_total = sideProduct_2_total.replace('.', ',')
        }

        //------------------------------------------IN CASE OF RABATT CODES--------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\

        let rabatt_betrag_mwst = 0;
        let rabatt_betrag_mwst_1 = 0;
        let rabatt_betrag_mwst_2 = 0;

        if (typeof testcase.rabatt_code != "undefined" && testcase.rabatt_code != "") {
            // checkout
            total_backend = (jsonLogic.apply({ '+': [summe_backend, sideProduct_1_total] })).toFixed(2)  //we test kissenhüllenrabattcodes with 1 vorhang and 1 kissen only
            rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            rabatt_betrag_mwst_1 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
            rabatt_betrag_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);

            sieSparen_mwst = (jsonLogic.apply({ '+': [sieSparen_mwst, rabatt_betrag_mwst] })).toFixed(2)

            // total_mwst = (jsonLogic.apply({ '-': [total_mwst, rabatt_betrag_mwst] })).toFixed(2)

            //deduct rabattbetrag from total and add versadnkosten
            total_backend = (jsonLogic.apply({ '-': [total_backend, rabatt_betrag_mwst] })).toFixed(2)
            total_backend = (jsonLogic.apply({ '+': [total_backend, versandkosten] })).toFixed(2)
            //Vorhang
            summe_backend = (jsonLogic.apply({ '-': [summe_backend, rabatt_betrag_mwst_1] })).toFixed(2)
            steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
            steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toFixed(2).toString()  // needed for correct rounding
            //Kissen
            sideProduct_1_total = (jsonLogic.apply({ '-': [sideProduct_1_total, rabatt_betrag_mwst_2] })).toFixed(2)
            steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, testcase.vat] }), testcase.mwst_2] })).toFixed(2);
            steuer_betrag_2 = (Math.round(steuer_betrag_2 * 100) / 100).toFixed(2).toString()  // needed for correct rounding
            //Vorhang+Kissen
            steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
            steuer_betrag_gesamt = (Math.round(steuer_betrag_gesamt * 100) / 100).toFixed(2).toString()  // needed for correct rounding

            rabatt_betrag_mwst = rabatt_betrag_mwst.replace('.', ',')
            rabatt_betrag_mwst_1 = rabatt_betrag_mwst_1.replace('.', ',')
            rabatt_betrag_mwst_2 = rabatt_betrag_mwst_2.replace('.', ',')
        }

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //-------------------------------------------------------------------------------------------------------------------------------\\



        //-------------------------------------------------------------------------------------------------------------------------------\\
        //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

        einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis = streichPreis.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis = redPreis.replace('.', ',')
        streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen = sieSparen.replace('.', ',')
        sieSparen_mwst = sieSparen_mwst.replace('.', ',')
        streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',')
        redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_2 = steuer_betrag_2.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        // total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sideProduct_1 = sideProduct_1.replace('.', ',')
        sideProduct_1_total = sideProduct_1_total.replace('.', ',')
        kissen40 = kissen40.replace('.', ',')
        kissen50 = kissen50.replace('.', ',')
        kissen40_red = kissen40_red.replace('.', ',')
        kissen50_red = kissen50_red.replace('.', ',')
        kissen40_total = kissen40_total.replace('.', ',')
        kissen50_total = kissen50_total.replace('.', ',')
        kissen40_red_total = kissen40_red_total.replace('.', ',')
        kissen50_red_total = kissen50_red_total.replace('.', ',')
        kissen40_mwst = kissen40_mwst.replace('.', ',')
        kissen40_red_mwst = kissen40_red_mwst.replace('.', ',')
        kissen40_mwst_total = kissen40_mwst_total.replace('.', ',')
        kissen40_red_mwst_total = kissen40_red_mwst_total.replace('.', ',')
        kissen50_mwst = kissen50_mwst.replace('.', ',')
        kissen50_red_mwst = kissen50_red_mwst.replace('.', ',')
        kissen50_mwst_total = kissen50_mwst_total.replace('.', ',')
        kissen50_red_mwst_total = kissen50_red_mwst_total.replace('.', ',')


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //*********************************************************************************************************************************/
        //****************************************** PRODUCT CONFIGURATION ****************************************************************/


        const emailSuffix = Date.now();
        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // visit URL
        await this.page.goto(testcase.produkt)


        // check from prices
        await expect(this.page.locator('.add-to-cart').locator(":scope > *").locator('.old-price > .price')).toContainText(testcase.ab_preis);
        await expect(this.page.locator('.add-to-cart').locator(":scope > *").locator('.special-price')).toContainText(testcase.ab_preis_red);


        // set Farbe
        await this.page.locator('img[alt=' + testcase.farbe + ']').click();


        // set Breite 
        // --> here we have to check if the input field for breite is given --> e.g. not available for Dardim, Cortinella
        const breite_field = await this.page.isVisible('#breite > div > input');

        if (breite_field) {
            await this.page.locator('#breite > div > input').fill(testcase.breite)
        }
        else {
            await this.page.locator('#breite > .content > ul > li').getByText(testcase.breite).first().click();
        }


        // set Höhe
        // --> here we have to check if the input field for höhe is given --> e.g. not available for Dardim
        const hoehe_field = await this.page.isVisible('#hoehe > .content > input');

        if (hoehe_field) {
            await this.page.locator('#hoehe > .content > input').fill(testcase.hoehe)
        }
        else {
            await this.page.locator('#hoehe > .content').locator('ul').locator('li').getByText(testcase.hoehe).first().click();
        }


        // set Befestigung
        if (testcase.befestigung != "") {
            await this.page.locator('#montage > div > ul').locator(":scope > *").getByText(testcase.befestigung).first().click();
        }


        // set Kissen
        if (testcase.kissen40 !== 0) {
            await this.page.getByText(/40x40cm/).first().click();
            await this.page.locator('.selected').filter({ has: this.page.getByText(/40x40cm/).first() }).locator('input[type="number"]').fill(((testcase.kissen40).toString()));
        }
        if (testcase.kissen50 !== 0) {
            await this.page.getByText(/50x50cm/).first().click();
            await this.page.locator('.selected').filter({ has: this.page.getByText(/50x50cm/).first() }).locator('input[type="number"]').fill(((testcase.kissen50).toString()));
        }

        // check prices of Kissen
        if (kissen40 !== "0,00") {
            await expect(this.page.locator('.selected').filter({ has: this.page.getByText(/40x40cm/).first() }).locator('div[class="old-price"]')).toContainText(kissen40);
            await expect(this.page.locator('.selected').filter({ has: this.page.getByText(/40x40cm/).first() }).locator('div[class="special-price"]')).toContainText(kissen40_red);
        }
        if (kissen50 !== "0,00") {
            await expect(this.page.locator('.selected').filter({ has: this.page.getByText(/50x50cm/).first() }).locator('div[class="old-price"]')).toContainText(kissen50);
            await expect(this.page.locator('.selected').filter({ has: this.page.getByText(/50x50cm/).first() }).locator('div[class="special-price"]')).toContainText(kissen50_red);
        }

        // check prices
        await expect(this.page.locator('.add-to-cart').locator(":scope > *").locator('.old-price > .price')).toContainText(streichPreis);
        await expect(this.page.locator('.add-to-cart').locator(":scope > *").locator('.special-price')).toContainText(redPreis);

        // add to cart
        await this.page.locator('#configurator-price-cart > .add-to-cart > :nth-child(2) input').fill(((testcase.anzahl).toString()));
        await this.page.locator('#configurator-price-cart > .add-to-cart > :nth-child(2) button').click()






        //*********************************************************************************************************************************/
        //******************************************************* CART *******************************************************************/

        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)

        // cart functions
        await newCart.checkCart_KH(testcase.kissen40, testcase.kissen50, streichPreis, redPreis, streichPreisTotal, redPreisTotal, kissen40, kissen40_red, kissen40_total, kissen40_red_total, kissen50, kissen50_red, kissen50_total, kissen50_red_total)

        await newCart.checkCartTotals(testcase.system, warenkorbTotal, sieSparen, testcase.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)


        //*********************************************************************************************************************************/
        //******************************************************* CHECKOUT ****************************************************************/

        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_backend, kissen40_mwst, kissen40_red_mwst, kissen40_mwst_total, kissen40_red_mwst_total, kissen50_mwst, kissen50_red_mwst, kissen50_mwst_total, kissen50_red_mwst_total)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, rabatt_betrag_mwst_1, rabatt_betrag_mwst_2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}