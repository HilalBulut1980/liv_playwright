import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - Rabattcode_Plissee",
    "produkt": "Freja 1772",
    "ab_preis": "75,00", //PG1
    "ab_preis_red": "41,25",  //-45%
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage am Fensterflügel mit Glasleistenwinkeln", //+16,50
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "800",
    "schienenfarbe": "Weiß",

    "rabatt_code": "LIV-TEST-5P",  //5%
    "rabatt_faktor_a": 5,  
    "rabatt_faktor_b": 95,  

    "anzahl": 2,
    "grundpreis": 124,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
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
    "first_name": "Henry",
    "last_name": "Lindenburg",
    "email": "henry@delphinus-test.de",
    "street": "Lange Reihe 59",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "153084",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 59",
    "postal_code2": "1235",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "153084",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    await page.goto('/scripts/coupons/create.php');

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromConfigurator(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 