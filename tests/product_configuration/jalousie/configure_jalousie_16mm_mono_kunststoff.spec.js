import { test } from 'playwright/test'
import { Jalousie } from '../../support/configurator_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_16_Mono_Kunststoff",
    "produkt": "jalousien",
    "ab_preis": "49,00",
    "ab_preis_red": "19,60",  //-60%
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "16mm",
    "farbe": "Rot glänzend 6014",  //PG 0
    "hoehe": "1700",
    "breite": "1300",
    "befestigung": "Auf dem Fensterflügel",
    "bedientyp": "Kugelkette aus Kunststoff",
    "farbe_ketteUndBlende": "Grau",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Bedienung rechts",
    "pendelsicherung": "mit Pendelsicherung",  //+14

    "anzahl": 2,
    "grundpreis": 389, //PG 0
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 14,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
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

    const new_Jalousie = new Jalousie(page)
    await new_Jalousie.configureJalousie(testcase)

}) 