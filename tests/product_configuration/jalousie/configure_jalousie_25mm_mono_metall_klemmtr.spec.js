import { test } from 'playwright/test'
import { Jalousie } from '../../support/configurator_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_25_Mono_Metall",
    "produkt": "jalousien",
    "ab_preis": "39,00",
    "ab_preis_red": "15,60",  //-60%
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "25mm",
    "farbe": "Veilchen Hell 6061",// PG 0
    "hoehe": "1250",
    "breite": "870",
    "befestigung": "Auf dem Fensterflügel mit Klemmträgern",  //+7 +11
    "bedientyp": "Kugelkette aus Metall", //Monocommando
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "Braun",
    "bedienseite": "Bedienung links",
    "pendelsicherung": "mit Pendelsicherung",  //+14

    "anzahl": 2,
    "grundpreis": 235,
    "kette": 21,
    "klemm_oben": 7,
    "pendel": 14,
    "klemm_unten": 11,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

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

    const new_Jalousie = new Jalousie(page)
    await new_Jalousie.configureJalousie(testcase)

}) 