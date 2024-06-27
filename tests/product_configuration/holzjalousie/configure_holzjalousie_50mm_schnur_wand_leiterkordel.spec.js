import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._50_Wand_Leiterkordel",
    "produkt": "/holzjalousien",
    "ab_preis": "130,00",
    "ab_preis_red": "58,50", //da im konf. 6568 vorselektiert ist
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "50mm",
    "farbe": "Natural Mittelbraun 6520",  // --> N
    "hoehe": "1900",
    "breite": "2500",
    "befestigung": "An der Wand",
    "lamellenverbindung": "Leiterkordel",
    "bedientyp": "Schnurbedienung",  //schnur+wendestab
    "bedienseite": "Bremse linksBedienung rechts",
    "pendelsicherung": "mit Pendelsicherung", // + 32

    "anzahl": 1,
    "grundpreis": 1527,  // PG N
    "leiterband": 0,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 32,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 70.58, //70/119*120  --> eigentlich 70,59

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "418258",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "1466649",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 7",
    "postal_code2": "418258",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "1466649",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Holzjalousie = new Holzjalousie(page)
    await new_Holzjalousie.configureHolzjalousie(testcase)

}) 