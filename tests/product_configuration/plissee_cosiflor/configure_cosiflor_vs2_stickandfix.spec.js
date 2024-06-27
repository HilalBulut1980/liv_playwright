import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS2 - Stick&Fix",
    "produkt": "/plissee/color-breeze-1360",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage vor dem Glas mit Stick & Fix - ohne Bohren",  //+20
    "system": "Cosiflor",
    "hoehe": "800",
    "breite": "700",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 96,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 20,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "register",
    "password": "Abcde_12345",
    "prefix": "geschaeftskunde",
    "company_name": "Test1 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 58",
    "postal_code": "1235",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "014814",
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

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 