import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fk_breite_min",
    "produkt": "/plissee/wabe-protect-1463",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "system": "Cosiflor",
    "hoehe": "2500",
    "breite": "390",
    "breite_new": "400",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die minimale Breite eines Plissee beträgt 400 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 