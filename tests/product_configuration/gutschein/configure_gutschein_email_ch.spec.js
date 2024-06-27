import { test } from 'playwright/test'
import { Gutschein } from '../../support/configurator_gutschein'

const testcase = {
    "name": "LIVConfig.-Gutschein_Email_CH",
    "produkt": "/geschenkgutschein",
    "system": "Gutschein",
    "modell": "Email",
    "beschenkter": "Maya",
    "strasse": "",
    "betrag": "100",
    "plz": "",
    "nachricht": "Zum Eigenheim alles Gute!",
    "stadt": "",

    "anzahl": 3,
    "grundpreis": 100,  
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 0,  

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Markus",
    "last_name": "Meyer",
    "email": "markus@delphinus-test.de",
    "street": "Lange Reihe 57",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "123456",
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

    const new_Gutschein = new Gutschein(page)
    await new_Gutschein.configureGutschein(testcase)

}) 