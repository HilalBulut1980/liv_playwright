import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig.-DF20C-Cosiflor-ungenormt",
    "produkt": "/plissee/lumina-1696",
    "ab_preis": "84,00", //PG2 --> Preis auf Produktseite (günstigstes Modell )
    "ab_preis_red": "46,20",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF20 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "df_glasbreite": "900",
    "df_glashoehe": "1400",
    "df_falztiefe": "33",
    "df_fluegelbreite": "1100",
    "df_fluegelhoehe": "1500",  //1500 x 1100
    "df_falzart": "Schräger Falz mit Aufsatz vor Glas",
    "schienenfarbe": "Grau",

    "anzahl": 2,
    "grundpreis": 390,
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
    "first_name": "Moritz",
    "last_name": "Lübbe",
    "email": "luebbe@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1397514",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Eva",
    "last_name2": "Niemand",
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