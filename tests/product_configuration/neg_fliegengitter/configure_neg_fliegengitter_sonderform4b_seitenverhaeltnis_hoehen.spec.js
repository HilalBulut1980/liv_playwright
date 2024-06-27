import { test } from 'playwright/test'
import { NEG_Fliegengitter } from '../../support/configurator_neg_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform4B_seitenVerhaeltnisHoehen",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 4B",
    "hoehe_links": "900",
    "hoehe_rechts": "1000",
    "breite_oben": "700",
    "breite_unten": "1000",
    "hoehe_links_new": "1200",
    "message": "Die rechte Höhe muss kleiner als die linke Höhe sein - oder wählen Sie Typ 4A."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Fliegengitter = new NEG_Fliegengitter(page)
    await neg_Fliegengitter.configure_neg_fliegengitter(testcase)

}) 