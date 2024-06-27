import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "Umsatzsteuer-Test: Fall 1 Schweiz - Gast",
    "produkt": "/plissee/lindura-1584",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1400",
    "breite": "700",
    "bediengriff": "Design",  // +17,00
    "bedienstab": "Länge 200cm",  //+52
    "schienenfarbe": "Silber",

    "anzahl": 2,
    "grundpreis": 120,
    "grundpreis_2": 0,
    "bediengriff_preis": 17, 
    "bedienstab_preis": 52,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "LaImporta GmbH",
    "prefix_business": "Herr",
    "first_name": "Marcello",
    "last_name": "Fiago",
    "email": "marcello@delphinus-test.de",
    "street": "Lange Reihe 58",
    "postal_code": "18019",
    "city": "Basel",
    "state": "Schweiz",
    "state_code": "CHE",
    "phone": "014814",
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

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 