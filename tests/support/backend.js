import { expect } from 'playwright/test'
import { Helper } from './helper'
// import { Backend } from './backend'
import playwrightConfig from '../../playwright.config';
// Lade die Umgebungsvariablen aus der .env-Datei
require('dotenv').config();
const specialProducts = ["Zubehör", "Muster", "Muster_V", "Serviceprodukt", "Gutschein"]; //alle Produkte, wo kein Streichpreis angezeigt wird


//*************************************************** SELECTORS  ************************************************************ */
//*************************************************************************************************************************** */

// main product - first line
const mainProduct = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(4)';
const mainProduct_total = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(10)';
const mainProduct_rabatt = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(9)';
const vat_1 = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(8)';
const vatAmount_1 = '.data.order-tables > :nth-child(3) > :nth-child(1) > :nth-child(7)';

// second line
const side1 = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(4)';
const side1_total = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(10)';
const side1_rabatt = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(9)';
const vat_2 = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(8)';
const vatAmount_2 = '.data.order-tables > :nth-child(4) > :nth-child(1) > :nth-child(7)';

// third line
const side2 = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(4)';
const side2_total = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(10)';
const side2_rabatt = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(9)';
const vat_3 = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(8)';
const vatAmount_3 = '.data.order-tables > :nth-child(5) > :nth-child(1) > :nth-child(7)';

// fourth line
const side3 = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(4)';
const side3_total = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(10)';
const side3_rabatt = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(9)';
const vat_4 = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(8)';
const vatAmount_4 = '.data.order-tables > :nth-child(6) > :nth-child(1) > :nth-child(7)';

// fifth line
const side4 = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(4)';
const side4_total = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(10)';
const side4_rabatt = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(9)';
const vat_5 = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(8)';
const vatAmount_5 = '.data.order-tables > :nth-child(7) > :nth-child(1) > :nth-child(7)';

// sixth line
const side5 = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(4)';
const side5_total = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(10)';
const side5_rabatt = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(9)';
const vat_6 = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(8)';
const vatAmount_6 = '.data.order-tables > :nth-child(8) > :nth-child(1) > :nth-child(7)';

// totals
const vat_total = '.order-totals > table > tbody'


//*************************************************************************************************************************** */
//*************************************************************************************************************************** */



