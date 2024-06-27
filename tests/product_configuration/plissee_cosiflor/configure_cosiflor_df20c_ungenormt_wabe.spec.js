import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig.-DF20C-Cosiflor-ungenormt_Wabe",
    "produkt": "/plissee/wabe-calma-2152",
    "ab_preis": "96,00", //PG4 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "52,80",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "800",
    "df_glashoehe": "1100",
    "df_falztiefe": "50",
    "df_fluegelbreite": "800",
    "df_fluegelhoehe": "1100",  //1100 x 800
    "df_falzart": "Gerader Falz",
    "bedienstab": "Länge 200cm",  //+52
    "schienenfarbe": "Grau",

    "anzahl": 2,
    "grundpreis": 405,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 52,  
    "zusatz_preis": 0,  
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
    "first_name": "Ludwig",
    "last_name": "Hansen",
    "email": "ludy@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "475435",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1674054",
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