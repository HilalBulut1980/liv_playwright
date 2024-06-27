import { test } from 'playwright/test'
import { Raffrollo } from '../../support/configurator_raffrollo'

const testcase = {
    "name": "LIVConfig. - Raffrollo - Montage_Wand_AT",
    "produkt": "/raffrollo/parole-9001",
    "ab_preis": "312,00", //PGA
    "ab_preis_red": "140,40",  //-Rabatt -55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage an der Wand",
    "hoehe": "120",
    "breite": "150",
    "art_kette": "Metall",  //+21
    "bedienseite": "rechts",

    "anzahl": 2,
    "grundpreis": 594,
    "ketten_preis": 21, 
    "befestigung_preis": 0, 
    "discount": 0.45,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02, // 14,90/119*120 eigentlich 15,03

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Marcin",
    "last_name": "Hruby",
    "email": "marcin@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123459",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Lara",
    "last_name2": "Cosic",
    "street2": "Kopalgasse 99",
    "postal_code2": "1040",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "123459",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Raffrollo = new Raffrollo(page)
    await new_Raffrollo.startFromProductPage(testcase)
    await new_Raffrollo.configureRaffrollo(testcase)

}) 