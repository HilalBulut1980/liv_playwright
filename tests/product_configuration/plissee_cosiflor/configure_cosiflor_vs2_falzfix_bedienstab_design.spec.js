import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS2 - Cosiflor - Falzfix Designgriff",
    "produkt": "/plissee/freja-perl-1787",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45%
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage vor dem Glas mit Falzfix - ohne Bohren",  //+16,50
    "system": "Cosiflor",
    "hoehe": "2200",
    "breite": "1200",
    "bediengriff": "Design",  //+17
    "bedienstab": "Länge 200cm",  //+52
    "kosten_bedienstab": "",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 366,
    "grundpreis_2": 0,
    "bediengriff_preis": 17, 
    "bedienstab_preis": 52, 
    "zusatz_preis": 16.50,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 58",
    "postal_code": "20100",
    "city": "Wien",
    "state": "Österreich",
    "phone": "123457",
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