import { test } from 'playwright/test'
import { NEG_Doppelrollo } from '../../support/configurator_neg_doppelrollo'

const testcase = {
    "name": "LIVConfig. - doppel_OK_Lacinia_maxBreite2300",
    "produkt": "/doppelrollo/lacinia-5053",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1500",
    "breite": "2400",
    "hoehe_new": "1500",
    "breite_new": "2300",
    "message": "Die maximale Breite eines Doppelrollos beträgt 2300 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Doppelrollo = new NEG_Doppelrollo(page)
    await neg_Doppelrollo.configure_neg_doppelrollo(testcase)

}) 