import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs1_hoehe_max",
    "produkt": "/plissee/ambience-1357",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "system": "Cosiflor",
    "hoehe": "2300",
    "breite": "1000",
    "hoehe_new": "2200",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 2200 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 