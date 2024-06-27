import { test } from 'playwright/test'
import { NEG_Schiebegardine } from '../../support/configurator_neg_schiebegardine'

const testcase = {
    "name": "LIVConfig. - Schiebegardine_min_Überlappung",
    "produkt": "/schiebegardinen/pika-7325",
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2000",
    "breite": "3000",
    "paneel_anzahl": "7", // (3000mm-50) |:7 |+50 = 471,429mm --> 472mm 
    "overlap": "-200",  //neue paneelbreite --> (3000mm--200) |:7 |-200 = 258mm --> Fehlermeldung erwartet
    "overlap_new": "-100", //neue paneelbreite --> (3000mm--100) |:7 |-100 = 343mm --> keine Fehlermeldung erwartet
    "message": "Ein Paneel einer Schiebegardine darf nur eine Breite zwischen 300 mm und 1200 mm haben. Bitte reduzieren Sie die Anzahl der Paneele oder erhöhen Sie die Überlappung."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Schiebegardine = new NEG_Schiebegardine(page)
    await neg_Schiebegardine.configure_neg_schiebegardine_1(testcase)

})