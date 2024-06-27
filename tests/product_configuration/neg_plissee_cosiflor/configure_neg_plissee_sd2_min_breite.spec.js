import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-sd2_breite_min",
    "produkt": "/plissee/cadena-2002",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD2",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "190",
    "breite_new": "200",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die minimale Breite eines Plissee beträgt 200 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 