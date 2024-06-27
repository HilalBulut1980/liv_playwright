import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS1 - Cosiflor - Designgriff",
    "produkt": "Darken 1746",
    "ab_preis": "88,00", //PG3
    "ab_preis_red": "48,40",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",  //+16,50
    "system": "Cosiflor",
    "hoehe": "1800",
    "breite": "1000",
    "bediengriff": "Design",  //+8,50
    "bedienstab": "Länge 125cm",  //+44
    "schienenfarbe": "Bronze",

    "anzahl": 2,
    "grundpreis": 294,
    "grundpreis_2": 0,
    "bediengriff_preis": 8.50, 
    "bedienstab_preis": 44,  
    "zusatz_preis": 16.50,  
    "discount": 0.55,
    "discount_2": 0,
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
    "street": "Lange Reihe 57",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 57",
    "postal_code2": "1235",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "123456",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromConfigurator(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 