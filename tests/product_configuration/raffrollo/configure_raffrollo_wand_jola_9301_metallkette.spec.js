import { test } from 'playwright/test'
import { Raffrollo } from '../../support/configurator_raffrollo'

const testcase = {
    "name": "LIVConfig. - Raffrollo - Montage_Wand_AT",
    "produkt": "Jola 9301",
    "ab_preis": "420,00", //PGE
    "ab_preis_red": "189,00",  //-Rabatt 55%
    "supplier": "Anwis",
    "system": "Raffrollo",
    "befestigung": "Montage an der Wand",
    "hoehe": "290",
    "breite": "299",
    "art_kette": "Metall",  //+21
    "bedienseite": "rechts",

    "anzahl": 3,
    "grundpreis": 1489,
    "ketten_preis": 21, 
    "befestigung_preis": 0, 
    "discount": 0.45,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 70.58, // 70/119*120 --> eigentlich 70.59

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Michaela",
    "last_name": "Seeberg",
    "email": "michi@delphinus-test.de",
    "street": "Alter Kapmweg 60",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123459",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Murat",
    "last_name2": "Boz",
    "street2": "Simmeringer Hauptstr. 111",
    "postal_code2": "1110",
    "city2": "Wien",
    "state2": "Österreich",
    "phone2": "123459",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Raffrollo = new Raffrollo(page)
    await new_Raffrollo.startFromConfigurator(testcase)
    await new_Raffrollo.configureRaffrollo(testcase)

}) 