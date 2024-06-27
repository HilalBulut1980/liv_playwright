import { test } from 'playwright/test'
import { NEG_Schiebegardine } from '../../support/configurator_neg_schiebegardine'

const testcase = {
    "name": "LIVConfig. - Schiebegardine_einzel_maxH",
    "produkt": "/schiebegardinen/hanini-7322",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "hoehe": "3001",
    "breite": "1000",
    "hoehe_new": "3000",
    "message": "Die maximale Höhe einer Schiebegardine beträgt 3000 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Schiebegardine = new NEG_Schiebegardine(page)
    await neg_Schiebegardine.configure_neg_schiebegardine_1(testcase)

})