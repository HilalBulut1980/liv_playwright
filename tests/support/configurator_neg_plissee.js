import { expect } from 'playwright/test'

exports.NEG_Plissee = class NEG_Plissee {

    constructor(page) {
        this.page = page;
    }

    async configure_neg_plissee(testcase) {

        // visit product page
        await this.page.goto(testcase.produkt)

        // load configurator
        await this.page.locator("#configurator-button").click()

        // set Produktgruppe
        // if (testcase.system == "Cosiflor") {
            await this.page.locator('.tabs').locator(":scope > *").getByText(testcase.produktgruppe).first().click();
        // }

        // set Plisseemodell
        // COSIFLOR
        // if (testcase.system == "Cosiflor") {
            if (testcase.produktgruppe == "rechteckige Plissees") {
                //Weitere Modelle aufklappen
                await this.page.locator('.btn-group > :nth-child(1)').click();
            }
            await this.page.locator('.type-selector-left > ul').locator(":scope > *").getByText(testcase.modell).first().click();
        // }
        // BASIS
        // else {
        //     await this.page.locator('#type-selector-top > ul').locator(":scope > *").getByText(testcase.modell).first().click();

        // }

        // set Unterer Stoff
        if (typeof testcase.unterer_Stoff !== "undefined") {
            await this.page.locator('button').getByText(/Auswahl ändern/).first().click();
            await this.page.locator('#material-collection > ul').locator(":scope > *").getByText(testcase.unterer_Stoff).first().click();
            await this.page.locator('button[type="button"]').getByText(/Auswahl übernehmen/).first().click();
        }




        //************************************************************************/
        // SET MAßE
        //************************************************************************/

        // set Ausrichtung
        if (typeof testcase.ausrichtung !== "undefined") {
            await this.page.getByText(new RegExp("^" + testcase.ausrichtung + "\\s*$")).first().click();
        }

        // set Höhe
        if (typeof testcase.hoehe != "undefined") {
            await this.page.locator('#hoehe input').fill(testcase.hoehe);
        }

        // set Höhe links
        if (typeof testcase.hoehe_links != "undefined") {
            await this.page.locator('#hoehe_links input').fill(testcase.hoehe_links);
        }

        // set Höhe rechts
        if (typeof testcase.hoehe_rechts != "undefined") {
            await this.page.locator('#hoehe_rechts input').fill(testcase.hoehe_rechts);
        }

        // set Höhe gesamt
        if (typeof testcase.gesamthoehe != "undefined") {
            await this.page.locator('#total_height input').fill(testcase.gesamthoehe);
        }

        // set Höhe teil
        if (typeof testcase.teilhoehe != "undefined") {
            await this.page.locator('#partial_height input').fill(testcase.teilhoehe);
        }

        // set Breite
        if (typeof testcase.breite != "undefined") {
            await this.page.locator('#breite input').fill(testcase.breite);
        }

        // set Breite oben
        if (typeof testcase.breite_oben != "undefined") {
            await this.page.locator('#breite_oben input').fill(testcase.breite_oben);
        }

        // set Breite unten
        if (typeof testcase.breite_unten != "undefined") {
            await this.page.locator('#breite_unten input').fill(testcase.breite_unten);
        }

        // set switscher
        if (testcase.df_switcher != "") {
            if (testcase.df_switcher == "Genormt") {
                await this.page.getByText(/Dachfenster auswählen/).first().click();
            }
            else
                if (testcase.df_switcher == "Ungenormt") {
                    await this.page.getByText(/Maße des Dachfenster manuell eingeben/).first().click();
                }
        }

        // set Glasbreite
        if (typeof testcase.df_glasbreite != "undefined") {
            await this.page.locator('#glasbreite input').fill(testcase.df_glasbreite);
        }

        // set Glashöhe
        if (typeof testcase.df_glashoehe != "undefined") {
            await this.page.locator('#glashoehe input').fill(testcase.df_glashoehe);
        }

        // set Falztiefe
        if (typeof testcase.df_falztiefe != "undefined") {
            await this.page.locator('#falztiefe input').fill(testcase.df_falztiefe);
        }

        // set Finnenbreite
        if (typeof testcase.df_fluegelbreite != "undefined") {
            await this.page.locator('#finnenbreite input').fill(testcase.df_fluegelbreite);
        }

        // set Finnenhöhe
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


        // set Ausrichtung
        if (typeof testcase.ausrichtung_new !== "undefined") {
            await this.page.getByText(new RegExp("^" + testcase.ausrichtung_new + "\\s*$")).first().click();
        }

        // set Höhe
        if (typeof testcase.hoehe_new != "undefined") {
            await this.page.locator('#hoehe input').fill(testcase.hoehe_new);
        }

        // set Höhe links
        if (typeof testcase.hoehe_links_new != "undefined") {
            await this.page.locator('#hoehe_links input').fill(testcase.hoehe_links_new);
        }

        // set Höhe rechts
        if (typeof testcase.hoehe_rechts_new != "undefined") {
            await this.page.locator('#hoehe_rechts input').fill(testcase.hoehe_rechts_new);
        }

        // set Höhe gesamt
        if (typeof testcase.gesamthoehe_new != "undefined") {
            await this.page.locator('#total_height input').fill(testcase.gesamthoehe_new);
        }

        // set Höhe teil
        if (typeof testcase.teilhoehe_new != "undefined") {
            await this.page.locator('#partial_height input').fill(testcase.teilhoehe_new);
        }

        // set Breite
        if (typeof testcase.breite_new != "undefined") {
            await this.page.locator('#breite input').fill(testcase.breite_new);
        }

        // set Breite oben
        if (typeof testcase.breite_oben_new != "undefined") {
            await this.page.locator('#breite_oben input').fill(testcase.breite_oben_new);
        }

        // set Breite unten
        if (typeof testcase.breite_unten_new != "undefined") {
            await this.page.locator('#breite_unten input').fill(testcase.breite_unten_new);
        }

        // set switscher
        if (testcase.df_switcher != "") {
            if (testcase.df_switcher == "Genormt") {
                await this.page.getByText(/Dachfenster auswählen/).first().click();
            }
            else
                if (testcase.df_switcher == "Ungenormt") {
                    await this.page.getByText(/Maße des Dachfenster manuell eingeben/).first().click();
                }
        }

        // set Glasbreite
        if (typeof testcase.df_glasbreite_new != "undefined") {
            await this.page.locator('#glasbreite input').fill(testcase.df_glasbreite_new);
        }

        // set Glashöhe
        if (typeof testcase.df_glashoehe_new != "undefined") {
            await this.page.locator('#glashoehe input').fill(testcase.df_glashoehe_new);
        }

        // set Falztiefe
        if (typeof testcase.df_falztiefe_new != "undefined") {
            await this.page.locator('#falztiefe input').fill(testcase.df_falztiefe_new);
        }

        // set Finnenbreite
        if (typeof testcase.df_fluegelbreite_new != "undefined") {
            await this.page.locator('#finnenbreite input').fill(testcase.df_fluegelbreite_new);
        }

        // set Finnenhöhe
        if (typeof testcase.df_fluegelhoehe_new != "undefined") {
            await this.page.locator('#finnenhoehe input').fill(testcase.df_fluegelhoehe_new);
        }


        //************************************************************************/
        // CHECK ERROR MESSAGE
        //************************************************************************/

        await expect(this.page.locator("div.error-msg")).toHaveCount(0) // exist assertion


    }
}
