import { test } from 'playwright/test'
import { NEG_Doppelrollo } from '../../support/configurator_neg_doppelrollo'

const testcase = {
    "name": "LIVConfig. - doppel_MK_minHoehe",
    "produkt": "/doppelrollo/remsa-5055",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo mit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "200",
    "breite": "1000",
    "hoehe_new": "300",
    "breite_new": "1000",
    "message": "Die minimale Höhe eines Doppelrollos beträgt 300 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Doppelrollo = new NEG_Doppelrollo(page)
    await neg_Doppelrollo.configure_neg_doppelrollo(testcase)

}) 