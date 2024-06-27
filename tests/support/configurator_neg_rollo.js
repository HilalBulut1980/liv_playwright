import { expect } from 'playwright/test'

exports.NEG_Rollo = class NEG_Rollo {

    constructor(page) {
        this.page = page;
    }

    async configure_neg_rollo(testcase) {

        // visit product page
        await this.page.goto(testcase.produkt)

        // load configurator
        await this.page.locator("#configurator-button").click()

        // set Rollo-Typ
        await this.page.locator('#type-selector-top > ul').locator(":scope > *").getByText(testcase.rollotyp).first().click(); // this command is more specific

        // set Kasette
        if (typeof testcase.kassette != "undefined") {
            await this.page.locator('#container-kassette li').filter({ hasText: testcase.kassette }).click();
        }

        // only for Mini-Rollos --> Führungsschiene
        if (typeof testcase.schiene != "undefined") {
            await this.page.locator('div[options-property="fuehrungsschiene"]').locator(":scope > *").getByText(testcase.schiene).first().click(); // this command is more specific
        }

        // set Kugelkette / Motorbedienung
        if (typeof testcase.bedientyp != "undefined") {
            await this.page.locator('#bedienung-normal > div > ul').locator(":scope > *").getByText(testcase.bedientyp).first().click();
        }

        // set Motortyp
        if (typeof testcase.motortyp != "undefined") {
            await this.page.locator('#bedienung-motor > div > ul').locator(":scope > *").getByText(testcase.motortyp).first().click();
        }

        // set Höhe
        if (typeof testcase.hoehe != "undefined") {
            await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);
        }

        // set Breite
        if (typeof testcase.breite != "undefined") {
            await this.page.locator('#breite_in_mm input').fill(testcase.breite);
        }

        // set DF Hersteller
        if (typeof testcase.df_hersteller != "undefined") {
            await this.page.locator('#hersteller li').getByText(testcase.df_hersteller).first().click();
        }

        // set DF Produkt
        if (typeof testcase.df_produkt != "undefined") {
            await this.page.selectOption(('.dfselect select'), testcase.df_produkt)
        }

        // set DF Typ
        if (typeof testcase.df_typ != "undefined") {
            await this.page.selectOption(('.dfselect:nth-of-type(2) select'), testcase.df_typ)
        }

        // set DF Falz
        if (typeof testcase.df_falzart != "undefined") {
            await this.page.locator('[id="falztyp"]').locator(":scope > *").getByText(testcase.df_falzart).first().click();
        }

        // set DF Finnenbreite
        if (typeof testcase.df_fluegelbreite != "undefined") {
            await this.page.locator('#finnenbreite input').fill(testcase.df_fluegelbreite);
        }

        // set DF Finnenhöhe
        if (typeof testcase.df_fluegelhoehe != "undefined") {
            await this.page.locator('#finnenhoehe input').fill(testcase.df_fluegelhoehe);
        }



        //************************************************************************/
        // CHECK ERROR MESSAGE
        //************************************************************************/

        await expect(this.page.getByText(testcase.message)).toBeVisible()


        //************************************************************************/
        // CORRECT INPUTS
        //************************************************************************/

        // set Höhe
        if (typeof testcase.hoehe_new != "undefined") {
            await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe_new);
        }

        // set Breite
        if (typeof testcase.breite_new != "undefined") {
            await this.page.locator('#breite_in_mm input').fill(testcase.breite_new);
        }

        // set DF Finnenbreite
        if (typeof testcase.df_fluegelbreite_new != "undefined") {
            await this.page.locator('#finnenbreite input').fill(testcase.df_fluegelbreite_new);
        }

        // set DF Finnenhöhe
        if (typeof testcase.df_fluegelhoehe_new != "undefined") {
            await this.page.locator('#finnenhoehe input').fill(testcase.df_fluegelhoehe_new);
        }


        // ERROR MESSAGES SHOULD NOT EXIST ANYMORE
        // await expect(this.page.locator("div.error-msg")).toHaveCount(0) // exist assertion
        await expect(this.page.getByText(testcase.message)).not.toBeVisible()
    }
}
