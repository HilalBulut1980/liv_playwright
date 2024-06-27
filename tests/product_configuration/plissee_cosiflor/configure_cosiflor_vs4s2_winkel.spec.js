import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - vs4 s2- Winkel",
    "produkt": "/plissee/armonico-1726",
    "ab_preis": "75,00", //PG1
    "ab_preis_red": "41,25",  //-45% Regel 1 
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS4 S2",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "breite": "900",
    "hoehe_links": "1200",
    "hoehe_rechts": "900",
    "ausrichtung": "links",
    "schienenfarbe": "Schwarz-Braun",

    "anzahl": 3,
    "grundpreis": 309,
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
    "first_name": "Marcel",
    "last_name": "Eilek",
    "email": "marcel@delphinus-test.de",
    "street": "Wiedenbrück 99",
    "postal_code": "20534",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "265847",
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