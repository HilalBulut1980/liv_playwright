import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fk_hoehe_min",
    "produkt": "/plissee/wabe-punkte-1527",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "system": "Cosiflor",
    "hoehe": "294",
    "breite": "1100",
    "hoehe_new": "300",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss größer als oder gleich 300 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 