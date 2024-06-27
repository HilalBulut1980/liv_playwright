import { expect } from 'playwright/test'

exports.NEG_Schiebegardine = class NEG_Schiebegardine {

    constructor(page) {
        this.page = page;
    }

    async configure_neg_schiebegardine_1(testcase) {

        // visit product page
        await this.page.goto(testcase.produkt)

        // load configurator
        await this.page.locator("#configurator-button").click()

        // set Typ
        await this.page.getByText(testcase.modell).first().click();

        // set Breite
        if (typeof testcase.breite !== "undefined") {
            await this.page.locator('#breite_in_mm input').fill(testcase.breite);
        }

        // set Höhe
        if (typeof testcase.hoehe !== "undefined") {
            await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);
        }

        // set Anzahl Paneele
        if (typeof testcase.paneel_anzahl !== "undefined") {
            await this.page.locator('#paneelnumber input').clear();
            await this.page.locator('#paneelnumber input').fill(((testcase.paneel_anzahl).toString()));
        }

        // set Overlap
        if (typeof testcase.overlap !== "undefined") {
            // await this.page.locator('#paneeloverlap input').clear();
            await this.page.locator('#paneeloverlap input').fill(testcase.overlap);
        }

        //************************************************************************/
        // CHECK ERROR MESSAGE
        //************************************************************************/

        await expect(this.page.getByText(testcase.message)).toBeVisible()

        //************************************************************************/
        // CORRECT INPUTS
        //************************************************************************/

        // set Breite
        if (typeof testcase.breite_new !== "undefined") {
            await this.page.locator('#breite_in_mm input').fill(testcase.breite_new);
        }

        // set Höhe
        if (typeof testcase.hoehe_new !== "undefined") {
            await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe_new);
        }

        // set Anzahl Paneele
        if (typeof testcase.paneel_anzahl_new !== "undefined") {
            await this.page.locator('#paneelnumber input').clear();
            await this.page.locator('#paneelnumber input').fill(((testcase.paneel_anzahl_new).toString()));
        }

        // set Overlap
        if (typeof testcase.overlap_new !== "undefined") {
            await this.page.locator('#paneeloverlap input').fill(testcase.overlap_new);
        }

        // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
        await expect(this.page.locator("div.error-msg")).toHaveCount(0) // exist assertion
    }


    async configure_neg_schiebegardine_2(testcase) {

        // visit product page
        await this.page.goto(testcase.produkt)

        // load configurator
        await this.page.locator("#configurator-button").click()

        // set Typ
        await this.page.getByText(testcase.modell).first().click();

        // set Breite
        if (typeof testcase.breite !== "undefined") {
            await this.page.locator('#breite_in_mm input').fill(testcase.breite);
        }

        // set Höhe
        if (typeof testcase.hoehe !== "undefined") {
            await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);
        }

        // click out --> workaround
        await this.page.click('h1:text("Paneele anpassen")')

        var breiten = [testcase.breite_1, testcase.breite_2, testcase.breite_3, testcase.breite_4, testcase.breite_5, testcase.breite_6, testcase.breite_7, testcase.breite_8]
        var hoehen = [testcase.hoehe_1, testcase.hoehe_2, testcase.hoehe_3, testcase.hoehe_4, testcase.hoehe_5, testcase.hoehe_6, testcase.hoehe_7, testcase.hoehe_8]

        if (testcase.pan_anpassen) {

            // 'Paneele individualisieren' aktivieren
            await this.page.locator('#check_individual input').check();

            for (var j = 1, i = 0; i <= 7; i++, j++) {

                if (typeof breiten[i] !== "undefined") {

                    await this.page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').fill(breiten[i]);
                    // CHECK ERROR MESSAGE
                    await expect(this.page.getByText(testcase.message)).toBeVisible()

                    // type in correct width
                    await this.page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').fill(testcase.breite_correct);
                    // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
                    await expect(this.page.locator("div.error-msg")).toHaveCount(0) // exist assertion
                }
            }

            for (var j = 1, i = 0; i <= 7; i++, j++) {

                if (typeof hoehen[i] !== "undefined") {

                    await this.page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').fill(hoehen[i]);
                    // CHECK ERROR MESSAGE
                    await expect(this.page.getByText(testcase.message)).toBeVisible()

                    // type in correct height
                    await this.page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').fill(testcase.hoehe_correct);
                    // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
                    await expect(this.page.locator("div.error-msg")).toHaveCount(0) // exist assertion
                }
            }
        }
    }
}