import { test } from 'playwright/test'
import { Jalousie } from '../../support/configurator_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_50_Schnur_Decke_II",
    "produkt": "jalousien",
    "ab_preis": "102,00",
    "ab_preis_red": "40,80",//-60%
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Schwarz glänzend 6091",  //PG 0
    "hoehe": "1600",
    "breite": "1000",
    "befestigung": "An der Decke",
    "bedientyp": "Schnurbedienung",
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Bremse undBedienung rechts",
    "pendelsicherung": "mit Pendelsicherung",//+32

    "anzahl": 2,
    "grundpreis": 339,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 32,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "475435",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1674054",
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

    const new_Jalousie = new Jalousie(page)
    await new_Jalousie.configureJalousie(testcase)

}) 