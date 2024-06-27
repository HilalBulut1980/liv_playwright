import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Rollo-Zubehör - Pendelsicherung zum Klemmen",
    "produkt": "/seitenfuehrung-b-rm18",
    "supplier": "Anwis",
    "option_1": "3 Pendelsicherungen +3,00 €",
    "system": "Zubehör",

    "anzahl": 6,
    "grundpreis": 7,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Helene",
    "last_name": "Hofer",
    "email": "helene@delphinus-test.de",
    "street": "Jasogottwillgasse 10",
    "postal_code": "78654",
    "city": "Luzern",
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

    const new_Zubehoer = new Zubehoer(page)
    await new_Zubehoer.configureZubehoer(testcase)

}) 