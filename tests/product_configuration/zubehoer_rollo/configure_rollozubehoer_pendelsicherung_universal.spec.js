import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Rollo-Zubehör - Pendelsicherung universal",
    "produkt": "/seitenfuehrung-a-rm18",
    "supplier": "Anwis",
    "option_1": "3 Pendelsicherungen +3,00 €",
    "system": "Zubehör",

    "anzahl": 4,
    "grundpreis": 7,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Jana",
    "last_name": "Triebel",
    "email": "jana@delphinus-test.de",
    "street": "Treustraße 10",
    "postal_code": "1234",
    "city": "Bratislava",
    "state": "Slowakei",
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