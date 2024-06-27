import { test } from 'playwright/test'
import { NEG_Insektenschutzrollo } from '../../support/configurator_neg_insektenschutzrollo'

const testcase = {
    "name": "LIVConfig. - Insekten.Rollo_Nuss_minHoehe",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "farbe": "Nuss",
    "netzfarbe": "schwarz",
    "hoehe": "400",
    "breite": "1500",
    "hoehe_new": "500",
    "breite_new": "1500",
    "vorrichtung": "Hakenleiste",
    "message": "Die Höhe muss größer als oder gleich 500 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Insektenschutzrollo = new NEG_Insektenschutzrollo(page)
    await neg_Insektenschutzrollo.configure_neg_insektenschutzrollo(testcase)

}) 