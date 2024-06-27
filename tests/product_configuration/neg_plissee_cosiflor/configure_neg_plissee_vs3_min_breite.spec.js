import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs3_breite_min",
    "produkt": "/plissee/wabe-uni-1510",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "100",
    "breite_new": "120",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die minimale Breite eines Plissee beträgt 120 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 