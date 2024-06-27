import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs5sd_dirR_hoehe_rechts_max",
    "produkt": "/plissee/diafano-1895",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "system": "Cosiflor",
    "hoehe_links": "1500",
    "hoehe_rechts": "2200",
    "hoehe_rechts_new": "2000",
    "breite_oben": "500",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "message": "Die rechte Höhe muss kleiner als oder gleich 2000 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 