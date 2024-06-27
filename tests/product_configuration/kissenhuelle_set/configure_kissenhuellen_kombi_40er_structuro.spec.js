import { test } from 'playwright/test'
import { Kissenhuelle_set } from '../../support/configurator_kissenhuelle_set'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_Structuro_Set",
    "produkt": "/vorhaenge/dekoschal/structuro",
    "ab_preis": "73,00",
    "ab_preis_red": "43,80", //-40%
    "supplier": "VHG",
    "system": "Kissenhuelle_set",
    "modell": "",
    "befestigung": "Ösen",  //+10,90
    "farbe": "Flieder",
    "hoehe": "245",
    "breite": "145",

    "anzahl": 2,
    "grundpreis": 101,  
    "konfektion": 0,  
    "befestigung_preis": 10.90,

    "kissen40": 1,
    "kissen50": 0,
    "kissen40_preis": 26.50,
    "kissen50_preis": 0,
    
    "discount": 0.6,
    "vat": 123,
    "mwst_1": 23,
    "mwst_2": 23,
    "versandkosten": 20.68,     

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lena",
    "last_name": "Gnadinger",
    "email": "lena@delphinus-test.de",
    "street": "Downstreet 5a",
    "postal_code": "6298",
    "city": "Dublin",
    "state": "Irland",
    "phone": "963258",
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