import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo Maß - RM18 oK mit Pendels.",
    "produkt": "Rizzo 3752",  //PG C
    "ab_preis": "53,00", // bei Mindestmaß 1000x300
    "ab_preis_red": "23,85",//Regel 19 -55%
    "supplier": "Anwis",
    "rollotyp": "Rollos",
    "system": "Maß_Rollo",
    "kassette": "ohne Kassette",
    "hoehe": "1500",
    "breite": "1400",  //--> RM18
    "befestigung": "verschraubt am Fensterflügel",
    "bedientyp": "mit Kugelkette",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+21
    "halterung": "Kunststoff",
    "halterung_farbe": "nuss",
    "pendelsicherung": "ja",  //+8

    "anzahl": 1,
    "grundpreis": 297,
    "befestigung_preis": 0,
    "bedienstab_preis": 0,
    "kassetten_preis": 0,
    "montageleiste_preis": 0,
    "ketten_preis": 21,
    "pendel_preis": 8,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,  

    "login": "register",
    "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Laya",
    "last_name": "Lincoln",
    "email": "laya@delphinus-test.de",
    "street": "Trezstraße 22",
    "postal_code": "1020",
    "city": "Graz",
    "state": "Österreich",
    "phone": "1051839",
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