import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV_vs9D_breite_max",
    "produkt": "/plissee/lucid-1457",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS9",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "2000",
    "breite_new": "1500",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 1500 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 