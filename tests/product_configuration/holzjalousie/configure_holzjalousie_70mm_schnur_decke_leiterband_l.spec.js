import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._70_Decke_Leiterband",
    "produkt": "/holzjalousien",
    "ab_preis": "221,00",
    "ab_preis_red": "110,50",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "70mm",
    "farbe": "Natural Weiß 6556",  //--> N
    "hoehe": "3600",
    "breite": "2800",  // --> 3501,00
    "befestigung": "An der Decke",
    "lamellenverbindung": "Leiterband",  //+5% von 3501 = 175,05
    "farbe_leiterband": "Hellgrau",
    "bedientyp": "Schnurbedienung",
    "bedienseite": "Bremse rechtsBedienung links",

    "anzahl": 3,
    "grundpreis": 3501,  
    "leiterband": 175.05,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 70.58, //  70,00 /119 *120 --> eigentlich 70.59

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test7 GmbH",
    "prefix_business": "Frau",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "494494",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "1743189",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 7",
    "postal_code2": "494494",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "1743189",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Holzjalousie = new Holzjalousie(page)
    await new_Holzjalousie.configureHolzjalousie(testcase)

}) 