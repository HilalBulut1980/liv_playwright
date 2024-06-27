import { test } from 'playwright/test'
import { Jalousie } from '../../support/configurator_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_Schnur_50_Wand",
    "produkt": "jalousien",
    "ab_preis": "102,00",
    "ab_preis_red": "40,80",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Kakaobraun glänzend 6088",  //PG 0
    "hoehe": "1150",
    "breite": "600",
    "befestigung": "An der Wand",
    "bedientyp": "Schnurbedienung",
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Bremse rechtsBedienung links",
    "pendelsicherung": "mit Pendelsicherung",  //+32

    "anzahl": 2,
    "grundpreis": 230,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 32,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 8",
    "postal_code": "456376",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1604919",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 8",
    "postal_code2": "456376",
    "city2": "Barcelona",
    "state2": "Spanien",
    "phone2": "1604919",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Jalousie = new Jalousie(page)
    await new_Jalousie.configureJalousie(testcase)

}) 