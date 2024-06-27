import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - F5 - Winkel",
    "produkt": "/plissee/wabe-bella-2081",
    "ab_preis": "96,00", //PG4
    "ab_preis_red": "52,80",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F5",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "2400",
    "breite": "1300",
    "pendelsicherung": "ja",  //+31
    "schienenfarbe": "Anthrazit",

    "anzahl": 3,
    "grundpreis": 947,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0, 
    "zusatz_preis": 31,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "register",
    "password": "testpassw3",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Reinhard",
    "last_name": "Klinkel",
    "email": "reini@delphinus-test.de",
    "street": "Kobelgasse 7",
    "postal_code": "1011",
    "city": "Wien",
    "state": "Österreich",
    "phone": "123654",
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