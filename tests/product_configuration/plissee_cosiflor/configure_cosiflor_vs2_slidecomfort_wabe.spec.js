import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS2 SC - Wabe",
    "produkt": "Wabe Uni 1515",
    "ab_preis": "88,00", //PG3
    "ab_preis_red": "39,60",  //-55% Regel 16
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2 Slide Comfort",
    "system": "Cosiflor",
    "hoehe": "2200",
    "breite": "1500",
    "schienenfarbe": "Anthrazit",

    "anzahl": 2,
    "grundpreis": 922,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.45,
    "discount_2": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Marco",
    "last_name": "Frank",
    "email": "marco@delphinus-test.de",
    "street": "Brunnenweg 99",
    "postal_code": "2255",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "291354",
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