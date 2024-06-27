import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-sd3_hoehe_max",
    "produkt": "/plissee/cadena-4241",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD3",
    "system": "Cosiflor",
    "hoehe": "2100",
    "breite": "1000",
    "hoehe_new": "2000",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss kleiner als oder gleich 2000 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 