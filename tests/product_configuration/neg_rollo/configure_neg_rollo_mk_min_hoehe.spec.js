import { test } from 'playwright/test'
import { NEG_Rollo } from '../../support/configurator_neg_rollo'

const testcase = {
    "name": "LIV-rollo_m.K._hoehe_min",
    "produkt": "/rollo/basic-dimout-3060",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "mit Kassette",
    "hoehe": "500",
    "breite": "1000",
    "hoehe_new": "1000",
    "breite_new": "1500",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 1000 mm und 5000 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Rollo = new NEG_Rollo(page)
    await neg_Rollo.configure_neg_rollo(testcase)

}) 