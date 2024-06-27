import { test } from 'playwright/test'
import { NEG_Vorhang } from '../../support/configurator_neg_vorhang'

const testcase = {
    "name": "LIVConfig. - Vorhang_Avellino_maxBreite",
    "produkt": "/vorhaenge/dekoschal/avellino",
    "farbe": "Gelb",
    "hoehe": "200",
    "breite": "500",
    "breite_new": "420",
    "message": "Die Breite muss kleiner als oder gleich 435 cm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vorhang = new NEG_Vorhang(page)
    await neg_Vorhang.configure_neg_vorhang(testcase)

}) 