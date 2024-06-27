import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo Maß - RM32 Metall mit Kassette",
    "produkt": "Silves 3693",  //PG A
    "ab_preis": "39,00",  //RM32 Metall
    "ab_preis_red": "17,55", //Regel 19 -->  -55%
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "mit Kassette", //RM32 Metall, da bei RM18 keine Kassette möglich +107,00
    "hoehe": "1400",
    "breite": "1000",  //RM 32, da mit Kassette
    "befestigung": "verschraubt am Fensterflügel",
    "bedientyp": "mit Kugelkette",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+21
    "volant": "flache Aluminium-Unterleiste",  //W6 +41
    "kassettenfarbe": "creme",

    "anzahl": 1,
    "grundpreis": 150,
    "befestigung_preis": 0,
    "ketten_preis": 21,
    "kassetten_preis": 107,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
    "volant_preis": 41,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test4 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
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

    const new_Rollo = new Rollo(page)
    await new_Rollo.startFromConfigurator(testcase)
    await new_Rollo.configureRollo(testcase)

}) 