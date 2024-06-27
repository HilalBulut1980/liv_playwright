import { test } from 'playwright/test'
import { Vorhang } from '../../support/configurator_vorhang'

const testcase = {
    "name": "LIVConfig. - Vorhang_Cortinella_160",
    "produkt": "/vorhaenge/dekoschal/cortinella",
    "ab_preis": "21,00",
    "ab_preis_red": "12,60",
    "supplier": "VHG",
    "system": "Vorhang",
    "modell": "vorhang",
    "befestigung": "Ösen",
    "farbe": "Dunkelblau",
    "hoehe": "160",
    "breite": "145",

    "anzahl": 1,
    "grundpreis": 21,
    "konfektion": 0,
    "befestigung_preis": 0,
    "discount": 0.60,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test4 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "246727",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "844434",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "844434",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Vorhang = new Vorhang(page)
    await new_Vorhang.configureVorhang(testcase)

}) 