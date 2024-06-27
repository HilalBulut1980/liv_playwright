import { test } from 'playwright/test'
import { NEG_Rollo } from '../../support/configurator_neg_rollo'

const testcase = {
    "name": "LIV-rollo_lux_breite_min",
    "produkt": "/rollo/planta-3774",
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "2000",
    "breite": "299",
    "hoehe_new": "2000",
    "breite_new": "300",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 1400 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Rollo = new NEG_Rollo(page)
    await neg_Rollo.configure_neg_rollo(testcase)

}) 