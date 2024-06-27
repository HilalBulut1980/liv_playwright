import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs5sd-kleineHöheRechts",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "system": "Cosiflor",
    "hoehe_links": "2000",
    "hoehe_rechts": "95",
    "hoehe_rechts_new": "100",
    "breite_oben": "300",
    "breite_unten": "1200",
    "breite_unten_new": "1000",
    "ausrichtung": "links",
    "message": "Die rechte Höhe muss größer als oder gleich 100 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 