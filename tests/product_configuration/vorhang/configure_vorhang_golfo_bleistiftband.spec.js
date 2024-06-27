import { test } from 'playwright/test'
import { Vorhang } from '../../support/configurator_vorhang'

const testcase = {
    "name": "LIVConfig. - Gardine_Golfo_Bleist/Kräusel",
    "produkt": "/vorhaenge/gardine/golfo",
    "ab_preis": "29,50",
    "ab_preis_red": "16,23",
    "supplier": "VHG",
    "system": "Vorhang",
    "modell": "gardine",
    "befestigung": "Bleistiftband/Kräuselband",
    "farbe": "Weiß",
    "hoehe": "230",
    "breite": "280",

    "anzahl": 2,
    "grundpreis": 96,
    "konfektion": 0,
    "befestigung_preis": 0,
    "discount": 0.55,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "982704",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 7",
    "postal_code2": "1110",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "1190109",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Vorhang = new Vorhang(page)
    await new_Vorhang.configureVorhang(testcase)

}) 