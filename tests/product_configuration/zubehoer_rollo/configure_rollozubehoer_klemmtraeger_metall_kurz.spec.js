import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Rollo-Zubehör - Klemmtraeger Metall kurz",
    "produkt": "/klemmtraeger-b-rm18",
    "supplier": "Anwis",
    "option_1": "4 Klemmträger +4,50 €",
    "system": "Zubehör",

    "anzahl": 3,
    "grundpreis": 8.50,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Denise",
    "last_name": "Kendry",
    "email": "denise@delphinus-test.de",
    "street": "Troststra. 23",
    "postal_code": "4256",
    "city": "Ljubljana",
    "state": "Slowenien",
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