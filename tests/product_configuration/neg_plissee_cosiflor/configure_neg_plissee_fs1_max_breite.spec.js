import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fs1_breite_max",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "system": "Cosiflor",
    "breite": "1000",
    "breite_new": "800",
    "hoehe_links": "2000",
    "hoehe_rechts": "1500",
    "ausrichtung": "links",
    "message": "Die Breite muss kleiner als oder gleich 800 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 