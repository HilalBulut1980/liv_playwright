import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs4s1_direction_left2right",
    "produkt": "/plissee/shade-pearl-2279",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S1",
    "system": "Cosiflor",
    "breite": "1000",
    "hoehe_links": "300",
    "hoehe_rechts": "2000",
    "ausrichtung": "links",
    "ausrichtung_new": "rechts",
    "schienenfarbe": "Weiß",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder Sie wechseln die Ausrichtung des Plisses."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 