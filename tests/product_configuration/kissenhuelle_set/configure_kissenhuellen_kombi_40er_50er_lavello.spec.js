import { test } from 'playwright/test'
import { Kissenhuelle_set } from '../../support/configurator_kissenhuelle_set'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_Lavello_Set",
    "produkt": "/vorhaenge/dekoschal/lavello",
    "ab_preis": "59,00",
    "ab_preis_red": "35,40", //-40%
    "supplier": "VHG",
    "system": "Kissenhuelle_set",
    "modell": "",
    "befestigung": "Ösen",
    "farbe": "Hellgelb",
    "hoehe": "250",
    "breite": "120",

    "anzahl": 3,
    "grundpreis": 90.50,  
    "konfektion": 0,  
    "befestigung_preis": 10.90,

    "kissen40": 2,
    "kissen50": 2,
    "kissen40_preis": 25.50,
    "kissen50_preis": 33.50,
    
    "discount": 0.6,
    "vat": 120,
    "mwst_1": 20,
    "mwst_2": 20,
    "mwst_3": 20,
    "versandkosten": 15.02,    

    "login": "register",
    "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lydia",
    "last_name": "Fahrenhofer",
    "email": "lilly@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "303904",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1051839",
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