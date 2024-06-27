import { test } from 'playwright/test'
import { Vorhang } from '../../support/configurator_vorhang'

const testcase = {
    "name": "LIVConfig. - Vorhang_Lauden_Schlaufen",
    "produkt": "/vorhaenge/gardine/lauden",
    "ab_preis": "50,50",
    "ab_preis_red": "27,78",
    "supplier": "VHG",
    "system": "Vorhang",
    "modell": "vorhang",
    "befestigung": "Bleistiftband/Kräuselband",
    "farbe": "Weiß",
    "hoehe": "230",
    "breite": "140",

    "anzahl": 2,
    "grundpreis": 104,
    "konfektion": 0,
    "befestigung_preis": 0,
    "discount": 0.55,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "register",
    "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria3@delphinus-test.de",
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

    const new_Vorhang = new Vorhang(page)
    await new_Vorhang.configureVorhang(testcase)

}) 