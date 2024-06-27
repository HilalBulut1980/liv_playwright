import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._25_Klemmträger",
    "produkt": "/holzjalousien",
    "ab_preis": "88,00",
    "ab_preis_red": "44,00",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25mm",
    "farbe": "Modern Cremeweiß 6512", // --> NEU: PG N statt M
    "hoehe": "1000",
    "breite": "1200",
    "befestigung": "Auf dem Fensterflügel mit Klemmträgern",  //+7 +11 (da mit Pendelsicherung/Seitenf.)
    "bedientyp": "Schnurbedienung",  //schnur+wendestab
    "bedienseite": "Wendestab undBedienung links",
    "pendelsicherung": "mit Pendelsicherung",  // +14

    "anzahl": 2,
    "grundpreis": 384,  // PG N
    "leiterband": 0,
    "kette": 0,
    "klemm_oben": 7,
    "pendel": 14,
    "klemm_unten": 11,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03, 

    "login": "register",
    "password": "testpassw7",
    "prefix": "geschaeftskunde",
    "company_name": "Test5 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test4@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "322963",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1120974",
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