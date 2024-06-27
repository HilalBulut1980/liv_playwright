import { test } from 'playwright/test'
import { NEG_Vorhang } from '../../support/configurator_neg_vorhang'

const testcase = {
    "name": "LIVConfig. - Vorhang_Cortina_maxHoehe",
    "produkt": "/vorhaenge/dekoschal/cortina",
    "farbe": "Maglia",
    "hoehe": "500",
    "breite": "300",
    "hoehe_new": "330",
    "message": "Die Höhe muss kleiner als oder gleich 330 cm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Vorhang = new NEG_Vorhang(page)
    await neg_Vorhang.configure_neg_vorhang(testcase)

}) 