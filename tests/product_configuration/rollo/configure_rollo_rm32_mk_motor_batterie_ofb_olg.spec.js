import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo Maß - RM32 Metall mK Motor Batterie ohne FB ohne Ladegerät",
    "produkt": "BlackOut Reflex 3061",  //PG B
    "ab_preis": "46,00",
    "ab_preis_red": "20,70",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "mit Kassette", // +187 //-->RM32 Metall, da bei RM32 Kunststoff keine Kassette möglich!
    "hoehe": "1500",
    "breite": "2100",  //RM 32
    "befestigung": "Montage an der Decke",
    "bedientyp": "mit Motorbedienung",
    "fernbedienung": "ohne Fernbedienung",  //keine +93
    "ladegeraet": "ohne Ladegerät",  // keine +58
    "motortyp": "Batterie",  //+356
    "volant": "runde Aluminium-Unterleiste",  //W4 --> 33,00
    "aluleiste_farbe": "grau",

    "anzahl": 3,
    "grundpreis": 383,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 187,
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
    "volant_preis": 33, //rabatt
    "motor_preis": 356,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82, // 70/119*100

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Sabrina",
    "last_name": "Thiede",
    "email": "sabrina@delphinus-test.de",
    "street": "Lange Reihe 123",
    "postal_code": "284845",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "982704",
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "Basel",
    "state2": "",
    "phone2": "",
    "payment": "bankpayment"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Rollo = new Rollo(page)
    await new_Rollo.startFromConfigurator(testcase)
    await new_Rollo.configureRollo(testcase)

}) 