import { test } from 'playwright/test'
import { Gutschein } from '../../support/configurator_gutschein'

const testcase = {
    "name": "LIVConfig. - Rabattcode_Gutschein",
    "produkt": "/geschenkgutschein",
    "system": "Gutschein",
    "modell": "Email",
    "beschenkter": "Henry",
    "strasse": "",
    "betrag": "50",
    "plz": "",
    "nachricht": "Hallo Henry, Happy Birthday!",
    "stadt": "",

    "rabatt_code": "LIV-TEST-7K5P",  //7.5%
    "rabatt_faktor_a": 7.5,  
    "rabatt_faktor_b": 92.5,  

    "anzahl": 1,
    "grundpreis": 50,  
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 0,  

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Magdalena",
    "last_name": "Cosic",
    "email": "magdalena@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "1234",
    "city": "Linz",
    "state": "Österreich",
    "phone": "775300",
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

    const new_Gutschein = new Gutschein(page)
    await new_Gutschein.configureGutschein(testcase)

}) 