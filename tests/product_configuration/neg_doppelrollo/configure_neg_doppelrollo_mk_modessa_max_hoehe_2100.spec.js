import { test } from 'playwright/test'
import { NEG_Doppelrollo } from '../../support/configurator_neg_doppelrollo'

const testcase = {
    "name": "LIVConfig. - doppel_MK_Modessa_maxHoehe2100",
    "produkt": "/doppelrollo/modessa-5101",
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo mit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "3000",
    "breite": "1000",
    "hoehe_new": "2100",
    "breite_new": "1000",
    "message": "Die maximale Höhe eines Doppelrollos beträgt 2100 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Doppelrollo = new NEG_Doppelrollo(page)
    await neg_Doppelrollo.configure_neg_doppelrollo(testcase)

}) 