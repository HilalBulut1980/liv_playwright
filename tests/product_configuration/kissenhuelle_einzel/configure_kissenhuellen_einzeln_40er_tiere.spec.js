import { test } from 'playwright/test'
import { Kissenhuelle } from '../../support/configurator_kissenhuelle_einzel'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_einzeln_Tiere",
    "produkt": "/kissenhuelle/tiere",
    "ab_preis": "17,00",
    "ab_preis_red": "10,20", // R 42: -40%
    "supplier": "VHG",
    "system": "Kissenhuelle_einzeln",
    "farbe": "Weiß",
    "groesse": "Stück 40x40cm",

    "anzahl": 2,
    "grundpreis": 17, 
    "discount": 0.6,
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 21.02,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Jannick",
    "last_name": "Lordin",
    "email": "jannicko@delphinus-test.de",
    "street": "Teststreet 88",
    "postal_code": "5236",
    "city": "Stockholm",
    "state": "Schweden",
    "phone": "85247",
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