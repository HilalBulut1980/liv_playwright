import { test } from 'playwright/test'
import { Raffrollo } from '../../support/configurator_raffrollo'

const testcase = {
    "name": "LIVConfig. - Raffrollo - Montage_Decke_DE",
    "produkt": "Cocco 9010",
    "ab_preis": "312,00", //PGA
    "ab_preis_red": "140,40",  //-Rabatt 55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage an der Decke",
    "hoehe": "150",
    "breite": "120",
    "art_kette": "PVC",
    "farbe_kette": "transparent",
    "bedienseite": "rechts",

    "anzahl": 3,
    "grundpreis": 509,
    "ketten_preis": 0, 
    "befestigung_preis": 0, 
    "discount": 0.45,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, 

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Pablo",
    "last_name": "Sitare",
    "email": "pablo@example.com",
    "street": "Heinweg 89",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123459",
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

    const new_Raffrollo = new Raffrollo(page)
    await new_Raffrollo.startFromConfigurator(testcase)
    await new_Raffrollo.configureRaffrollo(testcase)

}) 