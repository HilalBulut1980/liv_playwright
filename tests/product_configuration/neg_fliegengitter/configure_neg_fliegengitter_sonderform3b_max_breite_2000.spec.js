import { test } from 'playwright/test'
import { NEG_Fliegengitter } from '../../support/configurator_neg_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform3B_maxBreite",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3B",
    "hoehe_links": "1300",
    "hoehe_rechts": "1000",
    "breite": "2001",
    "breite_new": "2000",
    "message": "Die Breite muss kleiner als oder gleich 2000 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Fliegengitter = new NEG_Fliegengitter(page)
    await neg_Fliegengitter.configure_neg_fliegengitter(testcase)

}) 