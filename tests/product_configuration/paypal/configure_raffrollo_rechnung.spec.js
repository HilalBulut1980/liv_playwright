import { test } from 'playwright/test'
import { Raffrollo } from '../../support/configurator_raffrollo'

const testcase = {
    "name": "LIVConfig. - Raffrollo - rechnung",
    "produkt": "/raffrollo/rettore-9091",
    "ab_preis": "354,00", //PGC
    "ab_preis_red": "159,30",  //-Rabatt 55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage an der Decke",
    "hoehe": "260",
    "breite": "210",
    "art_kette": "PVC",
    "farbe_kette": "weiß",
    "bedienseite": "rechts",

    "anzahl": 3,
    "grundpreis": 998,
    "ketten_preis": 0, 
    "befestigung_preis": 0, 
    "discount": 0.45,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0, 

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Marina",
    "last_name": "Lapanta",
    "email": "marry@delphinus-test.de",
    "street": "Feldweg 79",
    "postal_code": "12345",
    "city": "Berlin",
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
    "payment": "Rechnungskauf"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Raffrollo = new Raffrollo(page)
    await new_Raffrollo.startFromProductPage(testcase)
    await new_Raffrollo.configureRaffrollo(testcase)

}) 