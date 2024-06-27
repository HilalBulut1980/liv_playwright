import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-f5_hoehe_max_1500",
    "produkt": "/plissee/wabe-ballina-2144",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "system": "Cosiflor",
    "hoehe": "1600",
    "breite": "1500",
    "hoehe_new": "1500",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die Höhe muss kleiner als oder gleich 1500 mm sein."  // Wabe-Eterno und Wabe-Ballina only till 1500 mm --> LIV-5484
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 