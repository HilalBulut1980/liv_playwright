import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._25_Glasleiste",
    "produkt": "/holzjalousien",
    "ab_preis": "88,00",
    "ab_preis_red": "44,00",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25mm",
    "farbe": "Natural Weiß 6500", // --> NEU: PG M statt N
    "hoehe": "800",
    "breite": "1000",
    "befestigung": "Auf dem Fensterflügel",
    "bedientyp": "Schnurbedienung",  //schnur+wendestab
    "bedienseite": "Wendestab undBedienung rechts",
    "pendelsicherung": "mit Pendelsicherung", //+14

    "anzahl": 1,
    "grundpreis": 254,  // PG M
    "leiterband": 0,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 14,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, 

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
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 6",
    "postal_code2": "303904",
    "city2": "Barcelona",
    "state2": "Spanien",
    "phone2": "1051839",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Holzjalousie = new Holzjalousie(page)
    await new_Holzjalousie.configureHolzjalousie(testcase)

}) 