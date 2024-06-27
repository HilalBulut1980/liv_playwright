import { test } from 'playwright/test'
import { NEG_Insektenschutzrollo } from '../../support/configurator_neg_insektenschutzrollo'

const testcase = {
    "name": "LIVConfig. - Insekten.Rollo_Weiß_maxHoehe",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "supplier": "Anwis",
    "system": "Maß_Insekten_Rollo",
    "farbe": "Weiß",
    "netzfarbe": "grau",
    "hoehe": "2500",
    "breite": "1500",
    "hoehe_new": "2400",
    "breite_new": "1500",
    "vorrichtung": "Hakenleiste",
    "message": "Die Höhe muss kleiner als oder gleich 2400 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Insektenschutzrollo = new NEG_Insektenschutzrollo(page)
    await neg_Insektenschutzrollo.configure_neg_insektenschutzrollo(testcase)

}) 