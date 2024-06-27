import { test } from 'playwright/test'
import { NEG_Raffrollo } from '../../support/configurator_neg_raffrollo'

const testcase = {
    "name": "LIV-raffrollo_breite_min",
    "produkt": "/raffrollo/luogo-9107",
    "hoehe": "200",
    "hoehe_new": "200",
    "breite": "29",
    "breite_new": "40",
    "message": "Bitte geben Sie die Breite in Zentimeter im Bereich von 40 cm und 300 cm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Raffrollo = new NEG_Raffrollo(page)
    await neg_Raffrollo.configure_neg_raffrollo(testcase)

}) 