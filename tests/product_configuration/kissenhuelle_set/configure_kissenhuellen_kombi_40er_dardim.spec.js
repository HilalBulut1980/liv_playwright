import { test } from 'playwright/test'
import { Kissenhuelle_set } from '../../support/configurator_kissenhuelle_set'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_kombi_Dardim_Set",
    "produkt": "/vorhaenge/dekoschal/dardim",
    "ab_preis": "126,00",
    "ab_preis_red": "75,60", //-40%
    "supplier": "VHG",
    "system": "Kissenhuelle_set",
    "modell": "",
    "befestigung": "Ösen",  //+10,90
    "farbe": "Lavendel",
    "hoehe": "300",
    "breite": "150",

    "anzahl": 3,
    "grundpreis": 223,  
    "konfektion": 0,  
    "befestigung_preis": 10.90,

    "kissen40": 5,
    "kissen50": 0,
    "kissen40_preis": 35,
    "kissen50_preis": 0,
    
    "discount": 0.6,
    "vat": 100,
    "mwst_1": 0,
    "mwst_2": 0,
    "versandkosten": 29.90,     

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Melissa",
    "last_name": "Podolsky",
    "email": "melly@delphinus-test.de",
    "street": "Heindeweg 99",
    "postal_code": "5421",
    "city": "Basel",
    "state": "Schweiz",
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