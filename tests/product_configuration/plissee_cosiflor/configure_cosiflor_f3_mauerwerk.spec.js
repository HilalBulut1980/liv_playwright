import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - F3 - Mauerwerk",
    "produkt": "/plissee/solea-1702",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F3",
    "befestigung": "Montage am Mauerwerk",
    "system": "Cosiflor",
    "hoehe": "1200",
    "breite": "1100",
    "pendelsicherung": "ja",  //+16
    "unterer_Stoff": "Fashion Perlex 1372", //PG 0
    "schienenfarbe": "Schwarz-Braun",

    "anzahl": 2,
    "grundpreis": 226,
    "grundpreis_2": 162,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 16,  
    "discount": 0.55,
    "discount_2": 0.50,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "register",
    "password": "testpassw3",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test3@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "2365",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "567894",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "567894",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 