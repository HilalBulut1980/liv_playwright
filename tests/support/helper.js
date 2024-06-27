import { expect } from 'playwright/test'

exports.Helper = class Helper {

    constructor(page) {
        this.page = page;
    }


    async continueAsCustomer(user, email, password) {  // ZUM LOGIN

        if (user == "customer") {
            await this.page.locator('.login-button').click();
            await this.page.locator('input[id="email"]').fill(email);
            await this.page.locator('input[id="pass"]').fill(password);
            await this.page.locator('button').getByText(/Anmelden/).first().click();
        }

    }


    async setBillingAddress(system, user, prefix, company_name, vatID1, prefix_business, first_name, last_name, email, street, postal_code, city, state, phone, password, shipping) {


        // //******************************************** DREI MÖGLICHE FÄLLE ****************************************************************************** */
        // //******************************************* (1) user = guest ODER user = register **************************************************************/
        // //********************************************(2) user = customer mit neuer Rechn.anschrift *****************************************************/
        // //******************************************* (3) user = customer (registered customer) mit bestehender Rechn.anschrift ********************** */

        // //******************************************** FALL 2 ****************************************************************************************/
        // user is a REGISTERED customer and the billing address needs to be overwritten  --> then we have to fill the form 'billing'
        if (user == "customer" && first_name != "") { // first_name !="" means that there is a different billing addres in the testcase 
            await this.page.locator('select[id="billing-address-select"]').selectOption({ label: "Neue Adresse" })

            //******************************************* FILL FORM RECHUNGSANSCHRIFT ************************************************************************/
            //******************************************* FIRST CLEAR THEN FILL *****************************************************************************/

            // set PREFIX
            if (prefix == "Frau") {
                await this.page.locator('#billing_anrede_frau').click()
            }
            if (prefix == "Herr") {
                await this.page.locator('#billing_anrede_herr').click()
            }
            if (prefix == "geschaeftskunde") {
                await this.page.locator('#billing_anrede_geschaeftskunde').click()
                // set prefix of contact person, if user is a company
                if (prefix_business == "Frau") {
                    await this.page.locator('.anrede_frau').click()
                }
                if (prefix_business == "Herr") {
                    await this.page.locator('.anrede_herr').click()
                }
            }

            // set company name if it is a geschaeftskunde
            if (prefix == "geschaeftskunde") {
                await this.page.locator('[id="billing:company"]').fill(company_name)
            }

            // set VAT ID if it exists AND if user = geschaeftskunde
            if (typeof vatID1 !== "undefined" && vatID1 != "" && prefix == "geschaeftskunde") {
                await this.page.locator('[id="billing:vat_id"]').fill(vatID1)
            }

            // set first name, last name, email, address, postal code, city in billing address
            if (first_name != "") {
                await this.page.locator('[id="billing:firstname"]').clear()
                await this.page.locator('[id="billing:firstname"]').fill(first_name)
            }
            if (last_name != "") {
                await this.page.locator('[id="billing:lastname"]').clear()
                await this.page.locator('[id="billing:lastname"]').fill(last_name)
            }
            if (user != "customer" && email != "") { // if user is not a registered customer
                await this.page.locator('[id="billing:email"]').clear()
                await this.page.locator('[id="billing:email"]').fill(email)
            }
            if (street != "") {
                await this.page.locator('[id="billing:street1"]').clear()
                await this.page.locator('[id="billing:street1"]').fill(street)
            }
            if (postal_code != "") {
                await this.page.locator('[id="billing:postcode"]').clear()
                await this.page.locator('[id="billing:postcode"]').fill(postal_code)
            }
            if (city != "") {
                await this.page.locator('[id="billing:city"]').clear()
                await this.page.locator('[id="billing:city"]').fill(city)
            }
            if (phone != "") {
                await this.page.locator('[id="billing:telephone"]').clear()
                await this.page.locator('[id="billing:telephone"]').fill(phone)
            }
            if (state != "") {
                await this.page.selectOption("#billing\\:country_id", state)
            }
        }

        //******************************************** FALL 1 ****************************************************************************************/
        // user = guest ODER user = register --> we have to fill the form 'billing'
        else if (user == "guest" || user == "register") {


            //******************************************* FILL FORM RECHUNGSANSCHRIFT ************************************************************************/
            //******************************************* DO NOT CLEAR (playwright only clears if input is not empty) ****************************************/

            // set PREFIX
            if (prefix == "Frau") {
                await this.page.locator('#billing_anrede_frau').check()
            }
            if (prefix == "Herr") {
                await this.page.locator('#billing_anrede_herr').check()
            }
            if (prefix == "geschaeftskunde") {
                await this.page.locator('#billing_anrede_geschaeftskunde').check()
                // set prefix of contact person, if user is a company
                // set prefix of contact person, if user is a company
                if (prefix_business == "Frau") {
                    await this.page.locator('.anrede_frau[name="billing\\[prefix\\]"]').check()

                }
                if (prefix_business == "Herr") {
                    await this.page.locator('.anrede_herr[name="billing\\[prefix\\]"]').check()
                }
            }

            // set company name if it is a geschaeftskunde
            if (prefix == "geschaeftskunde") {
                await this.page.locator('[id="billing:company"]').fill(company_name)
            }

            // set VAT ID if it exists AND if user = geschaeftskunde
            if (typeof vatID1 !== "undefined" && vatID1 != "" && prefix == "geschaeftskunde") {
                await this.page.locator('[id="billing:vat_id"]').fill(vatID1)
            }

            // set first name, last name, email, address, postal code, city in billing address
            if (first_name != "") {
                await this.page.locator('[id="billing:firstname"]').fill(first_name)
            }
            if (last_name != "") {
                await this.page.locator('[id="billing:lastname"]').fill(last_name)
            }
            if (user != "customer" && email != "") { // if user is not a registered customer
                await this.page.locator('[id="billing:email"]').fill((email).toString())
            }
            if (street != "") {
                await this.page.locator('[id="billing:street1"]').fill(street)
            }
            if (postal_code != "") {
                await this.page.locator('[id="billing:postcode"]').fill(postal_code)
            }
            if (city != "") {
                await this.page.locator('[id="billing:city"]').fill(city)
            }
            if (phone != "") {
                await this.page.locator('[id="billing:telephone"]').fill(phone)
            }
            if (state != "") {
                await this.page.selectOption("#billing\\:country_id", state)
            }
            if (user == "register") { // if user wants to register
                await this.page.locator(' #customer_account_create').check();
                await this.page.locator('#billing\\:customer_password').fill(password)
                await this.page.locator('#billing\\:confirm_password').fill(password)
            }
        }

        //******************************************** FALL 3 ****************************************************************************************/
        // user = customer (registered customer) mit bestehender Rechn.anschrift
        else if (user == "customer" && first_name == "") {
            // DO NOTHING - USE ADDRESS FROM ACCOUNT
        }



        // check if SHIPPING ADDRESS is needed --> select 'diese Adresse' OR 'andere Adresse' 
        // if (system != "Muster" && system != "Muster_V") { // wenn Produkt kein Muster

        //     if (shipping == "same") {
        //         await this.page.locator('input[title="An diese Adresse verschicken"]').check();
        //     }
        //     else if (shipping == "new") {
        //         await this.page.locator('input[title="An andere Adresse verschicken"]').check();
        //     }
        // }

        // click button WEITER
        // await this.page.getByRole('button', { name: 'Weiter' }).click(); // Klick button WEITER
    }


    async setShippingAddress(system, login, shipping, prefix2, company_name2, vatID2, prefix_business2, first_name2, last_name2, street2, postal_code2, city2, state2, phone2) {



        // check if SHIPPING ADDRESS is needed --> select 'diese Adresse' OR 'andere Adresse' 
        // ----------------------------------------------------------------------------------

        if (system != "Muster" && system != "Muster_V") { // wenn Produkt kein Muster

            if (shipping == "same") {
                await this.page.locator('input[title="An diese Adresse verschicken"]').check();
                await expect(this.page.getByRole('button', { name: 'Weiter' })).toBeVisible()// Warte bis WEITER-Button sichtbar ist
                await this.page.getByRole('button', { name: 'Weiter' }).click(); // Klick button WEITER

            }
            // **************************** FILL IN SHIPPING FORM ****************************
            // -------------------------------------------------------------------------------

            else if (shipping == "new") { // --> ONLY THEN FILL IN SHIPPING ADDRESS 
                await this.page.locator('input[title="An andere Adresse verschicken"]').check();
                await this.page.getByRole('button', { name: 'Weiter' }).click(); // Klick button WEITER

                if (login == "customer") {
                    await this.page.locator('select[id="shipping-address-select"]').selectOption({ label: "Neue Adresse" });
                }

                // set PREFIX
                if (prefix2 == "Frau") {
                    await this.page.locator('#shipping_anrede_frau').check()
                }
                if (prefix2 == "Herr") {
                    await this.page.locator('#shipping_anrede_herr').check()
                }
                if (prefix2 == "geschaeftskunde") {
                    await this.page.locator('#shipping_anrede_geschaeftskunde').check()
                    // set prefix of contact person, if user is a company
                    if (prefix_business2 == "Frau") {
                        await this.page.locator('.anrede_frau[name="shipping\\[prefix\\]"]').check()

                    }
                    if (prefix_business2 == "Herr") {
                        await this.page.locator('.anrede_herr[name="shipping\\[prefix\\]"]').check()
                    }
                }

                // set company name if it is a geschaeftskunde
                if (prefix2 == "geschaeftskunde") {
                    await this.page.locator('[id="shipping:company"]').fill(company_name2)
                }

                // set VAT ID if it exists AND if user = geschaeftskunde
                if (typeof vatID2 !== "undefined" && vatID2 != "" && prefix2 == "geschaeftskunde") {
                    await this.page.locator('[id="shipping:vat_id"]').fill(vatID2)
                }

                // set first name, last name, email, address, postal code, city in billing address
                if (first_name2 != "") {
                    await this.page.locator('[id="shipping:firstname"]').fill(first_name2)
                }
                if (last_name2 != "") {
                    await this.page.locator('[id="shipping:lastname"]').fill(last_name2)
                }
                if (street2 != "") {
                    await this.page.locator('[id="shipping:street1"]').fill(street2)
                }
                if (postal_code2 != "") {
                    await this.page.locator('[id="shipping:postcode"]').fill(postal_code2)
                }
                if (city2 != "") {
                    await this.page.locator('[id="shipping:city"]').fill(city2)
                }
                if (phone2 != "") {
                    await this.page.locator('[id="shipping:telephone"]').fill(phone2)
                }
                if (state2 != "") {
                    await this.page.selectOption("#shipping\\:country_id", state2)
                }

                //Fortsetzen Button
                await this.page.locator('#shipping-buttons-container button').click();

            }
        }
        else
            if (system == "Muster" || system == "Muster_V") {
                await this.page.locator('button[title="Weiter"]').click();
            }

    }


    async checkShippingCosts(system, shippingCost) {


        if (system != "Muster" && system != "Muster_V") { // WENN PRODUKT KEIN MUSTER IST

            if (system == "Gutschein") {  //WENN PRODUKT = GUTSCHEIN IST
                await expect(this.page.locator('label[for="s_method_freeshipping_freeshipping"]')).toHaveText(/Versandkostenfrei/);
                await expect(this.page.locator('label[for="s_method_freeshipping_freeshipping"]')).toHaveText(/0,00/);
            }
            else {
                await expect(this.page.locator('span.price')).toContainText(shippingCost);
            }

            await this.page.waitForTimeout(3000); 

            // Button "Weiter" @Versandkosten
            await expect(this.page.locator('#co-shipping-method-form > .buttons-set > .button')).toBeVisible()// Warte bis WEITER-Button sichtbar ist
            await this.page.locator('#co-shipping-method-form > .buttons-set > .button').click()// Warte bis WEITER-Button sichtbar ist

            // ******************************************* WAIT FOR JS FILES RESPONSE ****************************************************************
            // häufig fehler bei Testcase: configure_neg_vatid_at_gast_same_address.spec.js
            // --> nach Klick auf Weiter-Button geschieht nichts - Test zu schnell?!
            // workaround:
            // Warte auf die Antwort für js-Dateien-Request und überprüfe den Statuscode 200
            // abhängig von Rechnungsanschrift und Versandanschrift kann die URL variieren: 
            // /checkout/onepage/saveShippingMethod oder /checkout/onepage/saveBilling
            // um beides abzudecken nur '/checkout/onepage/save'

            await Promise.all([
                this.page.waitForResponse(response =>
                    response.url().includes('/checkout/onepage/save')
                    && response.status() === 200, { timeout: 5000 }
                    && console.log('RESPONSE RECEIVED')
                )
            ]);
        }
    }


    async setPayment(system, payment) {

        if (system == "Muster" || system == "Muster_V") {

            //  DO NOTHING - NO PAYMENT SELECTION FOR MUSTER
        }
        // WENN KEIN MUSTERPRODUKT
        else {

            // await expect(this.page.locator('img[alt="Vorkasse"]')).toBeVisible();
            await expect(this.page.locator('#checkout-payment-method-load').getByRole('img', { name: 'Vorkasse' })).toBeVisible();
            await expect(this.page.locator('img[class="paypal-logo paypal-logo-paypal paypal-logo-color-default"]')).toBeVisible();

            if (payment == "bankpayment") {
                await this.page.locator('dt[class="ppp bankpayment"]').click();
                await expect(this.page.locator('dd[class="ppp bankpayment ppp-selected"]')).toBeVisible(); //only an additional check of the right selection


            }
            else if (payment == "Paypal") {
                await this.page.locator('dt[class="ppp paypal ppp-selected"]').click();
                await expect(this.page.locator('dd[class="ppp paypal ppp-selected"]')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Kreditkarte") {
                await this.page.locator('dt[class="ppp card"]').click();
                await expect(this.page.locator('dd[class="ppp card ppp-selected"]')).toBeVisible(); //only an additional check of the right selection

            }
            else if (payment == "Giropay") {
                // await this.page.locator('dt[class="ppp giropay"]').waitForTimeout(2000);
                await this.page.locator('dt[class="ppp giropay"]').click();
                await expect(this.page.locator('dd[class="ppp giropay ppp-selected"]')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Sepa") {
                await this.page.locator('dt[class="ppp sepa"]').click();
                await expect(this.page.locator('dd[class="ppp sepa ppp-selected"]')).toBeVisible(); //only an additional check of the right selection
            }
            else if (payment == "Sofort") {
                await this.page.locator('dt[class="ppp sofort"]').click();
                await expect(this.page.locator('dd[class="ppp sofort ppp-selected"]')).toBeVisible(); //only an additional check of the right selection

            }
            else if (payment == "Rechnungskauf") {
                await this.page.locator('dt[class="ppp ratepay"]').click();
                await expect(this.page.locator('dd[class="ppp ratepay ppp-selected"]')).toBeVisible(); //only an additional check of the right selection
                await this.page.locator('select[name="payment[birthdate_day]"]').selectOption({ label: '01' });
                await this.page.locator('select[name="payment[birthdate_month]"]').selectOption({ label: '01' });
                await this.page.locator('select[name="payment[birthdate_year]"]').selectOption({ label: '2000' });
            }
            await this.page.locator('.button.payment-submit-button').click();
        }

    }


    async emptyCart() {

        await this.page.locator('.smallcartdiv').click()

        // bei mehreren produkten --> zB Kissen Sets
        while (await this.page.isVisible('.remove-item')) {  // solange das Element sichtbar ist
            // Klicke auf das Element mit der Klasse 'remove-item'
            await this.page.locator('.remove-item').first().click(); // entferne immer das erste element
        }
    }

    async check_js_alert() { // NEW: DE, AT und CH werden nicht validiert --> kein Alert bei falschen UIDS
        // Listen for the 'dialog' event --> page.on() --> we can remove the event listener with page.off() later 
        await this.page.on('dialog', async (dialog) => {
            // Check if the dialog type is 'alert'
            if (dialog.type() === 'alert') {
                // Get the text of the alert
                const alertText = dialog.message();

                // Perform an assertion on the alert text
                expect(alertText).toBe('Die USt-IdNr. ist ungültig.');
                console.log('Alert: ' + alertText)

                // Accept the alert (close it)
                await dialog.accept();
                console.log('Alert accepted')

                // workaround - if the alert cannot be closed:
                // Automatically close the dialog after a delay (adjust the delay as needed)
                // setTimeout(async () => {
                //     await dialog.accept();
                // }, 1000); // 2 seconds delay
            }
        });
    }

    async confirmOrder(system, payment, canceledPayment, failedPayment) {

        // set agreements
        await this.page.locator('#agreement-1').check();
        await this.page.locator('#agreement-2').check();

        // if product is a muster
        if (system == "Muster" || system == "Muster_V") {
            await this.page.locator('button[title="Kostenfrei bestellen"]').click();
        }

        // non-muster
        else {


            // ************************************************* VORKASSE *************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            if (payment == "bankpayment") {
                await this.page.locator('button[title="Jetzt Kaufen"]').click();
            }


            // ************************************************* PAYPAL ***************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            else if (payment == "Paypal") {
                console.log('PAYPAL')

                // find and save iframe
                const iframe = await this.page.frameLocator('.component-frame')

                // Click on the PayPal button inside PayPal's iframe
                // new window opens
                const [PP_popup] = await Promise.all([
                    this.page.waitForEvent('popup'),
                    await iframe.getByLabel('Mit PayPal zahlen').click()
                ])

                // wait until new window is loaded
                await PP_popup.waitForLoadState();

                console.log('title of PP-popup: ' + await PP_popup.title());
                console.log('title of main page: ' + await this.page.title());

                // now we can interact with elements of the new window
                await PP_popup.locator("#email").type("sb-zsomv8592744@personal.example.com");  // btnNext
                await PP_popup.locator("#btnNext").click();
                await PP_popup.locator("#password").type("c)79sJ!.");
                await PP_popup.locator("#btnLogin").click();
                await expect(PP_popup.locator('div[data-testid="fi-amount"]')).toContainText('163,00 EUR');
                await PP_popup.locator('button#payment-submit-btn').click();

            }


            // ************************************************* CREDIT CARD  *********************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            else if (payment == "Kreditkarte") {
                console.log('KREDITKARTE')

                // this.page.FIXME_creditcardFlow();

                // find and save iframe
                const iframe = await this.page.frameLocator('.component-frame')
                await iframe.getByLabel('Debit- oder Kreditkarte').click()

                // Verzögerung von 5 Sekunden --> TIME TO LOAD THE IFRAME CONTENT
                await this.page.waitForTimeout(5000);

                // @CREDITCARD WE HAVE AN IFRAME INSIDE ANOTHER IFRAME
                const cc_window = await iframe.frameLocator('.zoid-visible')

                // credit card information
                await cc_window.locator('#credit-card-number').fill('4020022493974697')
                await cc_window.locator('#expiry-date').fill('11 / 24')
                await cc_window.locator('#credit-card-security').fill('079')

                // personal information
                await cc_window.locator('input[name="givenName"]').fill('Hilal')
                await cc_window.locator('input[name="familyName"]').fill('Bulut')
                await cc_window.locator('input[name="line1"]').fill('Kobelgasse 7')
                await cc_window.locator('input[name="line2"]').fill('Hochparterre')
                await cc_window.locator('input[name="postcode"]').fill('21109')
                await cc_window.locator('input[name="city"]').fill('Hamburg')
                await cc_window.locator('input[name="phone"]').fill('17600099955')
                await cc_window.locator('input[name="email"]').fill('hilal@livoneo.com')

                // click submit button within iframe
                await cc_window.locator('button#submit-button').click()


            }

            // ************************************************* SOFORT || GIRO ***************************************************/
            //*********************************************************************************************************************/
            //*********************************************************************************************************************/
            //*********************************************************************************************************************/

            else if (payment == "Giropay" || payment == "Sofort") {
                console.log('GIROPAY OR SOFORT')

                // click jetzt kaufen button
                await this.page.getByRole('button', { name: 'Jetzt kaufen' }).click();

                // Wait for the new page to load
                await this.page.waitForLoadState('load');

                if (canceledPayment == true) {

                    await this.page.locator("[data-testid='Canceled']").click()
                    console.log('PAYMENT CANCELED')

                    // Wait for the new page to load
                    await this.page.waitForLoadState('load');

                    //after the alert you will be redirected to 'Warenkorb' (früher 'Zahlungsinformation')

                    //proceed to checkout
                    await this.page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();
                    await expect(this.page).toHaveURL(new RegExp('/checkout/onepage'));

                    // billing address --> click buttun 'Weiter'
                    await this.page.locator('button[title="Weiter"]:visible').click();

                    // shipping information --> click button 'Weiter
                    await this.page.locator('#opc-shipping_method > .step.a-item > form > .buttons-set > button').click();

                    //payments: select 'Vorkasse' this time
                    await this.page.locator('dt[class="ppp bankpayment"]').click();
                    await expect(this.page.locator('dd[class="ppp bankpayment ppp-selected"]')).toBeVisible(); //only an additional check of the right selection

                    //click 'Fortsetzen' -Button
                    await this.page.locator('.button.payment-submit-button').click();

                    //retry to submit the order @Bestellübersicht
                    await this.page.waitForTimeout(2000);
                    await this.page.locator('#agreement-1').check();
                    await this.page.locator('#agreement-2').check();

                    // we choosed 'Vorkasse' after the alert-check
                    await this.page.locator('button[title="Jetzt Kaufen"]').click();

                }

                else if (failedPayment == true) {

                    await this.page.locator("[data-testid='Failed']").click()
                    console.log('PAYMENT FAILED')

                    // Wait for the new page to load
                    await this.page.waitForLoadState('load');

                    //after the alert you will be redirected to 'Warenkorb' (früher 'Zahlungsinformation')

                    //proceed to checkout
                    await this.page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();
                    await expect(this.page).toHaveURL(new RegExp('/checkout/onepage'));

                    // billing address --> click buttun 'Weiter'
                    await this.page.locator('button[title="Weiter"]:visible').click();

                    // shipping information --> click button 'Weiter
                    await this.page.locator('#opc-shipping_method > .step.a-item > form > .buttons-set > button').click();

                    //payments: select 'Vorkasse' this time
                    await this.page.locator('dt[class="ppp bankpayment"]').click();
                    await expect(this.page.locator('dd[class="ppp bankpayment ppp-selected"]')).toBeVisible(); //only an additional check of the right selection

                    //click 'Fortsetzen' -Button
                    await this.page.locator('.button.payment-submit-button').click();

                    //retry to submit the order @Bestellübersicht
                    await this.page.waitForTimeout(2000);
                    await this.page.locator('#agreement-1').check();
                    await this.page.locator('#agreement-2').check();

                    // we choosed 'Vorkasse' after the alert-check
                    await this.page.locator('button[title="Jetzt Kaufen"]').click();

                }
                else { //successful payment


                    await this.page.locator("[data-testid='Successful']").click()

                    // Wait for the new page to load
                    await this.page.waitForLoadState('load');
                }


            }


            // ************************************************* SEPA *****************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/

            else if (payment == "Sepa") {//Lastschrift
                console.log('SEPA')

                // find and save iframe
                const iframe = await this.page.frameLocator('.component-frame')

                // Click on the PayPal button inside PayPal's iframe
                // new window opens
                const [Sepa_popup] = await Promise.all([
                    this.page.waitForEvent('popup'),
                    await iframe.locator('div[data-funding-source="sepa"] .paypal-button-label-container').click()
                ])

                // wait until new window is loaded
                await Sepa_popup.waitForLoadState();

                console.log('title of PP-popup: ' + await Sepa_popup.title());
                console.log('title of main page: ' + await this.page.title());

                // now we can interact with elements of the new window
                await Sepa_popup.locator("input#bankIban").type("DE80494501201220230930");
                await Sepa_popup.locator("input#dateOfBirth").type("01012000");
                await Sepa_popup.locator("input#phone").type("+1724920233");
                await Sepa_popup.locator("input#email").type("hakandemirhan@livoneo.com");
                await Sepa_popup.locator('button[type="submit"]').click();
            }


            // ********************************************* RECHNUNG  ****************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            //*************************************************************************************************************/
            else if (payment == "Rechnungskauf") {
                console.log('RECHNUNG')


                await this.page.getByRole('button', { name: 'Jetzt kaufen und später per Rechnung zahlen' }).click()
                // Wait for the new page to load
                await this.page.waitForLoadState('load');
            }
        }
    }

    async checkSuccessPage() {

        await expect(this.page).toHaveURL(new RegExp('/checkout/onepage/success'));
        await expect(this.page.locator(".danke_message")).toContainText(/Vielen Dank für Ihre Bestellung!/);
        await expect(this.page.locator(".bestellnummer")).toContainText(/Ihre Bestellnummer lautet:/);


    }

    async getOrderNumber() {

        const bestellText = await this.page.locator('.bestellnummer').textContent();
        const bestellnummer = bestellText.slice(27, 36)

        return bestellnummer;
    }
}
