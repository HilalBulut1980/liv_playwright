import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs5_breiteOben_min",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite_oben": "50",
    "breite_unten": "500",
    "breite_oben_new": "70",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die obere Breite muss größer als oder gleich 70 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 