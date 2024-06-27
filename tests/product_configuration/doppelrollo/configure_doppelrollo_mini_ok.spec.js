import { test } from 'playwright/test'
import { Doppelrollo } from '../../support/configurator_doppelrollo'

const testcase = {
    "name": "LIVConfig. - Doppelrollo Mini_Maß - o.K.", // --> ohne Kassette --> zum Klemmen
    "produkt": "/doppelrollo/rayure-5002",
    "ab_preis": "46,00",  //Doppelrollo Mini zum Klemmen Startpreis PG1--> S1
    "ab_preis_red": "18,40",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Mini",
    "system": "Maß_DoppelRollo", // --> ohne Kassette --> zum Klemmen
    "hoehe": "1000",
    "breite": "800",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  // +21
    "verblendung_farbe": "anthrazit",  

    "anzahl": 1,
    "grundpreis": 160,  //S1
    "kettenpreis": 21, 
    "kassFarbenpreis": 0,  //ohne Kassette
    "discount": 0.4,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, //keine Versandkosten

    "login": "register",
    "password": "Abcde_12345",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test1@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "94255",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "291354",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "291354",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Doppelrollo = new Doppelrollo(page)
    await new_Doppelrollo.startFromProductPage(testcase)
    await new_Doppelrollo.configureDoppelrollo(testcase)

}) 