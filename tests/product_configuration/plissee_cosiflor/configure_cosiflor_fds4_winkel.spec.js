import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - FDS4 - Winkel",
    "produkt": "/plissee/pescador-1884",
    "ab_preis": "88,00", //PG3
    "ab_preis_red": "48,40",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS4",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1000 ",
    "breite": "1000",
    "ausrichtung": "rechts",
    "schienenfarbe": "Silber",

    "anzahl": 1,
    "grundpreis": 364,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 123,
    "mwst_1": 23,
    "versandkosten": 20.68,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Milena",
    "last_name": "Gomez Filipe",
    "email": "milena@delphinus-test.de",
    "street": "Via del Paro 632/85",
    "postal_code": "2536",
    "city": "Lissabon",
    "state": "Portugal",
    "phone": "6359874",
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