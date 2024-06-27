import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig.-DF30C-Cosiflor-genormt_wabe",
    "produkt": "/plissee/ambience-1355",
    "ab_preis": "55,00", //PG 0 --> Sonderfall PG0 --> LIV-4116 Preis auf Produktseite (günstigstes Modell - siehe LIV-VS1-Tabelle Zeile 44-50)
    "ab_preis_red": "17,50",  // R6 50%, R40 -10,00eur --> 55/2-10eur = 17,50
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Genormt", //Preiskalkulation bei genormt LIV wie ungenormt LIV!! Preis nach Maßen in Preistabelle raussuchen
    "unterer_Stoff": "Wabe Bella 2077",  // PG4 1013x981 --> 1100x1000 --> WABE --> 476 R1 -45%
    "df_hersteller": "Fakro",
    "df_produkt": "FTP-V",
    "df_typ": "114 / 118 | Holz",  // PG0 (Ambience-1355) --> NON-WABE --> 1013x981 --> 249,00 R6 50%
    "schienenfarbe": "Grau",

    "anzahl": 2,
    "grundpreis": 476,
    "grundpreis_2": 249,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0, 
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0.50,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Reinhard",
    "last_name": "Ossenbrügge",
    "email": "reini@delphinus-test.de",
    "street": "Lange Reihe 99",
    "postal_code": "20095",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "1120974",
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