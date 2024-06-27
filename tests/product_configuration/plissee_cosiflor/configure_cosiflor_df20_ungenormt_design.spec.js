import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - DF20 ungenormt - Cosiflor - Designgriff",
    "produkt": "/plissee/lagana-blackout-1917",
    "ab_preis": "88,00", //PG3 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "48,40",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "1500",
    "df_glashoehe": "1500",
    "df_falztiefe": "50",
    "df_fluegelbreite": "1500",
    "df_fluegelhoehe": "1500",  //1500 x 1500
    "bediengriff": "Design",  //+17
    "bedienstab": "Länge 250cm",  //+56,50
    "schienenfarbe": "Weiß",

    "anzahl": 3,
    "grundpreis": 449,
    "grundpreis_2": 0,
    "bediengriff_preis": 17, 
    "bedienstab_preis": 56.50,  
    "zusatz_preis": 0,  
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
    "first_name": "Hannes",
    "last_name": "Lauterbach",
    "email": "hannes@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123459",
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