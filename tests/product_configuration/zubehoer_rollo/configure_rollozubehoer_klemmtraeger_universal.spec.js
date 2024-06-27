import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Rollo-Zubehör - Klemmtraeger universal",
    "produkt": "/klemmtraeger-a-rm18",
    "supplier": "Anwis",
    "option_1": "4 Klemmträger +4,50 €",
    "system": "Zubehör",

    "anzahl": 4,
    "grundpreis": 8.50,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Mustafa",
    "last_name": "Cetin",
    "email": "musti@delphinus-test.de",
    "street": "Auenallee 56",
    "postal_code": "1234",
    "city": "Genf",
    "state": "Schweiz",
    "phone": "4422",
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

    const new_Zubehoer = new Zubehoer(page)
    await new_Zubehoer.configureZubehoer(testcase)

}) 