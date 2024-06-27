import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fs1-kleineHöheLinks",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS1",
    "system": "Cosiflor",
    "breite": "750",
    "hoehe_links": "70",
    "hoehe_rechts": "1200",
    "hoehe_links_new": "100",
    "hoehe_rechts_new": "500",
    "ausrichtung": "rechts",
    "message": "Die linke Höhe muss größer als oder gleich 100 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 