import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fs2_ausrichtung_rechts",
    "produkt": "/plissee/basis-object-1506",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FS2",
    "system": "Cosiflor",
    "breite": "600",
    "hoehe_links": "2000",
    "hoehe_rechts": "2500",
    "hoehe_links_new": "2500",
    "hoehe_rechts_new": "2000",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder Sie wechseln die Ausrichtung des Plisses."
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 