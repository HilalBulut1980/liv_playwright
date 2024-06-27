import { test } from 'playwright/test'
import { Gutschein } from '../../support/configurator_gutschein'

const testcase = {
    "name": "LIVConfig.-Gutschein_Email_EU",
    "produkt": "/geschenkgutschein",
    "system": "Gutschein",
    "modell": "Email",
    "beschenkter": "Liana",
    "strasse": "",
    "betrag": "500",
    "plz": "",
    "nachricht": "Alles Gute zur Silberhochzeit!",
    "stadt": "",

    "anzahl": 2,
    "grundpreis": 500,  
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 0,  

    "login": "register",
    "password": "testpassw9",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Svetlana",
    "last_name": "Kühlheim",
    "email": "svetlana@delphinus-test.de",
    "street": "Teststreet 99",
    "postal_code": "12345",
    "city": "Sofia",
    "state": "Bulgarien",
    "phone": "",
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