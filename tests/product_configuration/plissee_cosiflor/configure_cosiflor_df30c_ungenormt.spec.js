import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig.-DF30C-Cosiflor-ungenormt",
    "produkt": "/plissee/lunara-1689",
    "ab_preis": "84,00", //PG2 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "46,20",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Ruvido 1928",  //PG 1 --> 1500 x 1100 = 352   R1 -45%
    "df_glasbreite": "900",
    "df_glashoehe": "1400",
    "df_falztiefe": "33",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "1500",  //PG 2 --> 1500 x 1100 = 390    R1 -45%
    "df_falzart": "Schräger Falz mit Aufsatz vor Glas",
    "schienenfarbe": "Grau",

    "anzahl": 2,
    "grundpreis": 390,
    "grundpreis_2": 352,
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
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1397514",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
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