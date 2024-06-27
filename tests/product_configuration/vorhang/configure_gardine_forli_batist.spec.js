import { test } from 'playwright/test'
import { Vorhang } from '../../support/configurator_vorhang'

const testcase = {
    "name": "LIVConfig. - Gardine_Froli_Batist",
    "produkt": "/vorhaenge/gardine/forli-batist",
    "ab_preis": "60,00",
    "ab_preis_red": "33,00",  //-45%
    "supplier": "VHG",
    "system": "Vorhang",
    "modell": "vorhang",
    "befestigung": "",
    "farbe": "Weiß",
    "hoehe": "100",
    "breite": "500",

    "anzahl": 1,
    "grundpreis": 311.50,
    "konfektion": 0,
    "befestigung_preis": 0,
    "discount": 0.55,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Heidi",
    "last_name": "Lehnhardt",
    "email": "heidi@delphinus-test.de",
    "street": "Teststreet 444",
    "postal_code": "1234",
    "city": "Madrid",
    "state": "Spanien",
    "phone": "12345",
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

    const new_Vorhang = new Vorhang(page)
    await new_Vorhang.configureVorhang(testcase)

}) 