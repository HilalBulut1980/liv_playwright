import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-f5_hoehe_min",
    "produkt": "/plissee/wabe-casato-4394",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "system": "Cosiflor",
    "hoehe": "299",
    "breite": "1000",
    "hoehe_new": "300",
    "schienenfarbe": "Silber",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 