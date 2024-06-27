import { test } from 'playwright/test'
import { NEG_Vorhang } from '../../support/configurator_neg_vorhang'

const testcase = {
    "name": "LIVConfig. - Gardine_Macari_maxBreite",
    "produkt": "/vorhaenge/dekoschal/crotone",
    "farbe": "Weiß",
    "hoehe": "200",
    "breite": "550",
    "breite_new": "500",
    "message": "Die Breite muss kleiner als oder gleich 500 cm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vorhang = new NEG_Vorhang(page)
    await neg_Vorhang.configure_neg_vorhang(testcase)

}) 