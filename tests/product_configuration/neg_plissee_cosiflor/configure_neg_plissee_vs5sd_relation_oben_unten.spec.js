import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs5sd_oben_unten",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "system": "Cosiflor",
    "hoehe_links": "1200",
    "hoehe_rechts": "800",
    "breite_oben": "900",
    "breite_unten": "500",
    "breite_oben_new": "500",
    "breite_unten_new": "900",
    "ausrichtung": "links",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 