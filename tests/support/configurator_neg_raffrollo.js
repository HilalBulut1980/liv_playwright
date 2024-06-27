import { expect } from 'playwright/test'

exports.NEG_Raffrollo = class NEG_Raffrollo {

    constructor(page) {
        this.page = page;
    }

    async configure_neg_raffrollo(testcase) {

        // visit product page
        await this.page.goto(testcase.produkt)

        // load configurator
        await this.page.locator("#configurator-button").click()

        // set Höhe und Breite
        await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);
        await this.page.locator('#breite_in_mm input').fill(testcase.breite);

        // click out --> workaround
        await this.page.click('h1:text("Maße eingeben")')

        // CHECK ERROR MESSAGE
        await expect(this.page.getByText(testcase.message)).toBeVisible()

        // set Höhe und Breite
        await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe_new);
        await this.page.locator('#breite_in_mm input').fill(testcase.breite_new);

        // click out --> workaround
        await this.page.click('h1:text("Maße eingeben")')

        // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
        await expect(this.page.locator("div.error-msg")).toHaveCount(0) // exist assertion
    }
}