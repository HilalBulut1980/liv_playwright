import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo Maß - RM45 Metall ohne Kassette",
    "produkt": "BlackOut Reflex 3089",  //PG B
    "ab_preis": "46,00",
    "ab_preis_red": "20,70",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "ohne Kassette",
    "hoehe": "4000",
    "breite": "1500",
    "befestigung": "Montage an der Decke",
    "volant": "runde Aluminium-Unterleiste",  //W4 30,00
    "aluleiste_farbe": "grau",
    "halterung": "Metall",
    "halterung_farbe": "schwarz",

    "anzahl": 1,
    "grundpreis": 686,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
    "volant_preis": 30,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1674054",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 62",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "1674054",
    "payment": "bankpayment"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Rollo = new Rollo(page)
    await new_Rollo.startFromConfigurator(testcase)
    await new_Rollo.configureRollo(testcase)

}) 