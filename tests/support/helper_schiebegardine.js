import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js';


exports.Helper_Schiebegardine = class Helper_Schiebegardine {

    constructor(page) {
        this.page = page;
    }


    async checkAnzahlPaneele(panAnzahl) {

        await expect(this.page.locator('#paneelnumber input')).toHaveValue(panAnzahl);
    }

    async setAnzahlPaneele(panAnzahl) {

        await this.page.locator('#paneelnumber input').fill(panAnzahl);
    }

    async setBreitePaneele(pan_anzahl, pan_anpassen, panBreite) {

        if (pan_anpassen) {
            await this.page.locator('#check_individual input').check();

            for (var i = 1; i <= pan_anzahl; i++) {
                await this.page.locator('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input').fill(panBreite);
            }
        }
    }

    async checkPaneelBreite(pan_anzahl, pan_anpassen, panBreite) {

        if (pan_anpassen) {
            await this.page.locator('#check_individual input').check();

            for (var i = 1; i <= pan_anzahl; i++) {
                await expect(this.page.locator('.optional_paneele_wrapper > :nth-child(' + i + ') > .optional_paneele_sizes :nth-child(1) input')).toHaveValue(panBreite);
            }
        }
    }

    async checkOverlap(overlap) {

        await expect(this.page.locator('#paneeloverlap input')).toHaveValue(overlap);

    }

    async setOverlap(overlap) {

        await this.page.locator('#check_individual input').uncheck();
        await this.page.locator('#paneeloverlap input').fill(overlap);

    }

    async checkOriginalpreis(pAnzahl, preis, schiene) {

        const stoffPrice = jsonLogic.apply({ '*': [pAnzahl, preis] });

        const price = jsonLogic.apply({ '+': [stoffPrice, schiene] }).toFixed(2).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.'); //needed for separator 1.000

        // check Startpreise
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(price)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(price)

    }




}