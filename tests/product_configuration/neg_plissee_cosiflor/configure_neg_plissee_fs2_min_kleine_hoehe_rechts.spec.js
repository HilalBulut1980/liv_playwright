import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fs2-kleineHöheRechts",
    "produkt": "/plissee/vivir-4274",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "system": "Cosiflor",
    "breite": "1000",
    "hoehe_links": "2000",
    "hoehe_rechts": "50",
    "hoehe_links_new": "600",
    "hoehe_rechts_new": "100",
    "ausrichtung": "links",
    "message": "Die rechte Höhe muss größer als oder gleich 100 mm sein."
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 