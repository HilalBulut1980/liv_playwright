import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig.-DF30C-Cosiflor-genormt_wabe",
    "produkt": "/plissee/dream-black-out-2248",
    "ab_preis": "96,00", //PG 4 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "52,80",  // R1 -45%
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Genormt", //Preiskalkulation bei genormt LIV wie ungenormt LIV!! Preis nach Maßen in Preistabelle raussuchen
    "unterer_Stoff": "Wabe Uni 1515",  // PG3 1013x981 --> 393,00 R16 -55%
    "df_hersteller": "Fakro",
    "df_produkt": "FTP-V",
    "df_typ": "114 / 118 | Holz",  // PG4 1013x981 --> 476,00 R1 -45%
    "schienenfarbe": "Grau",

    "anzahl": 1,
    "grundpreis": 393,
    "grundpreis_2": 476,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.45,
    "discount_2": 0.55,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Manuel",
    "last_name": "Henning",
    "email": "manu@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "22043",
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