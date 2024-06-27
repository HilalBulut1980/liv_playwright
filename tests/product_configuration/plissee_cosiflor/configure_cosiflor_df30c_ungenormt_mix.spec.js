import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig.-DF30C-Cosiflor-ungenormt_mix",
    "produkt": "/plissee/wabe-lux-2237",
    "ab_preis": "88,00", //PG3 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "48,40",  // R1 -45%
    "supplier": "VHG",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Blackout Color 1556",  //PG 3 --> NON-WABE --> 1500 x 1100 = 412,00  --> R1 -45% = 226,60
    "df_glasbreite": "900",
    "df_glashoehe": "1400",
    "df_falztiefe": "33",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "1500",  //PG 3 (wabe-lux-2237) --> WABE --> 1500 x 1100 = 515,00  --> R1 -45% = 283,25
    "df_falzart": "Schräger Falz mit Aufsatz vor Glas",
    "schienenfarbe": "Grau",

    "anzahl": 2,
    "grundpreis": 515,
    "grundpreis_2": 412,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0.55,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test6 GmbH",
    "prefix_business": "Herr",
    "first_name": "Kenny",
    "last_name": "Ludwigsen",
    "email": "kenny@delphinus-test.de",
    "street": "Lange Reihe 57",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1397514",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Lena",
    "last_name2": "Tranich",
    "street2": "Lange Reihe 62",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "1397514",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 