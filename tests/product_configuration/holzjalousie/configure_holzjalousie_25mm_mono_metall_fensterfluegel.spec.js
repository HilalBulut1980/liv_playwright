import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._25_Fensterfluegel_Metallkette",
    "produkt": "/holzjalousien",
    "ab_preis": "88,00",
    "ab_preis_red": "44,00",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25mm",
    "farbe": "Modern Elfenbein 6513",    // --> NEU: PG N statt M
    "hoehe": "1800",
    "breite": "2400",
    "befestigung": "Auf dem Fensterflügel",
    "bedientyp": "Kugelkette aus Metall",  // +21 Monocommando
    "farbe_kette": "Silber",
    "farbe_seitenblende": "Elfenbein",
    "bedienseite": "Bedienung links",

    "anzahl": 3,
    "grundpreis": 1184,  // PG N
    "leiterband": 0,
    "kette": 21,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82,  //70/119*100

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test6 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "399199",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1397514",
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