import { test } from 'playwright/test'
import { Raffrollo } from '../../support/configurator_raffrollo'

const testcase = {
    "name": "LIVConfig. - Rabattcode_Raffrollo",
    "produkt": "Corsia 9120",
    "ab_preis": "385,00", //PG D
    "ab_preis_red": "173,25",  //-Rabatt -55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage am Fensterflügel mit Klemmträger",  // 6 Klemmträger bei Breite 2700 --> 51,00€
    "hoehe": "280",
    "breite": "270",
    "art_kette": "PVC",
    "farbe_kette": "grau",
    "bedienseite": "rechts",
    
    "rabatt_code": "LIV-TEST-7K5P",  //7.5%
    "rabatt_faktor_a": 7.5,  
    "rabatt_faktor_b": 92.5,  

    "anzahl": 2,
    "grundpreis": 1252,
    "ketten_preis": 0, 
    "befestigung_preis": 54, 
    "discount": 0.45,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82, // 70/119*100

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Numan",
    "last_name": "Bulut",
    "email": "numan@delphinus-test.de",
    "street": "Via Ada Buffulini",
    "postal_code": "5214",
    "city": "Zürich",
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

    await page.goto('/scripts/coupons/create.php');

    const new_Raffrollo = new Raffrollo(page)
    await new_Raffrollo.startFromConfigurator(testcase)
    await new_Raffrollo.configureRaffrollo(testcase)

}) 