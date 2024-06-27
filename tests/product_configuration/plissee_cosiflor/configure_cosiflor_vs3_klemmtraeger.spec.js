import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS3 - Klemmträger",
    "produkt": "Tara 1762",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45%
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",  //+16,50
    "system": "Cosiflor",
    "hoehe": "1050",
    "breite": "950",
    "unterer_Stoff": "Fibre 1483",  //PG 2
    "schienenfarbe": "Silber",

    "anzahl": 2,
    "grundpreis": 188,
    "grundpreis_2": 188,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 16.50,  
    "discount": 0.55,
    "discount_2": 0.55,
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
    await new_Plissee.startFromConfigurator(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 