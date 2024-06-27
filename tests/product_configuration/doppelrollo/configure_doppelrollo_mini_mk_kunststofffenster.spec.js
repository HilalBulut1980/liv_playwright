import { test } from 'playwright/test'
import { Doppelrollo } from '../../support/configurator_doppelrollo'

const testcase = {
    "name": "LIVConfig. - Doppelrollo Mini_Maß - m.K. Kunststofffenster", //mit Kassette -->zum Kleben
    "produkt": "/doppelrollo/cosma-5088",
    "ab_preis": "60,00",  //Doppelrollo Mini zum Klemmen Startpreis PG3
    "ab_preis_red": "24,00",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette", //mit Kassette -->zum Kleben
    "system": "Maß_DoppelRollo",
    "hoehe": "1300",
    "breite": "800",
    "befestigung": "Kunststofffenster",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+21
    "kassettenfarbe": "nussbaum",  // D "Preis Kassettenfarbe" = ( ("Preis D" + "Aufpreis D") - ("Preis S" + "Aufpreis S") )

    "anzahl": 2,
    "grundpreis": 354, //D3
    "kettenpreis": 21,
    "kassFarbenpreis": 34,  //D3 ==> = (354 + 16) - (326 + 10)  = 370 - 336 = 34  wird rabattiert
    "discount": 0.4,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "register",
    "password": "testpassw3",
    "prefix": "geschaeftskunde",
    "company_name": "Test3 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test2@delphinus-test.de",
    "street": "Lange Reihe 59",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "429624",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 59",
    "postal_code2": "132373",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "429624",
    "payment": "bankpayment"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Doppelrollo = new Doppelrollo(page)
    await new_Doppelrollo.startFromProductPage(testcase)
    await new_Doppelrollo.configureDoppelrollo(testcase)

}) 