import { test } from 'playwright/test'
import { NEG_Schiebegardine } from '../../support/configurator_neg_schiebegardine'

const testcase = {
    "name": "LIVConfig. - Schiebegardine_max_Überlappung",
    "produkt": "/schiebegardinen/aris-7353",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "1050",
    "paneel_anzahl": "2", 
    "overlap": "1051",
    "overlap_new": "1050",
    "message": "Die Überlappung darf die Breite der Schiebegardine (1050 mm) nicht überschreiten."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Schiebegardine = new NEG_Schiebegardine(page)
    await neg_Schiebegardine.configure_neg_schiebegardine_1(testcase)

})