import { test } from 'playwright/test'
import { NEG_Fliegengitter } from '../../support/configurator_neg_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform4A_maxBreiteUnten",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4A",
    "hoehe_links": "600",
    "hoehe_rechts": "1200",
    "breite_oben": "600",
    "breite_unten": "2001",
    "breite_unten_new": "2000",
    "message": "Die Breite unten muss kleiner als oder gleich 2000 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Fliegengitter = new NEG_Fliegengitter(page)
    await neg_Fliegengitter.configure_neg_fliegengitter(testcase)

}) 