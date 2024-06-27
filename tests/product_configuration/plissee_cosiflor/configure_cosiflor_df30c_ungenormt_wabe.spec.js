import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig.-DF30C-Cosiflor-ungenormt_wabe",
    "produkt": "/plissee/wabe-farina-2095",
    "ab_preis": "88,00", //PG3 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "48,40",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Duale Blackout 1433",  //PG 4 --> 1500 x 1100 = 642,00 R16 -55%
    "df_glasbreite": "900",
    "df_glashoehe": "1400",
    "df_falztiefe": "33",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "1500",  //PG 3 --> 1500 x 1100 = 515,00 R1 -45%
    "df_falzart": "Schräger Falz mit Aufsatz vor Glas",
    "schienenfarbe": "Grau",

    "anzahl": 2,
    "grundpreis": 515,
    "grundpreis_2": 642,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0.45,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lena",
    "last_name": "Heinze",
    "email": "leny@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "22043",
    "city": "Dortmund",
    "state": "Deutschland",
    "phone": "1397514",
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