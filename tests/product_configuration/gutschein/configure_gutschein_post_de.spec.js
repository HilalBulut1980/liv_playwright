import { test } from 'playwright/test'
import { Gutschein } from '../../support/configurator_gutschein'

const testcase = {
    "name": "LIVConfig.-Gutschein_Post_DE",
    "produkt": "/geschenkgutschein",
    "system": "Gutschein",
    "modell": "Post",
    "beschenkter": "Maik Maier",
    "strasse": "Lange Reihe 1",
    "betrag": "25",
    "plz": "12345",
    "nachricht": "Hi Markus, dieser Gutschein ist für Dich!",
    "stadt": "Hamburg",

    "anzahl": 4,
    "grundpreis": 30,  
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,  
   
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Helene",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "227668",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1110",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Markus",
    "last_name2": "Meyer",
    "street2": "Lange Reihe 1",
    "postal_code2": "20099",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "123456",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Gutschein = new Gutschein(page)
    await new_Gutschein.configureGutschein(testcase)

}) 