import { test } from 'playwright/test'
import { Zubehoer_Vorhang } from '../../support/configurator_zubehoer_vorhang'

const testcase = {
    "name": "LIVConfig. - Vorhangzubehör - Stange_Lugano",
    "produkt": "/gardinenstangen/lugano",
    "farbe": "Holz",
    "system": "Zubehör_V",
    "breite": "120",

    "anzahl": 1,
    "grundpreis": 13.99,
    "discount": 0.85,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "register",
    "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria3@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "303904",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1051839",
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

    const new_Zubehoer_Vorhang = new Zubehoer_Vorhang(page)
    await new_Zubehoer_Vorhang.configureZubehoer_Vorhang(testcase)

}) 
