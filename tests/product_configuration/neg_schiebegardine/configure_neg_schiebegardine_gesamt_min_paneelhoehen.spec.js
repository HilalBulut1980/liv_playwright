import { test } from 'playwright/test'
import { NEG_Schiebegardine } from '../../support/configurator_neg_schiebegardine'

const testcase = {
    "name": "LIVConfig. - Schiebegardine_Gesamtsystem_minPaneelHöhen",
    "produkt": "/schiebegardinen/naru-7294",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2200",
    "breite": "3500",
    // "stoffposition": "1",
    "pan_anpassen": true,
    "hoehe_1": "150",
    "hoehe_2": "200",
    "hoehe_3": "210",
    "hoehe_correct": "300",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Höhe zwischen 300 mm und 3000 mm haben."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Schiebegardine = new NEG_Schiebegardine(page)
    await neg_Schiebegardine.configure_neg_schiebegardine_2(testcase)

})