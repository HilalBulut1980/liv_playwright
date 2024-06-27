import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs6sd_teilHoehe_min",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "system": "Cosiflor",
    "gesamthoehe": "500",
    "teilhoehe": "99",
    "teilhoehe_new": "100",
    "breite_oben": "400",
    "breite_unten": "1000",
    "schienenfarbe": "Weiß",
    "message": "Die Teilhöhe muss größer als oder gleich 100 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 