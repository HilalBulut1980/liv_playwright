import { test } from 'playwright/test'
import { Gutschein } from '../../support/configurator_gutschein'

const testcase = {
    "name": "LIVConfig.-Gutschein_Post_CH",
    "produkt": "/geschenkgutschein",
    "system": "Gutschein",
    "modell": "Post",
    "beschenkter": "Lara Feld",
    "strasse": "Mittelstr. 3",
    "betrag": "100",
    "plz": "12345",
    "nachricht": "Zum Eigenheim alles Gute!",
    "stadt": "Basel",

    "anzahl": 2,
    "grundpreis": 105,  
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 0,  

    "login": "register",
    "password": "testpassw8",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Markus",
    "last_name": "Meyer",
    "email": "markus@delphinus-test.de",
    "street": "Lange Reihe 57",
    "postal_code": "20099",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123456",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maya",
    "last_name2": "Hinrichsen",
    "street2": "Wunschallee 10",
    "postal_code2": "1478",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "12345",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Gutschein = new Gutschein(page)
    await new_Gutschein.configureGutschein(testcase)

}) 