import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo Maß - RM45 Metall - o.K. - Montageleiste - Motor Elektrisch",  //RM45 Metall Motor
    "produkt": "Texture 3433",  //PG C
    "ab_preis": "53,00",  //Startpreis für PG C und RM18
    "ab_preis_red": "23,85",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "ohne Kassette",
    "hoehe": "2500",
    "breite": "3000",  // 1217,00
    "befestigung": "Montage an der Decke",
    "montageleiste": "mit Montageleiste",  // +111
    "bedientyp": "mit Motorbedienung",  // + 310 + 93
    "bedienseite": "rechts",
    "volant": "flache Aluminium-Unterleiste",  //wird rabattiert -55% -->  W6 81
    "aluleiste_farbe": "grau",
    "halterung": "Metall",
    "halterung_farbe": "schwarz",

    "anzahl": 1,
    "grundpreis": 1217,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 0,
    "pendel_preis": 0,
    "montageleiste_preis": 111,
    "bedienstab_preis": 0,
    "volant_preis": 81,
    "motor_preis": 403,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Seda",
    "last_name": "Sayan",
    "email": "seda@delphinus-test.de",
    "street": "Lange Reihe 99",
    "postal_code": "20055",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
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

    const new_Rollo = new Rollo(page)
    await new_Rollo.startFromConfigurator(testcase)
    await new_Rollo.configureRollo(testcase)

}) 