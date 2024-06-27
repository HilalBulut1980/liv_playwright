import { test } from 'playwright/test'
import { Schiebegardine_einzel } from '../../support/configurator_schiebegardine_einzel'

const testcase = {
    "name": "LIVConfig.-Schiebegardine_einzel_Piara-7279",
    "produkt": "Piara 7279", //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "23,10", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Einzelne Paneele",
    "stoff": "Piara-7279",
    "hoehe": "2500",
    "breite": "1000", // --> 2500x1000 = 104,00
    "paneelwagen": "ja", // +50,00
    "endstab": "Beschwerungsstab", // +7,00
    "endstab_pw_farbe": "silber", 

    "anzahl": 2,
    "grundpreis": 104,  //PG 1
    "pw_preis": 44,  // R
    "endstab_preis": 7, // R
    "discount": 0.7,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,   
    
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Celine",
    "last_name": "Ruby",
    "email": "celine@delphinus-test.de",
    "street": "Rue de Jardin 55",
    "postal_code": "12365",
    "city": "Paris",
    "state": "Frankreich",
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