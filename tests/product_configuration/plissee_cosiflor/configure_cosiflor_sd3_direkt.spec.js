import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - SD3 - direkt",
    "produkt": "/plissee/fibre-1482",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "SD3",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "1400",
    "schienenfarbe": "Anthrazit",

    "anzahl": 2,
    "grundpreis": 577,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 124,
    "mwst_1": 24,
    "versandkosten": 20.84,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Ragno",
    "last_name": "Vilden",
    "email": "ragnar@delphinus-test.de",
    "street": "Downstreet 50",
    "postal_code": "3658",
    "city": "Helsinki",
    "state": "Finnland",
    "phone": "6699854",
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