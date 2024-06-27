import { expect } from 'playwright/test'

exports.NEG_Vorhang = class NEG_Vorhang {

    constructor(page) {
        this.page = page;
    }

    async configure_neg_vorhang(testcase) {

        // visit product page
        await this.page.goto(testcase.produkt)


        // set Farbe
        await this.page.locator('img[alt=' + testcase.farbe + ']').click();


        // set Breite
        await this.page.locator('#breite > div > input').fill(testcase.breite)


        // set Höhe
        await this.page.locator('#hoehe > .content > input').fill(testcase.hoehe)


        //************************************************************************/
        // CHECK ERROR MESSAGE
        //************************************************************************/

        await expect(this.page.getByText(testcase.message)).toBeVisible()


        //************************************************************************/
        // CORRECT INPUTS
        //************************************************************************/

        // set Höhe
        if (typeof testcase.hoehe_new != "undefined") {
            await this.page.locator('#hoehe > .content > input').fill(testcase.hoehe_new)
        }

        // set Breite
        if (typeof testcase.breite_new != "undefined") {
            await this.page.locator('#breite > div > input').fill(testcase.breite_new)
        }

        // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
        // await expect(this.page.locator("div.error-messages")).toHaveCount(0) // exist assertion
        await expect(this.page.getByText(testcase.message)).not.toBeVisible()


    }
}