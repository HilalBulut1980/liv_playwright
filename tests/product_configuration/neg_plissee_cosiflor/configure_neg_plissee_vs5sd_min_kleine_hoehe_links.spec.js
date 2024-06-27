import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs5sd-kleineHöheLinks",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "system": "Cosiflor",
    "hoehe_links": "90",
    "hoehe_rechts": "1800",
    "hoehe_links_new": "100",
    "hoehe_rechts_new": "1500",
    "breite_oben": "400",
    "breite_unten": "1500",
    "breite_unten_new": "1000",
    "ausrichtung": "rechts",
    "message": "Die linke Höhe muss größer als oder gleich 100 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 