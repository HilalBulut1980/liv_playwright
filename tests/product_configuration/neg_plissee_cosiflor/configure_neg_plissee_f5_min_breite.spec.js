import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-f5_breite_min",
    "produkt": "/plissee/wabe-bonita-4222",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "system": "Cosiflor",
    "hoehe": "2000",
    "breite": "149",
    "breite_new": "150",
    "schienenfarbe": "Silber",
    "message": "Die minimale Breite eines Plissee beträgt 150 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 