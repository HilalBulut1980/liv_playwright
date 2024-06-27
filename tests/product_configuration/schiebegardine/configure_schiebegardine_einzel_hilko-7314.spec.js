import { test } from 'playwright/test'
import { Schiebegardine_einzel } from '../../support/configurator_schiebegardine_einzel'

const testcase = {
    "name": "LIVConfig.-Schiebegardine_einzel_Hilko-7314",
    "produkt": "Hilko 7314", //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "30,10", // --> 30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "stoff": "Bosna-7290",
    "hoehe": "3000",
    "breite": "1200", // --> 3000x1200 = 229,00
    "paneelwagen": "ja", // +53,00
    "endstab": "Designprofil", // +30,00
    "endstab_pw_farbe": "silber", 

    "anzahl": 2,
    "grundpreis": 229,  //PG 3
    "pw_preis": 53,  // R
    "endstab_preis": 30, // R
    "discount": 0.7,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0.00,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test4 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Heine",
    "email": "max@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "844434",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "844434",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Schiebegardine_einzel = new Schiebegardine_einzel(page)
    await new_Schiebegardine_einzel.startFromConfigurator(testcase)
    await new_Schiebegardine_einzel.configureSchiebegardineEinzel(testcase)

}) 