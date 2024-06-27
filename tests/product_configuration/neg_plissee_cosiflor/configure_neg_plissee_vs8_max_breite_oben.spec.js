import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs8_breiteOben_max",
    "produkt": "/plissee/wabe-uni-1519",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS8",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite_oben": "1500",
    "breite_unten": "2000",
    "breite_oben_new": "1000",
    "breite_unten_new": "1500",
    "ausrichtung": "links",
    "message": "Die obere Breite muss kleiner als oder gleich 1450 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 