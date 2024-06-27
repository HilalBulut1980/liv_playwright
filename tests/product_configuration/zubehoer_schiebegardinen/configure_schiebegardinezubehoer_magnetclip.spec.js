import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Schiebegardinenzubehör - Magnetclip",
    "produkt": "/schiebegardine-magnetclip",
    "supplier": "Gardinia",
    "system": "Zubehör",

    "anzahl": 10,
    "grundpreis": 3.99,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Sebastian",
    "last_name": "Henry",
    "email": "basti@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "913569",
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