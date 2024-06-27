import { test } from 'playwright/test'
import { Zubehoer } from '../../support/configurator_zubehoer'

const testcase = {
    "name": "LIVConfig. - Plisseezubehör - Klemmträger",
    "produkt": "/klemmtraeger",
    "supplier": "VHG",
    "option_2": "schwarzbraun",
    "option_3": "Klemmträger für Halteclip",
    "option_1": "3 Klemmträger +7,00 €",
    "system": "Zubehör",

    "anzahl": 1,
    "grundpreis": 14.50,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "register",
    "password": "testpassw7",
    "prefix": "geschaeftskunde",
    "company_name": "Test5 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test4@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1120974",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 62",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "1120974",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Zubehoer = new Zubehoer(page)
    await new_Zubehoer.configureZubehoer(testcase)

}) 