import { test } from 'playwright/test'
import { NEG_Schiebegardine } from '../../support/configurator_neg_schiebegardine'

const testcase = {
    "name": "LIVConfig. - Schiebegardine_Gesamtsystem_maxPaneelBreiten",
    "produkt": "/schiebegardinen/lokela-7303",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "4000",
    "pan_anpassen": true,
    "breite_1": "1250",
    "breite_2": "1300",
    "breite_3": "1500",
    "breite_4": "1400",
    "breite_correct": "1200",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Schiebegardine = new NEG_Schiebegardine(page)
    await neg_Schiebegardine.configure_neg_schiebegardine_2(testcase)

})