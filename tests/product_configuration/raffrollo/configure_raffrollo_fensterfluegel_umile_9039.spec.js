import { test } from 'playwright/test'
import { Raffrollo } from '../../support/configurator_raffrollo'

const testcase = {
    "name": "LIVConfig. - Raffrollo - Montage_Fensterflügel_EU",
    "produkt": "/raffrollo/umile-9039",
    "ab_preis": "340,00", //PGB
    "ab_preis_red": "153,00",  //-Rabatt 55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage am Fensterflügel",
    "hoehe": "180",
    "breite": "140",
    "art_kette": "PVC",
    "farbe_kette": "transparent",
    "bedienseite": "rechts",

    "anzahl": 4,
    "grundpreis": 613,
    "ketten_preis": 0, 
    "befestigung_preis": 0, 
    "discount": 0.45,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51, 

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Ralf",
    "last_name": "Lehmann",
    "email": "ralf@delphinus-test.de",
    "street": "Bruggen 89",
    "postal_code": "22043",
    "city": "Bremen",
    "state": "Deutschland",
    "phone": "123459",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Ivana",
    "last_name2": "Sert",
    "street2": "Via Piero Agostini	",
    "postal_code2": "5214",
    "city2": "Bozen",
    "state2": "Italien",
    "phone2": "12345",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Raffrollo = new Raffrollo(page)
    await new_Raffrollo.startFromProductPage(testcase)
    await new_Raffrollo.configureRaffrollo(testcase)

}) 