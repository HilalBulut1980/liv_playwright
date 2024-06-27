import { expect } from 'playwright/test'
import { Helper } from './helper'
import { Backend } from './backend'
import playwrightConfig from '../../playwright.config';
// Lade die Umgebungsvariablen aus der .env-Datei
require('dotenv').config();
const specialProducts = ["Zubehör", "Muster", "Muster_V", "Serviceprodukt", "Gutschein"]; //alle Produkte, wo kein Streichpreis angezeigt wird



exports.Checkout = class Checkout {

    constructor(page) {
        this.page = page;
    }


    async checkOut(system, customer, email, password, prefix, company_name, vatID1, prefix_business, first_name, last_name, street, postal_code, city, state, phone, shipping, shippingCost, prefix2, company_name2, vatID2, prefix_business2, first_name2, last_name2, street2, postal_code2, city2, state2, phone2, payment) {

        // Erstelle eine Instanz der Klasse Helper
        const newHelper = new Helper(this.page)

        if (customer == "customer") {
            await newHelper.continueAsCustomer(customer, email, password)
        }
        else {
            await newHelper.setBillingAddress(system, customer, prefix, company_name, vatID1, prefix_business, first_name, last_name, email, street, postal_code, city, state, phone, password, shipping)
        }

        await newHelper.setShippingAddress(system, customer, shipping, prefix2, company_name2, vatID2, prefix_business2, first_name2, last_name2, street2, postal_code2, city2, state2, phone2)

        await newHelper.checkShippingCosts(system, shippingCost)

        await newHelper.setPayment(system, payment)

    }

    async checkOut_negVATID(system, email, prefix, company_name, vatID1_false, vatID1_correct, prefix_business, first_name, last_name, street, postal_code, city, state, phone, shipping, shippingCost, prefix2, company_name2, vatID2_false, vatID2_correct, prefix_business2, first_name2, last_name2, street2, postal_code2, city2, state2, phone2, payment) {

        // Erstelle eine Instanz der Klasse Helper
        const newHelper2 = new Helper(this.page)

        // set PREFIX
        // we have only 'geschaeftskunde' cases
        await this.page.locator('#billing_anrede_geschaeftskunde').click()
        // set prefix of contact person, if user is a company
        if (prefix_business == "Frau") {
            // await this.page.locator('.anrede_frau').click()
            await this.page.locator('input[name="billing\\[prefix\\]"]').first().click()
        }
        if (prefix_business == "Herr") {
            await this.page.locator('.anrede_herr').click()
        }

        // set company name 
        await this.page.locator('[id="billing:company"]').fill(company_name)

        // set VAT ID if it exists AND if user = geschaeftskunde
        await this.page.locator('[id="billing:vat_id"]').fill(vatID1_false)

        // set first name, last name, email, address, postal code, city in billing address
        await this.page.locator('[id="billing:firstname"]').fill(first_name)
        await this.page.locator('[id="billing:lastname"]').fill(last_name)
        await this.page.locator('[id="billing:email"]').fill(email)
        await this.page.locator('[id="billing:street1"]').fill(street)
        await this.page.locator('[id="billing:postcode"]').fill(postal_code)
        await this.page.locator('[id="billing:city"]').fill(city)
        await this.page.locator('[id="billing:telephone"]').fill(phone)
        await this.page.selectOption("#billing\\:country_id", state)

        //An gleiche Adresse versenden
        if (shipping == "same") {
            await this.page.locator('input[title="An diese Adresse verschicken"]').check();
            await this.page.getByRole('button', { name: 'Weiter' }).click(); // Klick button WEITER

            // check js-alert and set correct vat id
            await newHelper2.check_js_alert()
            await this.page.locator('[id="billing:vat_id"]').clear()
            await this.page.locator('[id="billing:vat_id"]').fill(vatID1_correct)

            await this.page.getByRole('button', { name: 'Weiter' }).click(); // Klick button WEITER

        }

        // An unterschiedliche Lieferadresse versenden
        else if (shipping == "new") {
            await this.page.locator('input[title="An andere Adresse verschicken"]').check();
            await this.page.getByRole('button', { name: 'Weiter' }).click(); // Klick button WEITER

            // check js-alert and set correct vat id
            await newHelper2.check_js_alert()
            await this.page.locator('[id="billing:vat_id"]').clear()
            await this.page.locator('[id="billing:vat_id"]').fill(vatID1_correct)

            await this.page.getByRole('button', { name: 'Weiter' }).click(); // Klick button WEITER


            // ******************************** FILL SHIPPING FORM ************************************


            // select geschäftskunde
            await this.page.locator('#shipping_anrede_geschaeftskunde').check()
            // set prefix of contact person, if user is a company
            if (prefix_business2 == "Frau") {
                // await this.page.locator('.anrede_frau').check()
                await this.page.locator('.anrede_frau[name="shipping\\[prefix\\]"]').check()

            }
            if (prefix_business2 == "Herr") {
                // await this.page.locator('.anrede_herr').check()
                await this.page.locator('.anrede_herr[name="shipping\\[prefix\\]"]').check()
            }


            // set company name if it is a geschaeftskunde
            await this.page.locator('[id="shipping:company"]').fill(company_name2)

            // set VAT ID 
            await this.page.locator('[id="shipping:vat_id"]').fill(vatID2_false)

            // set first name, last name, email, address, postal code, city in billing address
            await this.page.locator('[id="shipping:firstname"]').fill(first_name2)
            await this.page.locator('[id="shipping:lastname"]').fill(last_name2)
            await this.page.locator('[id="shipping:street1"]').fill(street2)
            await this.page.locator('[id="shipping:postcode"]').fill(postal_code2)
            await this.page.locator('[id="shipping:city"]').fill(city2)
            await this.page.locator('[id="shipping:telephone"]').fill(phone2)
            await this.page.selectOption("#shipping\\:country_id", state2)

            //Fortsetzen Button
            await this.page.locator('#shipping-buttons-container button').click();

            // NO NEED TO CHECK JS ALERT again !!!
            // await newHelper2.check_js_alert()
            // --> NOT NEEDED SINCE page.on() remains active for the duration of the script's execution, 
            // and it will capture and handle events as they occur

            await this.page.locator('[id="shipping:vat_id"]').clear()
            await this.page.locator('[id="shipping:vat_id"]').fill(vatID2_correct)

            //Fortsetzen Button
            await this.page.locator('#shipping-buttons-container button').click();
        }


        // ******************************** CHECK SHIPPING COST ************************************

        // check shipping cost
        await newHelper2.checkShippingCosts(system, shippingCost)

        // ******************************** SET PAYMENT ************************************

        // set payment
        await newHelper2.setPayment(system, payment)

    }

    async checkFinalPrices(system, rabattCode, rabattBetrag, sieSparen, shippingCost, strike_checkout, strike_checkout_total, final_checkout, final_checkout_total, total_checkout, k40_original, k40_reduced, k40_original_total, k40_reduced_total, k50_original, k50_reduced, k50_original_total, k50_reduced_total) {


        // ****************************** CHECK MUSTER, GUTSCHEIN, SERVICE & ZUBEHÖR PRICES BESTELLÜBERSICHT ******************************
        // ********************************************************************************************************************************

        if (specialProducts.includes(system)) {  // products with no Streichpreis

            if ((system == 'Muster') || (system == 'Muster_V')) {

                final_checkout = "kostenlos";
                final_checkout_total = "kostenlos";
                shippingCost = "0,00";
                total_checkout = "0,00";
            }

            // special products without Streichpreis
            await expect(this.page.locator('span[class="cart-price"] > div')).toContainText(final_checkout);
            await expect(this.page.locator('span[class="cart-price cart-zwischensumme"] > div')).toContainText(final_checkout_total);

            // check SIE SPAREN for special products if rabattcode exists
            if (typeof rabattCode !== "undefined") {
                await expect(this.page.locator("div.checkout_totals > p:nth-of-type(3)")).toContainText(sieSparen);
            }

        }


        // PRODUCT IS NONE OF THIS --> GUTSCHEIN / MUSTER / SERVICEPRODUKT / ZUBEHÖR
        // ****************************** CHECK PRODUCT PRICES BESTELLÜBERSICHT ******************************
        // *****************************************************************************************************

        else {  // product ist not special product

            const ersteZeile = 'div:nth-of-type(1)';
            const zweiteZeile = 'div:nth-of-type(2)';
            const dritteZeile = 'div:nth-of-type(3)';


            await expect(this.page.locator(ersteZeile + ' > span:nth-of-type(1) span:nth-of-type(1) > span')).toContainText(strike_checkout);
            await expect(this.page.locator(ersteZeile + ' > span:nth-of-type(1) > div > span.price')).toContainText(final_checkout);
            await expect(this.page.locator(ersteZeile + ' > span.cart-zwischensumme span:nth-of-type(1) > span')).toContainText(strike_checkout_total);
            await expect(this.page.locator(ersteZeile + ' > span.cart-zwischensumme > div > span.price')).toContainText(final_checkout_total);


            // check KISSENSET (multiple products)
            if (system == "Kissenhuelle_set") {

                // A - Vorhang + Kissen 40
                if (k40_original != "0,00" && k50_original == "0,00") {

                    // Kissen 40 cm
                    // Streichpreis einzel 
                    await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span:nth-of-type(1) > span')).toContainText(k40_original);
                    // red. Einzelpreis
                    await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) > div > span.price')).toContainText(k40_reduced);
                    //Streichpreis gesamt
                    await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span:nth-of-type(1) > span')).toContainText(k40_original_total);
                    //red. Gesamtpreis
                    await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme > div > span.price')).toContainText(k40_reduced_total);

                }

                // B - Vorhang + Kissen 50
                else if (k50_original != "0,00" && k40_original == "0,00") {

                    // Kissen 50 cm
                    // Streichpreis einzel 
                    await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span:nth-of-type(1) > span')).toContainText(k50_original);
                    // red. Einzelpreis
                    await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) > div > span.price')).toContainText(k50_reduced);
                    //Streichpreis gesamt
                    await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span:nth-of-type(1) > span')).toContainText(k50_original_total);
                    //red. Gesamtpreis
                    await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme > div > span.price')).toContainText(k50_reduced_total);
                }

                // C - Vorhang + Kissen 40 + Kissen 50
                else if (k40_original != "0,00" && k50_original != "0,00") {

                    // Kissen 40 cm
                    // Streichpreis einzel 
                    await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span:nth-of-type(1) > span')).toContainText(k40_original);
                    // red. Einzelpreis
                    await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) > div > span.price')).toContainText(k40_reduced);
                    //Streichpreis gesamt
                    await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span:nth-of-type(1) > span')).toContainText(k40_original_total);
                    //red. Gesamtpreis
                    await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme > div > span.price')).toContainText(k40_reduced_total);

                    // Kissen 50 cm
                    // Streichpreis einzel 
                    await expect(this.page.locator(dritteZeile + ' > span:nth-of-type(1) span:nth-of-type(1) > span')).toContainText(k50_original);
                    // red. Einzelpreis
                    await expect(this.page.locator(dritteZeile + ' > span:nth-of-type(1) > div > span.price')).toContainText(k50_reduced);
                    //Streichpreis gesamt
                    await expect(this.page.locator(dritteZeile + ' > span.cart-zwischensumme span:nth-of-type(1) > span')).toContainText(k50_original_total);
                    //red. Gesamtpreis
                    await expect(this.page.locator(dritteZeile + ' > span.cart-zwischensumme > div > span.price')).toContainText(k50_reduced_total);

                }

            }

            // check SIE SPAREN --> only for products with Streichpreis
            await expect(this.page.locator("div.checkout_totals > p:nth-of-type(3)")).toContainText(sieSparen);
        }



        // ****************************** CHECK VERSANDKOSTEN  IN BESTELLÜBERSICHT ******************************
        // ******************************************************************************************************

        await expect(this.page.locator('.versandkosten_info + .price')).toContainText(shippingCost);


        // ****************************** CHECK SIE SPAREN IN BESTELLÜBERSICHT *********************************
        // *****************************************************************************************************

        // Nur bei Produkten mit Streichpreis

        if (!specialProducts.includes(system)) {
            await expect(this.page.locator("div.checkout_totals > p:nth-of-type(3)")).toContainText(sieSparen);
        }

        // ****************************** CHECK RABATTCODE and RABATTBETRAG IN BESTELLÜBERSICHT ******************
        // *******************************************************************************************************

        if (typeof rabattCode !== "undefined") { //if Code exists

            await expect(this.page.locator('.checkout_totals')).toContainText(rabattCode);
            await expect(this.page.locator('.checkout_totals').locator(":scope > *").nth(0)).toContainText(rabattBetrag);
        }


        // ****************************** CHECK FINAL TOTAL IN BESTELLÜBERSICHT ********************************
        // *****************************************************************************************************

        await expect(this.page.locator("div.checkout_totals > div:nth-of-type(2) span")).toContainText(total_checkout);

    }

    async placeOrder(system, payment, failedPayment, canceledPayment, shipping, rabattCode, rabattBetrag, rabattBetrag2, vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6, vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6, vatTotal, final_backend, final_backend_total, nebenProdukt1, nebenProdukt1_total, nebenProdukt2, nebenProdukt2_total, nebenProdukt3, nebenProdukt3_total, nebenProdukt4, nebenProdukt4_total, nebenProdukt5, nebenProdukt5_total, total_backend) {


        // Erstelle eine Instanz der Klasse Helper
        const newHelper = new Helper(this.page)
        const newBackend = new Backend(this.page)


        // ************************************************** TEST ON PRODUCTION / OR TESTUMGEBUNG ***********************************************
        // ******************************************************* NO ORDER **********************************************************************

        if (process.env.PLACE_ORDER == 'false' || process.env.BASE_URL == "https://www.livoneo.de/") {  // WE ARE TESTING ON PRODUCTION

            // empty cart
            await newHelper.emptyCart()

            // check 'deleted' messages
            await expect(this.page.locator('h1:text("Der Warenkorb ist leer")')).toBeVisible()
            await expect(this.page.locator('span:text("Das Produkt wurde erfolgreich aus Ihrem Warenkorb entfernt.")')).toBeVisible()
        }



        // ************************************************** TEST ON  TESTUMGEBUNG ***********************************************
        // ******************************************************* PLACE ORDER **********************************************************************

        else
            if (process.env.PLACE_ORDER == 'true' || process.env.BASE_URL != "https://www.livoneo.de/") {

                // confirm order
                console.log('TRUE: PLACE ORDER')

                await newHelper.confirmOrder(system, payment, canceledPayment, failedPayment)
                await newHelper.checkSuccessPage()
                const BestelllNummer = await newHelper.getOrderNumber()

                console.log('BESTELLNUMMER: ' + BestelllNummer)

                // go to backend page
                await this.page.goto(process.env.BACKEND_URL)

                // login 
                await newBackend.login()

                // select order
                await newBackend.getOrder(BestelllNummer)

                //check order 
                console.log('VAT TOTAL CHECKOUT: ' + vatTotal)
                await newBackend.checkOrder(system, shipping, rabattCode, rabattBetrag, rabattBetrag2, vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6, vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6, vatTotal, final_backend, final_backend_total, nebenProdukt1, nebenProdukt1_total, nebenProdukt2, nebenProdukt2_total, nebenProdukt3, nebenProdukt3_total, nebenProdukt4, nebenProdukt4_total, nebenProdukt5, nebenProdukt5_total, total_backend)

                // logout
                await newBackend.logout()
            }
    }
}