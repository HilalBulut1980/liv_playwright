import { test } from 'playwright/test'
import { Vorhang } from '../../support/configurator_vorhang'

const testcase = {
    "name": "LIVConfig. - Gardine_Froli_Voile",
    "produkt": "/vorhaenge/gardine/forli-voile",
    "ab_preis": "50,00",
    "ab_preis_red": "27,50",  //-45%
    "supplier": "VHG",
    "system": "Vorhang",
    "modell": "vorhang",
    "befestigung": "",
    "farbe": "Weiß",
    "hoehe": "200",
    "breite": "100",

    "anzahl": 2,
    "grundpreis": 54.50,
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
    "first_name": "Melanie",
    "last_name": "Petersen",
    "email": "melly@delphinus-test.de",
    "street": "Teststreet 555",
    "postal_code": "63258",
    "city": "Amsterdam",
    "state": "Niederlande",
    "phone": "8855",
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