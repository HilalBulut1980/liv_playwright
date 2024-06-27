import { test } from 'playwright/test'
import { NEG_Insektenschutzrollo } from '../../support/configurator_neg_insektenschutzrollo'

const testcase = {
    "name": "LIVConfig. - Insekten.Rollo_Nuss_maxBreite",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "farbe": "Nuss",
    "netzfarbe": "schwarz",
    "hoehe": "1500",
    "breite": "1610",
    "hoehe_new": "1500",
    "breite_new": "1600",
    "vorrichtung": "Hakenleiste",
    "message": "Die Breite muss kleiner als oder gleich 1600 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Insektenschutzrollo = new NEG_Insektenschutzrollo(page)
    await neg_Insektenschutzrollo.configure_neg_insektenschutzrollo(testcase)

}) 