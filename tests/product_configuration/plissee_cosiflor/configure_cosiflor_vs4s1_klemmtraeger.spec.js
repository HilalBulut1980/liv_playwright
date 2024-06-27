import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS4S 1 - Klemmträger",
    "produkt": "/plissee/mussla-1476",
    "ab_preis": "88,00", //PG3
    "ab_preis_red": "48,40",  //-45% Regel 1 
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S1",
    "befestigung": "Montage am Fensterflügel mit Klemmträgern - ohne Bohren",  //+16,50
    "system": "Cosiflor",
    "breite": "880",
    "hoehe_links": "900",
    "hoehe_rechts": "1550",
    "ausrichtung": "rechts",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 433,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 16.50,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Rene",
    "last_name": "Herrmann",
    "email": "rene@delphinus-test.de",
    "street": "Schottentor 90",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1254789",
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