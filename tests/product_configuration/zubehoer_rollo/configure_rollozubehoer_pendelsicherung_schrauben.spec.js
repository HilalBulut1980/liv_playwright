import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Rollo-Zubehör - Pendelsicherung zum Schrauben",
    "produkt": "/seitenfuehrung-c-rm18",
    "supplier": "Anwis",
    "option_1": "4 Pendelsicherungen +4,50 €",
    "system": "Zubehör",

    "anzahl": 2,
    "grundpreis": 8.50,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Heidi",
    "last_name": "Berg",
    "email": "heidi@delphinus-test.de",
    "street": "Mariahilferstr. 10",
    "postal_code": "78654",
    "city": "Salzburg",
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
