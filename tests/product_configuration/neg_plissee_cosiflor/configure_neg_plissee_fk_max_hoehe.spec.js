import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fk_hoehe_max",
    "produkt": "/plissee/wabe-rimano-4380",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "system": "Cosiflor",
    "hoehe": "2605",
    "breite": "1300",
    "hoehe_new": "2600",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2600 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 