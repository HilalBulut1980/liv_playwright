import { test } from 'playwright/test'
import { Insektenschutzrollo } from '../../support/configurator_insektenschutzrollo'

const testcase = {
    "name": "LIVConfig. - Insekten.Rollo - Mauer",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "ab_preis": "198,65",  //bei Farbe EICHE
    "ab_preis_red": "99,33",  //-50%
    "supplier": "Anwis",
    "befestigung": "In der Fensteröffnung an der Mauer", //+5%
    "farbe": "Eiche",  //+45%
    "netzfarbe": "grau",
    "hoehe": "2000",//Wenn die Länge der Führungsschienen größer ist als die Produktbreite, dann die Länge der Führungsschienen berücksichtigen --> = Höhe-49mm = 1951mm
    "breite": "1200",  // --> 457
    "vorrichtung": "Einrastender Schnappverschluss",

    "anzahl": 3,
    "grundpreis": 685.50,  //457 + 45%(=205,65) +5% (von 457 =22,85 )
    "discount": 0.5,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82,   // 70/119*100

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 59",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "153084",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 59",
    "postal_code2": "2587",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "153084",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Insektenschutzrollo = new Insektenschutzrollo(page)
    await new_Insektenschutzrollo.configureInsektenschutzrollo(testcase)

}) 