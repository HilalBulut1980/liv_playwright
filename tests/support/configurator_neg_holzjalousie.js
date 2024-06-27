import { expect } from 'playwright/test'

exports.NEG_Holzjalousie = class NEG_Holzjalousie {

    constructor(page) {
        this.page = page;
    }

    async configure_neg_holzjalousie(testcase) {

        // visit configurator
        await this.page.goto(testcase.produkt)

        // set Produktgruppe
        await this.page.locator('.tabs.type-list li').getByText(testcase.produktgruppe).click()

        // set Jalousiefarbe
        await this.page.locator('#jalousie-collection > ul').locator(":scope > *")
            .getByText(testcase.farbe).first().click();

        // set Höhe und Breite
        await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);
        await this.page.locator('#breite_in_mm input').fill(testcase.breite);

        // click out --> workaround
        await this.page.click('h1:text("Maße eingeben")')

        // check Error message

        await expect(this.page.getByText(testcase.message)).toBeVisible()

        // set corrected Höhe und Breite
        await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe_new);
        await this.page.locator('#breite_in_mm input').fill(testcase.breite_new);

        // click out --> workaround
        await this.page.click('h1:text("Maße eingeben")')

        // check error message
        // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
        await expect(this.page.locator("div.error-msg")).toHaveCount(0) // exist assertion
    }
}