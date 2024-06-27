import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-f5_hoehe_max",
    "produkt": "/plissee/scacchi-4177",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "system": "Cosiflor",
    "hoehe": "2610",
    "breite": "1500",
    "hoehe_new": "2600",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2600 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 