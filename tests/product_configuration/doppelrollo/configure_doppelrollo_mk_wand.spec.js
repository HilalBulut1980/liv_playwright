import { test } from 'playwright/test'
import { Doppelrollo } from '../../support/configurator_doppelrollo'

const testcase = {
    "name": "LIVConfig. - Doppelrollo Maß - m.K. Wand",
    "produkt": "Modessa 5101",
    "ab_preis": "60,00",  //Doppelrollo Mini zum Klemmen Startpreis PG2
    "ab_preis_red": "24,00",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo mit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1200",
    "breite": "700",
    "befestigung": "Montage an der Wand",
    "bedienseite": "links",
    "kugelkette": "Kunststoff",
    "kassettenfarbe": "schwarz",

    "anzahl": 1,
    "grundpreis": 398,  // PG2
    "kettenpreis": 0, //da Kunststoff
    "kassFarbenpreis": 0,  // kein Aufpreis bei schwarz
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
    "street": "Lange Reihe 61",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "706164",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 61",
    "postal_code2": "208609",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "706164",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Doppelrollo = new Doppelrollo(page)
    await new_Doppelrollo.startFromConfigurator(testcase)
    await new_Doppelrollo.configureDoppelrollo(testcase)

}) 