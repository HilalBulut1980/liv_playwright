import { test } from 'playwright/test'
import { NEG_Schiebegardine } from '../../support/configurator_neg_schiebegardine'

const testcase = {
    "name": "LIVConfig. - Schiebegardine_PaneelAnzahl_4-3",
    "produkt": "/schiebegardinen/hanini-7321",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "1000",
    "paneel_anzahl": "4",
    "paneel_anzahl_new": "3",
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben. Bitte reduzieren Sie die Anzahl der Paneele oder erhöhen Sie die Überlappung."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Schiebegardine = new NEG_Schiebegardine(page)
    await neg_Schiebegardine.configure_neg_schiebegardine_1(testcase)

})