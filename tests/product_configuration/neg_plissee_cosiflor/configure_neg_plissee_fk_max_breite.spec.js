import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fk_breite_max",
    "produkt": "/plissee/wabe-rimano-4380",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "system": "Cosiflor",
    "hoehe": "1800",
    "breite": "2320",
    "breite_new": "2300",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Breite muss kleiner als oder gleich 2300 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 