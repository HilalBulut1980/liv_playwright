import { test } from 'playwright/test'
import { Kissenhuelle_set } from '../../support/configurator_kissenhuelle_set'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_Bosco_Set",
    "produkt": "/vorhaenge/dekoschal/bosco",
    "ab_preis": "126,00",
    "ab_preis_red": "75,60", //-40%
    "supplier": "VHG",
    "system": "Kissenhuelle_set",
    "modell": "",
    "befestigung": "Ösen",  //+10,90
    "farbe": "Anthrazit",
    "hoehe": "275",
    "breite": "150",

    "anzahl": 2,
    "grundpreis": 201,  
    "konfektion": 0,  
    "befestigung_preis": 10.90,

    "kissen40": 0,
    "kissen50": 5,
    "kissen40_preis": 0,
    "kissen50_preis": 38.50,
    
    "discount": 0.6,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,
    "versandkosten": 0,     

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Ferdy",
    "last_name": "Lehmann",
    "email": "ferdy@delphinus-test.de",
    "street": "Lupinenweg 88",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
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