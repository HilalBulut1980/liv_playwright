import { test } from 'playwright/test'
import { Kissenhuelle_set } from '../../support/configurator_kissenhuelle_set'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_Tiere_Set",
    "produkt": "/vorhaenge/dekoschal/tiere",
    "ab_preis": "81,00",
    "ab_preis_red": "48,60", //-40%
    "supplier": "VHG",
    "system": "Kissenhuelle_set",
    "modell": "",
    "befestigung": "Bleistiftband/Kräuselband",
    "farbe": "Weiß",
    "hoehe": "275",
    "breite": "170",

    "anzahl": 4,
    "grundpreis": 258,  
    "konfektion": 0,  
    "befestigung_preis": 0,

    "kissen40": 0,
    "kissen50": 3,
    "kissen40_preis": 0,
    "kissen50_preis": 19.50,
    
    "discount": 0.6,
    "vat": 124,
    "mwst_1": 24,
    "mwst_2": 24,
    "versandkosten": 20.84,     

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Hannes",
    "last_name": "Montnyk",
    "email": "hannes@delphinus-test.de",
    "street": "Traunspark 20",
    "postal_code": "12548",
    "city": "Oslo",
    "state": "Finnland",
    "phone": "1025487",
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