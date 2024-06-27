import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS2 SC",
    "produkt": "Vivid Blackout 1493",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "42,00",  //-50% Regel 6
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2 Slide Comfort",
    "system": "Cosiflor",
    "hoehe": "2000",
    "breite": "1200",
    "schienenfarbe": "Grau",
    "bedienstab": "Länge 150cm",  //+45

    "anzahl": 2,
    "grundpreis": 553,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 45,  
    "zusatz_preis": 0,  
    "discount": 0.50,
    "discount_2": 0,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Francesco",
    "last_name": "Brambilla",
    "email": "franco@delphinus-test.de",
    "street": "Via Dei Condotti 100",
    "postal_code": "4321",
    "city": "Milano",
    "state": "Italien",
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