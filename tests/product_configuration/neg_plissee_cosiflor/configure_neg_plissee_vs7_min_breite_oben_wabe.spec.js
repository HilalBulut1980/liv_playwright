import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs7_breiteOben_min_wabe",
    "produkt": "/plissee/wabe-protect-1462",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS7",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "50",
    "breite_unten": "1000",
    "breite_oben_new": "120",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss größer als oder gleich 120 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 