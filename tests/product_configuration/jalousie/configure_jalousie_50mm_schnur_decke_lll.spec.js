import { test } from 'playwright/test'
import { Jalousie } from '../../support/configurator_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_50_Schnur_Decke_III",
    "produkt": "jalousien",
    "ab_preis": "102,00",
    "ab_preis_red": "40,80",//-60%
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Roteiche 6098",//PG 2
    "hoehe": "1700",
    "breite": "1200",
    "befestigung": "An der Decke",
    "bedientyp": "Schnurbedienung",
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Bremse undBedienung links",
    "pendelsicherung": "mit Pendelsicherung",//+32

    "anzahl": 2,
    "grundpreis": 606,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 32,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

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

    const new_Jalousie = new Jalousie(page)
    await new_Jalousie.configureJalousie(testcase)

}) 