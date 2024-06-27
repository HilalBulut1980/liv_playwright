import { test } from 'playwright/test'
import { NEG_Fliegengitter } from '../../support/configurator_neg_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform3C_seitenVerhaeltnis",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3C",
    "hoehe": "1300",
    "breite_oben": "1000",
    "breite_unten": "900",
    "breite_unten_new": "1300",
    "message": "Die obere Breite muss kleiner als die untere Breite sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Fliegengitter = new NEG_Fliegengitter(page)
    await neg_Fliegengitter.configure_neg_fliegengitter(testcase)

}) 