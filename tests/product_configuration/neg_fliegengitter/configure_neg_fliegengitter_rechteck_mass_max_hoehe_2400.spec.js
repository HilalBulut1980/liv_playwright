import { test } from 'playwright/test'
import { NEG_Fliegengitter } from '../../support/configurator_neg_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Maß_maxHoehe",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter einbaufertig",
    "farbe": "Mooreiche",
    "netzfarbe": "schwarz",
    "hoehe": "2401",
    "breite": "1200",
    "hoehe_new": "2400",
    "breite_new": "1200",
    "message": "Die Höhe muss kleiner als oder gleich 2400 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Fliegengitter = new NEG_Fliegengitter(page)
    await neg_Fliegengitter.configure_neg_fliegengitter(testcase)

}) 