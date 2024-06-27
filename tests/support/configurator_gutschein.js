import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Gutschein = class Gutschein {

    constructor(page) {
        this.page = page;
    }

    async configureGutschein(testcase) {

        let grundPreis_red = testcase.grundpreis.toFixed(2);

        //Konfigurator & Warenkorb
        let redPreis = grundPreis_red
        let redPreisTotal = (jsonLogic.apply({ '*': [grundPreis_red, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = redPreisTotal
        let sieSparen //= (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)


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
        let streichPreis_mwst// = grundpreis_mwst;
        let streichPreisTotal_mwst //= (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2);
        let redPreis_mwst = grundPreis_red
        let redPreisTotal_mwst = redPreisTotal
        let sieSparen_mwst //= (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = redPreisTotal //50/120*20=8,33

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = redPreis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, testcase.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let steuer_betrag_2
        let steuer_betrag_3
        let steuer_betrag_gesamt = steuer_betrag
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
            rabatt_betrag_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, 100] }), testcase.rabatt_faktor_a] })).toFixed(2);
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

        redPreis = redPreis.replace('.', ',')
        redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',')
        redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        // total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //********************************************************************************************************************************/

        const emailSuffix = Date.now();
        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // visit URL
        await this.page.goto(testcase.produkt)
        // await this.page.waitForTimeout(3000);


        if (testcase.modell == "Email") {

            await this.page.locator('#product_addtocart_form_4908  > :nth-child(1) > :nth-child(1) input').type(testcase.beschenkter);
            await this.page.waitForTimeout(500);
            await this.page.locator('#product_addtocart_form_4908  > :nth-child(1) > :nth-child(2) input').type(testcase.betrag);
            await this.page.waitForTimeout(500);
            await this.page.locator('#product_addtocart_form_4908  > :nth-child(1) > :nth-child(3) input').type(testcase.nachricht);
            await this.page.waitForTimeout(500);

            await this.page.locator('#product-price-4908').click(); // --> same problem which we have on stage. 'unser preis' remains unchanged
            await expect(this.page.locator('#product-price-4908')).toContainText(redPreis); // --> same problem which we have on stage. 'unser preis' remains unchanged

            await this.page.locator('#product_addtocart_form_4908 > .add_to_cart input').fill(((testcase.anzahl).toString()));
            await this.page.locator('#product_addtocart_form_4908 > .add_to_cart button').click();

        }
        else if (testcase.modell == "Post") {

            await this.page.locator('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(1) input').type(testcase.beschenkter);
            await this.page.locator('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(2) input').type(testcase.strasse);
            await this.page.locator('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(3) input').type(testcase.betrag);
            await this.page.locator('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(4) input').type(testcase.plz);
            await this.page.locator('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(5) input').type(testcase.nachricht);
            await this.page.locator('#product_addtocart_form_4909  > :nth-child(1) > :nth-child(6) input').type(testcase.stadt);

            await expect(this.page.locator('#product-price-4909')).toContainText(redPreis); // --> same problem which we have on stage. 'unser preis' remins unchanged

            await this.page.locator('#product_addtocart_form_4909 > .add_to_cart input').fill(((testcase.anzahl).toString()));
            await this.page.locator('#product_addtocart_form_4909 > .add_to_cart button').click();
        }

        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // cart functions
        await newCart.checkCartSpecial(testcase.system, redPreis, redPreisTotal)
        await newCart.checkCartTotals(testcase.system, warenkorbTotal, sieSparen, testcase.rabatt_code, rabatt_betrag, sieSparen_new, total_cart_new)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, rabatt_betrag_mwst, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}