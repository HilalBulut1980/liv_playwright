import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Rollo-Zubehör - Klemmtraeger Metall lang",
    "produkt": "/klemmtraeger-c-rm18",
    "supplier": "Anwis",
    "option_1": "3 Klemmträger +3,00 €",
    "system": "Zubehör",

    "anzahl": 2,
    "grundpreis": 7,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Ananta",
    "last_name": "Cham",
    "email": "anty@delphinus-test.de",
    "street": "Probststraße",
    "postal_code": "1100",
    "city": "Wien",
    "state": "Österreich",
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

    const new_Zubehoer = new Zubehoer(page)
    await new_Zubehoer.configureZubehoer(testcase)

}) 
