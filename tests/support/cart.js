import { expect } from 'playwright/test'
const specialProducts = ["Zubehör", "Muster", "Muster_V", "Serviceprodukt", "Gutschein"]; //alle Produkte, wo kein Streichpreis angezeigt wird


exports.Cart = class Cart {

    constructor(page) {
        this.page = page;
    }

    async checkCart(original_unit, lineUnit, original_total, lineTotal, system) {


        // Streichpreis einzel 
        await expect(this.page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(original_unit);
        // red. Einzelpreis
        await expect(this.page.locator('span[class="cart-price"] > div > .price')).toContainText(lineUnit);
        //Streichpreis gesamt
        await expect(this.page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(original_total);
        //red. Gesamtpreis
        await expect(this.page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(lineTotal);

    }

    async checkCart_KH(kissen40, kissen50, vorhang_einzel_streich, vorhang_einzel_red, vorhang_total_streich, vorhang_total_red, kissen40_einzel_streich, kissen40_einzel_red, kissen40_total_streich, kissen40_total_red, kissen50_einzel_streich, kissen50_einzel_red, kissen50_total_streich, kissen50_total_red) {

        //************************************* KISSENHÜLLEN IM SET *********************************************/
        //************************************* DREI MÖGL. FÄLLE ***********************************************/

        //************************************* A - Vorhang + Kissen 40 **********************************/
        //************************************* B - Vorhang + Kissen 50 *********************************/
        //************************************* C - Vorhang + Kissen 40 + Kissen 50 ********************/

        const ersteZeile = 'div:nth-of-type(1)';
        const zweiteZeile = 'div:nth-of-type(2)';
        const dritteZeile = 'div:nth-of-type(3)';

        // Vorhang
        // Streichpreis einzel // span[class='cart-price'] span:nth-child(1)
        await expect(this.page.locator(ersteZeile + ' > span:nth-of-type(1) span:nth-of-type(1)')).toContainText(vorhang_einzel_streich);
        // red. Einzelpreis
        await expect(this.page.locator(ersteZeile + ' > span:nth-of-type(1) span.price')).toContainText(vorhang_einzel_red);
        //Streichpreis gesamt
        await expect(this.page.locator(ersteZeile + ' > span.cart-zwischensumme span:nth-of-type(1)')).toContainText(vorhang_total_streich);
        //red. Gesamtpreis
        await expect(this.page.locator(ersteZeile + ' > span.cart-zwischensumme span.price')).toContainText(vorhang_total_red);


        // A - Vorhang + Kissen 40
        if (kissen40 != 0 && kissen50 == 0) {

            // Kissen 40 cm
            // Streichpreis einzel 
            await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span:nth-of-type(1)')).toContainText(kissen40_einzel_streich);
            // red. Einzelpreis
            await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span.price')).toContainText(kissen40_einzel_red);
            //Streichpreis gesamt
            await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span:nth-of-type(1)')).toContainText(kissen40_total_streich);
            //red. Gesamtpreis
            await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span.price')).toContainText(kissen40_total_red);

        }

        // B - Vorhang + Kissen 50
        else if (kissen50 != 0 && kissen40 == 0) {

            // Kissen 50 cm
            // Streichpreis einzel 
            await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span:nth-of-type(1)')).toContainText(kissen50_einzel_streich);
            // red. Einzelpreis
            await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span.price')).toContainText(kissen50_einzel_red);
            //Streichpreis gesamt
            await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span:nth-of-type(1)')).toContainText(kissen50_total_streich);
            //red. Gesamtpreis
            await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span.price')).toContainText(kissen50_total_red);

        }

        // C - Vorhang + Kissen 40 + Kissen 50
        else if (kissen50 != 0 && kissen40 != 0) {

            // Kissen 40 cm
            // Streichpreis einzel 
            await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span:nth-of-type(1)')).toContainText(kissen40_einzel_streich);
            // red. Einzelpreis
            await expect(this.page.locator(zweiteZeile + ' > span:nth-of-type(1) span.price')).toContainText(kissen40_einzel_red);
            //Streichpreis gesamt
            await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span:nth-of-type(1)')).toContainText(kissen40_total_streich);
            //red. Gesamtpreis
            await expect(this.page.locator(zweiteZeile + ' > span.cart-zwischensumme span.price')).toContainText(kissen40_total_red);

            // Kissen 50 cm
            // Streichpreis einzel 
            await expect(this.page.locator(dritteZeile + ' > span:nth-of-type(1) span:nth-of-type(1)')).toContainText(kissen50_einzel_streich);
            // red. Einzelpreis
            await expect(this.page.locator(dritteZeile + ' > span:nth-of-type(1) span.price')).toContainText(kissen50_einzel_red);
            //Streichpreis gesamt
            await expect(this.page.locator(dritteZeile + ' > span.cart-zwischensumme span:nth-of-type(1)')).toContainText(kissen50_total_streich);
            //red. Gesamtpreis
            await expect(this.page.locator(dritteZeile + ' > span.cart-zwischensumme span.price')).toContainText(kissen50_total_red);

        }
    }

    async checkCartSpecial(system, unit, total) {
        //check Preise: Serviceprodukte, Zubehör, Muster, Gutscheine
        // if (specialProducts.includes(system)) {
        //Einzelpreis
        await expect(this.page.locator('span[class="cart-price"] > div')).toContainText(unit);
        //Gesamtpreis
        await expect(this.page.locator('span[class="cart-price cart-zwischensumme"] > div')).toContainText(total);
        // }
    }

    async checkCartTotals(system, total_cart, sieSparen, rabattcode, rabattbetrag, sieSparen_new, total_cart_new) {


        // ***************************** check VERSANDKOSTEN SIE SPAREN and GESAMTSUMME *****************************

        // VERSANDKOSTEN
        await expect(this.page.locator("div.col-md-3 > span")).toContainText('0,00')

        // SIE SPAREN
        if (!specialProducts.includes(system)) {// Produkte MIT Streichpreis

            await expect(this.page.locator("div.cart-collaterals p:nth-of-type(3)")).toContainText(sieSparen)
        }

        // GESAMTSUMME
        await expect(this.page.locator("div.col-md-3 > div:nth-of-type(2) span")).toContainText(total_cart)


        // ***************************** IN CASE OF A RABATTCODE *****************************

        if (typeof rabattcode !== "undefined") {//if Code exists

            // click Gutschein einlösen button
            await this.page.locator('.discount_hint').click();

            // type code
            await this.page.locator('#coupon_code').fill(rabattcode);

            // confirm code
            await this.page.getByText(/Rabattcode einlösen/).first().click();

            // check rabattbetrag
            await expect(this.page.getByText('Rabatt (' + rabattcode + ')').first().locator(":scope > *").nth(0)).toContainText(rabattbetrag);
            
            // check new gesamtsumme
            await expect(this.page.locator("div.col-md-3 > div:nth-of-type(2) span")).toContainText(total_cart_new)

            // check new sie sparen
            await expect(this.page.locator("div.cart-collaterals p:nth-of-type(3)")).toContainText(sieSparen_new)
        }


    }

    async proceedToCheckout(system, paypalexpress) {

        if (typeof paypalexpress == "undefined") { //-> kein Paypalexpress

            // await this.page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click(); // --> this works for all groups

            if (system == "Muster" || system == "Muster_V") {
                await this.page.getByText(/Kostenfrei bestellen/).first().click();

            }
            else {
                await this.page.getByText(/zur Kasse gehen/).first().click();

            }


            // await this.page.locator('button:visible').click()
            await expect(this.page).toHaveURL(new RegExp('/checkout/onepage$'));
        }

    }
}