import { test } from 'playwright/test'
import { NEG_Vorhang } from '../../support/configurator_neg_vorhang'

const testcase = {
    "name": "LIVConfig. - Vorhang_Cortina_minBreite",
    "produkt": "/vorhaenge/dekoschal/cortina",
    "farbe": "Maglia",
    "hoehe": "250",
    "breite": "50",
    "breite_new": "100",
    "message": "Die Breite muss größer als oder gleich 100 cm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vorhang = new NEG_Vorhang(page)
    await neg_Vorhang.configure_neg_vorhang(testcase)

}) 