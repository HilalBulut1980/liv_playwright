import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-f1_hoehe_max",
    "produkt": "/plissee/freja-1772",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F1",
    "system": "Cosiflor",
    "hoehe": "2700",
    "breite": "1500",
    "hoehe_new": "2600",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2600 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 