exports.Backend = class Backend {

    constructor(page) {
        this.page = page;
    }


    async login() {

        const username = process.env.BACKEND_USER
        const password = process.env.BACKEND_PASSW

        await this.page.locator('#username').fill(username);
        await this.page.locator('#login').fill(password);
        await this.page.locator('button[type="submit"]').click();

    }

    async getOrder(orderNumber) {


        //go to Bestellungen
        // await this.page.getByText(/Bestellungen/).first().click();
        // await this.page.locator("li.over > ul > li:nth-of-type(1) span").click()
        await this.page.locator('#nav > li:nth-of-type(2)').click()  // klicke das 2. li-element

        await this.page.locator('#nav > li:nth-of-type(2)').locator(":scope > *").getByText(/Bestellungen/).first().click();

        //selecting a specific order 
        await this.page.locator('tbody').locator(":scope > *").getByText(orderNumber).first().click();
    }

    async checkOrder(system, shipping, rabattCode, rabattBetrag, rabattBetrag2, vatRate1, vatRate2, vatRate3, vatRate4, vatRate5, vatRate6, vatProduct, vatLine2, vatLine3, vatLine4, vatLine5, vatLine6, vatTotal, final_backend, final_backend_total, nebenProdukt1, nebenProdukt1_total, nebenProdukt2, nebenProdukt2_total, nebenProdukt3, nebenProdukt3_total, nebenProdukt4, nebenProdukt4_total, nebenProdukt5, nebenProdukt5_total, total_backend) {


        if ((system == 'Muster') || (system == 'Muster_V')) {
            final_backend = "0,00";
            final_backend_total = "0,00";
            total_backend = "0,00";
        }

        //**************************************************** HAUPTPRODUKT ********************************************************* */
        //******************************************************** POS 1 *********************************************************** */

        //check prices
        await expect(this.page.locator(mainProduct)).toContainText(final_backend)
        await expect(this.page.locator(mainProduct_total)).toContainText(final_backend_total)

        // check vat
        await expect(this.page.locator(vat_1)).toContainText(vatRate1.toString())
        await expect(this.page.locator(vatAmount_1)).toContainText(vatProduct)

        // check rabatt
        if (typeof rabattCode !== "undefined") { //if rabattcode exists
            await expect(this.page.locator(mainProduct_rabatt)).toContainText(rabattBetrag)
        }


        //**************************************************** NEBENPRODUKT 1 ********************************************************* */
        //******************************************************** POS 2 *********************************************************** */

        if (typeof nebenProdukt1 !== "undefined" && nebenProdukt1 != "0,00") {

            await expect(this.page.locator(side1)).toContainText(nebenProdukt1)
            await expect(this.page.locator(side1_total)).toContainText(nebenProdukt1_total)

            // check vat
            await expect(this.page.locator(vat_2)).toContainText(vatRate2.toString())
            await expect(this.page.locator(vatAmount_2)).toContainText(vatLine2)

            // rabatt
            if (typeof rabattCode !== "undefined") { //if Code exists
                await expect(this.page.locator(side1_rabatt)).toContainText(rabattBetrag2)
            }
        }


        //**************************************************** NEBENPRODUKT 2 ********************************************************* */
        //******************************************************** POS 3 *********************************************************** */

        if (typeof nebenProdukt2 !== "undefined" && nebenProdukt2 != "0,00") {

            // check prices
            await expect(this.page.locator(side2)).toContainText(nebenProdukt2)
            await expect(this.page.locator(side2_total)).toContainText(nebenProdukt2_total)

            // check vat
            await expect(this.page.locator(vat_3)).toContainText(vatRate3.toString())
            await expect(this.page.locator(vatAmount_3)).toContainText(vatLine3)
        }


        //**************************************************** NEBENPRODUKT 3 ********************************************************* */
        //******************************************************** POS 4 *********************************************************** */

        if (typeof nebenProdukt3 !== "undefined" && nebenProdukt3 != "0,00") {

            // check prices
            await expect(this.page.locator(side3)).toContainText(nebenProdukt3)
            await expect(this.page.locator(side3_total)).toContainText(nebenProdukt3_total)

            // check vat
            await expect(this.page.locator(vat_4)).toContainText(vatRate4.toString())
            await expect(this.page.locator(vatAmount_4)).toContainText(vatLine4)
        }


        //**************************************************** NEBENPRODUKT 4 ********************************************************* */
        //******************************************************** POS 5 *********************************************************** */

        if (typeof nebenProdukt4 !== "undefined" && nebenProdukt4 != "0,00") {

            // check prices
            await expect(this.page.locator(side4)).toContainText(nebenProdukt4)
            await expect(this.page.locator(side4_total)).toContainText(nebenProdukt4_total)

            // check vat
            await expect(this.page.locator(vat_5)).toContainText(vatRate5.toString())
            await expect(this.page.locator(vatAmount_5)).toContainText(vatLine5)

        }


        //**************************************************** NEBENPRODUKT 5 ********************************************************* */
        //******************************************************** POS 6 *********************************************************** */

        if (typeof nebenProdukt5 !== "undefined" && nebenProdukt5 != "0,00") {

            // check prices
            await expect(this.page.locator(side5)).toContainText(nebenProdukt5)
            await expect(this.page.locator(side5_total)).toContainText(nebenProdukt5_total)

            // check vat
            await expect(this.page.locator(vat_6)).toContainText(vatRate6.toString())
            await expect(this.page.locator(vatAmount_6)).toContainText(vatLine6)

        }

        //**************************************************** TOTALS ********************************************************* */
        //********************************************************************************************************************* */


        // ************************ check shipping cost ************************
        await expect(this.page.locator("tbody > tr.\\31 > td:first-of-type")).toContainText('Versandkosten')
        await expect(this.page.locator("tbody > tr.\\31  span")).toContainText(shipping)
        // --> IMPORTANT: the two spaces behind 31 are needed!!!
        // The expression tr.\\31 in a CSS selector refers to a specific table row (<tr>) element that has a class name of 1 --> <tr class="1">
        // The \\31 part is an escaped Unicode character sequence that corresponds to the digit 1 in the UTF-8 encoding. 



        // ************************ rabatt A or B************************
        // ************************ A) combined rabatt ************************
        if (typeof nebenProdukt1 !== "undefined" && typeof rabattCode !== "undefined") { // e.g. --> Kissenhüllenset (Vorhang + Kissen)


            //********************************************** */
            rabattBetrag = rabattBetrag.replace(/,/g, '.')
            rabattBetrag2 = rabattBetrag2.replace(/,/g, '.')

            const rabattBetragTotal = (parseFloat(rabattBetrag) + parseFloat(rabattBetrag2)).toFixed(2).toString().replace('.', ',')

            await expect(this.page.locator("tbody > tr.\\32 > td:first-of-type")).toContainText('Rabatt (' + rabattCode + ')')
            await expect(this.page.locator("tbody > tr.\\32  span")).toContainText('-' + rabattBetragTotal)
            // --> IMPORTANT: the two spaces behind 30 are needed!!!
        }
        // ************************ B) single rabatt ************************
        else if (typeof rabattCode !== "undefined") {


            await expect(this.page.locator("tbody > tr.\\32 > td:first-of-type")).toContainText('Rabatt (' + rabattCode + ')')
            await expect(this.page.locator("tbody > tr.\\32  span")).toContainText('-' + rabattBetrag)
            // --> IMPORTANT: the two spaces behind 30 are needed!!!
            // The expression tr.\\32 in a CSS selector refers to a specific table row (<tr>) element that has a class name of 1 --> <tr class="2">
            // The \\32 part is an escaped Unicode character sequence that corresponds to the digit 2 in the UTF-8 encoding. 
        }



        // ************************ vat total ************************
        await expect(this.page.locator(".order-totals > table > tbody > tr:last-of-type > td:first-of-type")).toContainText("Gesamtbetrag Steuern")
        await expect(this.page.locator(".order-totals > table > tbody > tr:last-of-type > td:last-of-type")).toContainText(vatTotal)



        // ************************ total sum ************************
        await expect(this.page.locator("tfoot > tr.\\30 > td:first-of-type")).toContainText('Gesamtsumme')
        await expect(this.page.locator("tfoot > tr.\\30  span")).toContainText(total_backend)
        // --> IMPORTANT: the two spaces behind 30 are needed!!!
    }

    async logout() {

        await this.page.locator('.link-logout').click()

    }

}