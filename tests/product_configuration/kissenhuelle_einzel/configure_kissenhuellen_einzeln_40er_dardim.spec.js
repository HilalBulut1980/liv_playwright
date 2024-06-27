import { test } from 'playwright/test'
import { Kissenhuelle } from '../../support/configurator_kissenhuelle_einzel'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_einzeln_Dardim",
    "produkt": "/kissenhuelle/dardim",
    "ab_preis": "35,00",
    "ab_preis_red": "21,00", // R 42: -40%
    "supplier": "VHG",
    "system": "Kissenhuelle_einzeln",
    "farbe": "Anthrazit",
    "groesse": "Stück 40x40cm",

    "anzahl": 2,
    "grundpreis": 35, 
    "discount": 0.6,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lena",
    "last_name": "Heinrich",
    "email": "lena@delphinus-test.de",
    "street": "Konsolweg 85",
    "postal_code": "1234",
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

    const new_Kissenhuelle = new Kissenhuelle(page)
    await new_Kissenhuelle.configureKissenhuelle_single(testcase)

}) 