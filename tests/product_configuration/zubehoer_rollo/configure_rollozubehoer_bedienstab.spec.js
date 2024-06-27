import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Rollo-Zubehör - Bedienstab",
    "produkt": "/bedienstab-rollo-dachfenster",
    "supplier": "Anwis",
    "option_1": "150 cm +22,00 €",
    "system": "Zubehör",

    "anzahl": 1,
    "grundpreis": 56,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Tobias",
    "last_name": "Schmidt",
    "email": "tobi@delphinus-test.de",
    "street": "Lugeck 10",
    "postal_code": "22043",
    "city": "Kiel",
    "state": "Deutschland",
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