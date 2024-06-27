import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-sd3_hoehe_min",
    "produkt": "/plissee/cadena-4241",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD3",
    "system": "Cosiflor",
    "hoehe": "190",
    "breite": "1000",
    "hoehe_new": "200",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss größer als oder gleich 200 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 