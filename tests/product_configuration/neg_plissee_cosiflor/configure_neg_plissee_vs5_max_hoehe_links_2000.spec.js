import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs5_dirL_hoehe_links_max",
    "produkt": "/plissee/darken-1574",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "system": "Cosiflor",
    "hoehe_links": "2500",
    "hoehe_rechts": "1500",
    "hoehe_links_new": "2000",
    "breite_oben": "500",
    "breite_unten": "1000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die linke Höhe muss kleiner als oder gleich 2000 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 