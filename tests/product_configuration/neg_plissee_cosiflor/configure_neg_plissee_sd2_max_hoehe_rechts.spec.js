import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-sd2_hoehe_max_right",
    "produkt": "/plissee/cadena-2002",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD2",
    "system": "Cosiflor",
    "hoehe": "1700",
    "breite": "1000",
    "hoehe_new": "1600",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die Höhe muss kleiner als oder gleich 1600 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 