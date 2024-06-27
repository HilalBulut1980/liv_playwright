import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS6 - direkt",
    "produkt": "Darken 1574",
    "ab_preis": "88,00", //PG3
    "ab_preis_red": "48,40",  //-45%
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS6 SD",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "breite_oben": "420",
    "breite_unten": "720",
    "gesamthoehe": "900",
    "teilhoehe": "700",
    "schienenfarbe": "Silber",

    "anzahl": 2,
    "grundpreis": 387,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 31,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test7 GmbH",
    "prefix_business": "Frau",
    "first_name": "Lena",
    "last_name": "Taratora",
    "email": "lena@delphinus-test.de",
    "street": "Upper street 98",
    "postal_code": "96587",
    "city": "Amsterdam",
    "state": "Niederlande",
    "phone": "1743189",
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