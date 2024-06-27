import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS3SD - Winkel",
    "produkt": "Fiora 1724",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45%
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1100",
    "breite": "1000",
    "unterer_Stoff": "Vivid Blackout 1495",  //PG 2 R16 50%
    "schienenfarbe": "Bronze",

    "anzahl": 3,
    "grundpreis": 188,
    "grundpreis_2": 188,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0.50,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Claudia",
    "last_name": "Schäfer",
    "email": "claudia@delphinus-test.de",
    "street": "Hornbachweg 99",
    "postal_code": "1110",
    "city": "Wien",
    "state": "Österreich",
    "phone": "",
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
    await new_Plissee.startFromConfigurator(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 