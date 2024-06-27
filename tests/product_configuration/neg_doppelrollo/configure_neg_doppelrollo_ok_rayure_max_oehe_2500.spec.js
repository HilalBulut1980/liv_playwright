import { test } from 'playwright/test'
import { NEG_Doppelrollo } from '../../support/configurator_neg_doppelrollo'

const testcase = {
    "name": "LIVConfig. - doppel_OK_Rayure_maxHoehe2500",
    "produkt": "/doppelrollo/rayure-5018",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "3000",
    "breite": "1000",
    "hoehe_new": "2500",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Doppelrollos beträgt 2500 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Doppelrollo = new NEG_Doppelrollo(page)
    await neg_Doppelrollo.configure_neg_doppelrollo(testcase)

}) 