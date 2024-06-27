import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo Maß - RM32 Metall oK Montageleiste",
    "produkt": "Texture 3433",  //PG C
    "ab_preis": "53,00",
    "ab_preis_red": "23,85", //Regel 19 -->  -55%
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "ohne Kassette",
    "hoehe": "2000",
    "breite": "1650",
    "befestigung": "Montage an der Wand",
    "montageleiste": "mit Montageleiste", //62,00 (rabattiert)
    "bedientyp": "mit Kugelkette",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+21
    "halterung": "Metall",
    "halterung_farbe": "creme",

    "anzahl": 1,
    "grundpreis": 500,
    "befestigung_preis": 0,
    "ketten_preis": 21,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 62, //rabatt
    "bedienstab_preis": 0,
    "volant_preis": 0, 
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