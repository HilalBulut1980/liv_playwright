import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS3 - Cosiflor - Mix",
    "produkt": "/plissee/duale-blackout-1425",
    "ab_preis": "96,00", //PG 4
    "ab_preis_red": "43,20",  //-55% Regel 16
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "1500", //--> PG4 Regel 16 -55% --> 424,00 -55% = 190,80
    "unterer_Stoff": "Luminous 1456",  //PG 1 Regel 1 -45% --> 260,00 -45% = 143,00
    "bediengriff": "Design",  // +17
    "bedienstab": "Länge 150cm",//+45
    "schienenfarbe": "Weiß",

    "anzahl": 1,
    "grundpreis": 424,
    "grundpreis_2": 260,
    "bediengriff_preis": 17, 
    "bedienstab_preis": 45,  
    "zusatz_preis": 0,  
    "discount": 0.45,
    "discount_2": 0.55,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Thomas",
    "last_name": "Quinny",
    "email": "tommy@delphinus-test.de",
    "street": "Lange Reihe 44",
    "postal_code": "20095",
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