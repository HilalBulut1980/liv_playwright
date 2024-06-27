import { test } from 'playwright/test'
import { Schiebegardine_einzel } from '../../support/configurator_schiebegardine_einzel'

const testcase = {
    "name": "LIVConfig.-Schiebegardine_einzel_Lokela-7303",
    "produkt": "Lokela 7303", //PG 2
    "ab_preis": "36,00",// Startpreis aus Preistabelle 36,00
    "ab_preis_red": "25,20", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "stoff": "Lokela-7303",
    "hoehe": "1800",
    "breite": "1200", // --> 1800x1200 = 115,00
    "paneelwagen": "ja", // +53,00
    "endstab": "ohne Endstab", 
    "endstab_pw_farbe": "silber", 
    
    "anzahl": 3,
    "grundpreis": 115,  //PG 1
    "pw_preis": 53,  // R
    "endstab_preis": 0, // R
    "discount": 0.7,
    "vat": 117,
    "mwst_1": 17,
    "versandkosten": 19.67,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Diana",
    "last_name": "Krulsky",
    "email": "diana@delphinus-test.de",
    "street": "Testing Street 55",
    "postal_code": "1234",
    "city": "Luxemburg",
    "state": "Luxemburg",
    "phone": "852147",
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

    const new_Schiebegardine_einzel = new Schiebegardine_einzel(page)
    await new_Schiebegardine_einzel.startFromConfigurator(testcase)
    await new_Schiebegardine_einzel.configureSchiebegardineEinzel(testcase)

}) 