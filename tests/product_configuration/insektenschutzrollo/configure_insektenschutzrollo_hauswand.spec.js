import { test } from 'playwright/test'
import { Insektenschutzrollo } from '../../support/configurator_insektenschutzrollo'

const testcase = {
    "name": "LIVConfig. - Insekten.Rollo - Hauswand",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "ab_preis": "137,00",
    "ab_preis_red": "68,50",
    "supplier": "Anwis",
    "befestigung": "Vor der Fensteröffnung an der Hauswand",
    "farbe": "Anthrazit",
    "netzfarbe": "grau",
    "hoehe": "1500",
    "breite": "1000",
    "vorrichtung": "Einrastender Schnappverschluss",

    "anzahl": 1,
    "grundpreis": 381,  
    "discount": 0.5,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,  

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test1 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 58",
    "postal_code": "18019",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "9632",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 58",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "014814",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Insektenschutzrollo = new Insektenschutzrollo(page)
    await new_Insektenschutzrollo.configureInsektenschutzrollo(testcase)

}) 