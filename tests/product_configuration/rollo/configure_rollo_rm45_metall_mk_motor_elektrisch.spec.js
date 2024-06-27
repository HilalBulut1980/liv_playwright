import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo Maß - RM45 Metall mit Kassette Motor Elektrisch",  //RM45 Metall Motor
    "produkt": "Texture 3436",  //PG C
    "ab_preis": "53,00",  //Startpreis für PG C und RM18
    "ab_preis_red": "23,85",
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "mit Kassette", // +458
    "hoehe": "5000",
    "breite": "3000",  // 2049 
    "befestigung": "verschraubt am Fensterflügel",
    "bedientyp": "mit Motorbedienung", //+310 + 93
    "volant": "runde Aluminium-Unterleiste",  // W4 --> 46,00
    "aluleiste_farbe": "grau",
    "kassettenfarbe": "silber",

    "anzahl": 1,
    "grundpreis": 2049,
    "befestigung_preis": 0,
    "ketten_preis": 0,
    "kassetten_preis": 458, //rabattieren
    "pendel_preis": 0,
    "montageleiste_preis": 0,
    "bedienstab_preis": 0,
    "volant_preis": 46,  //rabattieren
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
    "first_name": "Melanie",
    "last_name": "Depp",
    "email": "melly@delphinus-test.de",
    "street": "Lange Reihe 101",
    "postal_code": "20077",
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