import { test } from 'playwright/test'
import { Schiebegardine_einzel } from '../../support/configurator_schiebegardine_einzel'

const testcase = {
    "name": "LIVConfig.-Schiebegardine_einzel_Bosna-7290",
    "produkt": "Bosna 7290", //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "30,10", // --> 30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "stoff": "Bosna-7290",
    "hoehe": "1500",
    "breite": "700", // --> 1500x700 = 84,00
    "paneelwagen": "ja", // +30,00
    "endstab": "Beschwerungsstab", // +4,00
    "endstab_pw_farbe": "silber", 

    "anzahl": 1,
    "grundpreis": 84,  //PG 3
    "pw_preis": 30,  // R
    "endstab_preis": 4, // R
    "discount": 0.7,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,  
   
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lena",
    "last_name": "Lehrte",
    "email": "leny@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "227668",
    "city": "Wien",
    "state": "Österreich",
    "phone": "775299",
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