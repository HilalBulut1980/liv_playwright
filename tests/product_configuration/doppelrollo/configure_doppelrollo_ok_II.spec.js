import { test } from 'playwright/test'
import { Doppelrollo } from '../../support/configurator_doppelrollo'

const testcase = {
    "name": "LIVConfig. - Doppelrollo Maß - o.K. II",
    "produkt": "/doppelrollo/lacinia-5053",
    "ab_preis": "91,00",  //Doppelrollo ohne Kassette (mini nicht möglich) PG1
    "ab_preis_red": "36,40",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1600",
    "breite": "900",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+21
    "verblendung_farbe": "schwarz",

    "anzahl": 2,
    "grundpreis": 403,  // PG1
    "kettenpreis": 21,
    "kassFarbenpreis": 0,  //ohne Kassette
    "discount": 0.4,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, //keine Versandkosten

    "login": "register",
    "password": "testpassw5",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test3@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "170491",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "567894",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "567894",
    "payment": "bankpayment"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Doppelrollo = new Doppelrollo(page)
    await new_Doppelrollo.startFromProductPage(testcase)
    await new_Doppelrollo.configureDoppelrollo(testcase)

}) 