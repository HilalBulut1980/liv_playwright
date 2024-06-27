import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS2 - Slim",
    "produkt": "Pure 1665",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage am Fensterflügel ohne Bohren mit Klemmträgern Slim",  //+20 (alt 18,00)
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "900",
    "schienenfarbe": "Silber",

    "anzahl": 1,
    "grundpreis": 124,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 20,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.50,

    "login": "register",
    "password": "Abcde_12345",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test1@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "94255",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "291354",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "94255",
    "city2": "Rom",
    "state2": "Italien",
    "phone2": "291354",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromConfigurator(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 