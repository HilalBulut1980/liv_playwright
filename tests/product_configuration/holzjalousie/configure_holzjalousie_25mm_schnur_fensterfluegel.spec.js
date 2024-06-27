import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._25_Fensterflügel",
    "produkt": "/holzjalousien",
    "ab_preis": "88,00",
    "ab_preis_red": "44,00",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25mm",
    "farbe": "Modern Olivbraun 6514",  // --> NEU: PG N statt M
    "hoehe": "1200",
    "breite": "1400",
    "befestigung": "Auf dem Fensterflügel",
    "bedientyp": "Schnurbedienung",  //Schnur+Wendestab
    "bedienseite": "Wendestab undBedienung links",
    "pendelsicherung": "mit Pendelsicherung",  //+14

    "anzahl": 3,
    "grundpreis": 477,  // PG N
    "leiterband": 0,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 14,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02, 

    "login": "register",
    "password": "testpassw8",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria4@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "342022",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1190109",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 7",
    "postal_code2": "342022",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "1190109",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Holzjalousie = new Holzjalousie(page)
    await new_Holzjalousie.configureHolzjalousie(testcase)

}) 