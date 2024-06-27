import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-sd2_breite_max",
    "produkt": "/plissee/cadena-2002",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD2",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "1650",
    "hoehe_new": "1000",
    "breite_new": "1600",
    "ausrichtung": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die Breite muss kleiner als oder gleich 1600 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 