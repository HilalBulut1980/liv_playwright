import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig.-DF20C-Cosiflor-genormt",
    "produkt": "/plissee/losanga-4281",
    "ab_preis": "75,00", //PG1 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "41,25",  //-45%
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Genormt", //Preiskalkulation bei genormt LIV wie ungenormt LIV!! Preis nach Maßen in Preistabelle raussuchen
    "df_hersteller": "Roto",
    "df_produkt": "SR",
    "df_typ": "10 / 12|Holz + Kunststoff",  //1062 x 863 --> 1100x900
    "schienenfarbe": "Grau",

    "anzahl": 1,
    "grundpreis": 259,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
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
    "first_name": "Heinz",
    "last_name": "Brügge",
    "email": "bro@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1120974",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Astrid",
    "last_name2": "Finken",
    "street2": "Lange Reihe 62",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "1120974",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 