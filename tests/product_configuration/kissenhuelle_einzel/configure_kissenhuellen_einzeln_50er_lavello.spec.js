import { test } from 'playwright/test'
import { Kissenhuelle } from '../../support/configurator_kissenhuelle_einzel'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_einzeln_Lavello",
    "produkt": "/kissenhuelle/lavello",
    "ab_preis": "25,50",
    "ab_preis_red": "15,30", // R 42: -40%
    "supplier": "VHG",
    "system": "Kissenhuelle_einzeln",
    "farbe": "Weiß",
    "groesse": "2er Set 50x50cm",

    "anzahl": 4,
    "grundpreis": 33.50, 
    "discount": 0.6,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Kaan",
    "last_name": "Hruby",
    "email": "kaan@delphinus-test.de",
    "street": "Lindenweg 99",
    "postal_code": "12043",
    "city": "Berlin",
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

    const new_Kissenhuelle = new Kissenhuelle(page)
    await new_Kissenhuelle.configureKissenhuelle_single(testcase)

}) 