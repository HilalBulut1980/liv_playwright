import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - DF20 genormt - Cosiflor - Designgriff",
    "produkt": "/plissee/wabe-rimano-4392",
    "ab_preis": "88,00", //PG3 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "48,40",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20",
    "system": "Cosiflor",
    "df_switcher": "Genormt", //Preiskalkulation bei genormt LIV wie ungenormt LIV!! Preis nach Maßen in Preistabelle raussuchen
    "df_hersteller": "Fakro",
    "df_produkt": "FTP 3",
    "df_typ": "03 66 / 98 | Holz",  // 813 x 500 --> 900x500 --> 
    "bediengriff": "Design",  //+17
    "bedienstab": "Länge 200cm",  //+52
    "schienenfarbe": "Weiß",

    "anzahl": 2,
    "grundpreis": 184,
    "grundpreis_2": 0,
    "bediengriff_preis": 17,
    "bedienstab_preis": 52,
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
    "first_name": "Reinhard",
    "last_name": "Müller",
    "email": "reiny@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "20102",
    "city": "Madrid",
    "state": "Spanien",
    "phone": "123459",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Magdalena",
    "street2": "Lange Reihe 60",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "123459",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 