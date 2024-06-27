import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs10D_hoehe_max_wabe",
    "produkt": "/plissee/wabe-comfort-1465",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS10",
    "system": "Cosiflor",
    "hoehe": "2500",
    "breite": "1000",
    "hoehe_new": "1500",
    "ausrichtung": "links",
    "message": "Die Höhe muss kleiner als oder gleich 2000 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 