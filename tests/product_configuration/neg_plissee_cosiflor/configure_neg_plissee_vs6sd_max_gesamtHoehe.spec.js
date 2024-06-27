import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs6sd_gesamtHoehe_max",
    "produkt": "/plissee/poesia-1824",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "system": "Cosiflor",
    "gesamthoehe": "2100",
    "teilhoehe": "1200",
    "gesamthoehe_new": "2000",
    "breite_oben": "800",
    "breite_unten": "1500",
    "schienenfarbe": "Weiß",
    "message": "Die Gesamthöhe muss kleiner als oder gleich 2000 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 