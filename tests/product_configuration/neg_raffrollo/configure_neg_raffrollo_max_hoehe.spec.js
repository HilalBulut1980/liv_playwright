import { test } from 'playwright/test'
import { NEG_Raffrollo } from '../../support/configurator_neg_raffrollo'

const testcase = {
    "name": "LIV-raffrollo_hoehe_max",
    "produkt": "/raffrollo/grada-9235",
    "hoehe": "310",
    "breite": "200",
    "breite_new": "200",
    "hoehe_new": "300",
    "message": "Bitte geben Sie die Höhe in Zentimeter im Bereich von 60 cm und 300 cm ein."

}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Raffrollo = new NEG_Raffrollo(page)
    await neg_Raffrollo.configure_neg_raffrollo(testcase)

}) 