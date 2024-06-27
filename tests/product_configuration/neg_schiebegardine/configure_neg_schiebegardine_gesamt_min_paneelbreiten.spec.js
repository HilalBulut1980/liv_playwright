import { test } from 'playwright/test'
import { NEG_Schiebegardine } from '../../support/configurator_neg_schiebegardine'

const testcase = {
    "name": "LIVConfig. - Schiebegardine_Gesamtsystem_minPaneelBreiten",
    "produkt": "/schiebegardinen/siva-7311",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "4000",
    // "stoffposition": "1",
    "pan_anpassen": true,
    "breite_1": "150",
    "breite_2": "200",
    "breite_3": "250",
    "breite_4": "299",
    "breite_correct": "300",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Schiebegardine = new NEG_Schiebegardine(page)
    await neg_Schiebegardine.configure_neg_schiebegardine_2(testcase)

})