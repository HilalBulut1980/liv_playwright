import { expect } from 'playwright/test'

exports.NEG_Fliegengitter = class NEG_Fliegengitter {

    constructor(page) {
        this.page = page;
    }

    async configure_neg_fliegengitter(testcase) {

        // visit URL
        await this.page.goto(testcase.produkt)

        // set Einbau
        if (typeof testcase.einbau !== "undefined") {
            await this.page.locator('span').getByText(testcase.einbau).first().click();
        }

        // set Form
        await this.page.getByText(testcase.form).first().click();

        // set Typ
        if (testcase.form == "Sonderform") {
            await this.page.getByText(testcase.typ).first().click();
        }

        // set Breite
        if (typeof testcase.breite !== "undefined") {
            await this.page.locator('#options_width').fill(testcase.breite);
        }

        // set Breite oben
        if (typeof testcase.breite_oben !== "undefined") {
            await this.page.locator("div.breite_oben > input").fill(testcase.breite_oben);
        }

        // set Breite unten
        if (typeof testcase.breite_unten !== "undefined") {
            await this.page.locator("div.breite_unten > input").fill(testcase.breite_unten);
        }

        // set Höhe
        if (typeof testcase.hoehe !== "undefined") {
            await this.page.locator('#options_height').fill(testcase.hoehe);
        }

        // set Höhe links
        if (typeof testcase.hoehe_links !== "undefined") {
            await this.page.locator('#options_heightLeft').fill(testcase.hoehe_links);
        }

        // set Höhe rechts
        if (typeof testcase.hoehe_rechts !== "undefined") {
            await this.page.locator('#options_height_right').fill(testcase.hoehe_rechts);
        }

        // set Höhe teil
        if (typeof testcase.hoehe_teil !== "undefined") {
            await this.page.locator('#options_partial_height').fill(testcase.hoehe_teil);
        }

        // set Höhe gesamt
        if (typeof testcase.hoehe_gesamt !== "undefined") {
            await this.page.locator('#options_totalheight').fill(testcase.hoehe_gesamt);
        }

        // check error message
        await expect(this.page.locator('.error-msg')).toBeVisible();
        await expect(this.page.locator('.error-msg')).toHaveText(testcase.message);


        // set Breite
        if (typeof testcase.breite_new !== "undefined") {
            await this.page.locator('#options_width').fill(testcase.breite_new);
        }

        // set Breite oben
        if (typeof testcase.breite_oben_new !== "undefined") {
            await this.page.locator("div.breite_oben > input").fill(testcase.breite_oben_new);
        }

        // set Breite unten
        if (typeof testcase.breite_unten_new !== "undefined") {
            await this.page.locator("div.breite_unten > input").fill(testcase.breite_unten_new);
        }

        // set Höhe
        if (typeof testcase.hoehe_new !== "undefined") {
            await this.page.locator('#options_height').fill(testcase.hoehe_new);
        }

        // set Höhe links
        if (typeof testcase.hoehe_links_new !== "undefined") {
            await this.page.locator('#options_heightLeft').fill(testcase.hoehe_links_new);
        }

        // set Höhe rechts
        if (typeof testcase.hoehe_rechts_new !== "undefined") {
            await this.page.locator('#options_height_right').fill(testcase.hoehe_rechts_new);
        }

        // set Höhe teil
        if (typeof testcase.hoehe_teil_new !== "undefined") {
            await this.page.locator('#options_partial_height').fill(testcase.hoehe_teil_new);
        }

        // set Höhe gesamt
        if (typeof testcase.hoehe_gesamt_new !== "undefined") {
            await this.page.locator('#options_totalheight').fill(testcase.hoehe_gesamt_new);
        }

        // check error message
        // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
        await expect(this.page.locator("error-msg")).toHaveCount(0) // exist assertion
    }
}