import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - FK - direkt",
    "produkt": "/plissee/vivid-blackout-1503",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "42,00",  //-50%  
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "FK",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "2200",
    "breite": "1500",
    "pendelsicherung": "ja",  //+29
    "schienenfarbe": "Anthrazit",

    "anzahl": 3,
    "grundpreis": 538,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 29,  
    "discount": 0.50,
    "discount_2": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Mona",
    "last_name": "Ludwigsen",
    "email": "mona@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "78558219",
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