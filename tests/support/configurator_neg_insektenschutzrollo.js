import { expect } from 'playwright/test'

exports.NEG_Insektenschutzrollo = class NEG_Insektenschutzrollo {

    constructor(page) {
        this.page = page;
    }

    async configure_neg_insektenschutzrollo(testcase) {

        // visit URL
        await this.page.goto(testcase.produkt)

        // set Höhe und Breite
        await this.page.locator('#options_height').fill(testcase.hoehe);
        await this.page.locator('#options_width').fill(testcase.breite);

        // check error message
        await expect(this.page.locator('.error-msg')).toBeVisible();
        await expect(this.page.locator('.error-msg')).toHaveText(testcase.message);

        // set corrected Höhe und Breite
        await this.page.locator('#options_height').fill(testcase.hoehe_new);
        await this.page.locator('#options_width').fill(testcase.breite_new);

        // check error message
        // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
        await expect(this.page.locator("error-msg")).toHaveCount(0) // exist assertion
    }
}