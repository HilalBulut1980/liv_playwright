import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._25_Fensternische",
    "produkt": "/holzjalousien",
    "ab_preis": "88,00",
    "ab_preis_red": "44,00",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25mm",
    "farbe": "Natural Umbra 6510", // --> NEU: PG M statt N
    "hoehe": "1400",
    "breite": "2400",
    "befestigung": "An der Mauer oder Decke",
    "bedientyp": "Schnurbedienung",  //schnur + wendestab
    "bedienseite": "Wendestab linksBedienung rechts",

    "anzahl": 1,
    "grundpreis": 829,  // PG M
    "leiterband": 0,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, 

    "login": "register",
    "password": "testpassw9",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test5@delphinus-test.de",
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1259244",
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

    const new_Holzjalousie = new Holzjalousie(page)
    await new_Holzjalousie.configureHolzjalousie(testcase)

}) 