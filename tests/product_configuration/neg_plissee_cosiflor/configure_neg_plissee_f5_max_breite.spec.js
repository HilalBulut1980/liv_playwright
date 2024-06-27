import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-f5_breite_max",
    "produkt": "/plissee/blackout-color-1545",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "system": "Cosiflor",
    "hoehe": "1800",
    "breite": "2100",
    "breite_new": "2000",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Breite muss kleiner als oder gleich 2000 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 