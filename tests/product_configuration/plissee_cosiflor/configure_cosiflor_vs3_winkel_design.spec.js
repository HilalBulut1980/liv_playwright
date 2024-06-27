import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS3 - Cosiflor - Designgriff",
    "produkt": "/plissee/gate-perlex-2005",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "1500",
    "unterer_Stoff": "Fibre 1481",  //PG 2
    "bediengriff": "Design",  // +17
    "bedienstab": "Länge 150cm",//+45
    "schienenfarbe": "Weiß",

    "anzahl": 1,
    "grundpreis": 219,
    "grundpreis_2": 328,
    "bediengriff_preis": 17, 
    "bedienstab_preis": 45,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0.55,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 59",
    "postal_code": "20101",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "123458",
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