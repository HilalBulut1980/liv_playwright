import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Vorhang = class Vorhang {

    constructor(page) {
        this.page = page;
    }

    async configureVorhang(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

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


        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [grundpreis, konfektion, befestigung_preis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, konfektion_red, befestigung_preis] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2);
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, konfektion_mwst, befestigung_preis_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2);
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, konfektion_red_mwst, befestigung_preis_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2);
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, versandkosten] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, testcase.vat] }), testcase.mwst_1] }))//.toFixed(3);
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding

        let steuer_betrag_2
        let steuer_betrag_3
        // let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [versandkosten, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
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


        // visit product page
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
        await newCart.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, testcase.system)
        await newCart.checkCartTotals(testcase.system, warenkorbTotal, sieSparen, testcase.rabatt_code, testcase.rabatt_betrag, testcase.sieSparen_new, testcase.total_cart_new)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)


        //*********************************************************************************************************************************/
        //******************************************************* CHECKOUT ****************************************************************/

        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, testcase.rabatt_betrag_checkout, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, testcase.rabatt_betrag_backend, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, redPreis_mwst, redPreisTotal_mwst, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}