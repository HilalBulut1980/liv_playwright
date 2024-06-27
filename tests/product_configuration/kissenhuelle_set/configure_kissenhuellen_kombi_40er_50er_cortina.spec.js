import { test } from 'playwright/test'
import { Kissenhuelle_set } from '../../support/configurator_kissenhuelle_set'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_Cortina_Set",
    "produkt": "/vorhaenge/dekoschal/cortina",
    "ab_preis": "66,50",
    "ab_preis_red": "33,25", //-50% Regel 22
    "supplier": "VHG",
    "system": "Kissenhuelle_set",
    "modell": "",
    "befestigung": "Ösen",  //+32,70
    "farbe": "Türkis",
    "hoehe": "265",
    "breite": "390",

    "anzahl": 3,
    "grundpreis": 283.50,  
    "konfektion": 17.50,  
    "befestigung_preis": 32.70,

    "kissen40": 3,
    "kissen50": 4,
    "kissen40_preis": 35,
    "kissen50_preis": 42,
    
    "discount": 0.5,
    "vat": 118,
    "mwst_1": 18,
    "mwst_2": 18,
    "mwst_3": 18,
    "versandkosten": 19.84,     

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Marcin",
    "last_name": "Dralto",
    "email": "marcin@delphinus-test.de",
    "street": "Lydienweg 58",
    "postal_code": "8569",
    "city": "Valletta",
    "state": "Malta",
    "phone": "8547963",
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "",
    "state2": "",
    "phone2": "",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Kissenhuelle_set = new Kissenhuelle_set(page)
    await new_Kissenhuelle_set.configureKissenhuelle_set(testcase)

}) 