import { test } from 'playwright/test'
import { Raffrollo } from '../../support/configurator_raffrollo'

const testcase = {
    "name": "LIVConfig. - Raffrollo - Montage_Fensterflügel_CH",
    "produkt": "/raffrollo/tregua-9060",
    "ab_preis": "340,00", //PGB
    "ab_preis_red": "153,00",  //-Rabatt -55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage am Fensterflügel mit Klemmträger",  // 3 Klemmträger bei Breite 1300 --> 27,00
    "hoehe": "110",
    "breite": "130",
    "art_kette": "PVC",
    "farbe_kette": "grau",
    "bedienseite": "rechts",

    "anzahl": 1,
    "grundpreis": 588,
    "ketten_preis": 0, 
    "befestigung_preis": 27, 
    "discount": 0.45,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90, 

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Susana",
    "last_name": "Triada",
    "email": "susy@delphinus-test.de",
    "street": "Via Arezzo 33",
    "postal_code": "1235",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "52148",
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
    await new_Raffrollo.startFromProductPage(testcase)
    await new_Raffrollo.configureRaffrollo(testcase)

}) 