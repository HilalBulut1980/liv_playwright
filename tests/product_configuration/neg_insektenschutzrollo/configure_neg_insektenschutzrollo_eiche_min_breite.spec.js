import { test } from 'playwright/test'
import { NEG_Insektenschutzrollo } from '../../support/configurator_neg_insektenschutzrollo'

const testcase = {
    "name": "LIVConfig. - Insekten.Rollo_Eiche_minBreite",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "farbe": "Eiche",
    "netzfarbe": "schwarz",
    "hoehe": "1500",
    "breite": "500",
    "hoehe_new": "1500",
    "breite_new": "600",
    "vorrichtung": "Hakenleiste",
    "message": "Die Breite muss größer als oder gleich 600 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Insektenschutzrollo = new NEG_Insektenschutzrollo(page)
    await neg_Insektenschutzrollo.configure_neg_insektenschutzrollo(testcase)

}) 