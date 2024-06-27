import { test } from 'playwright/test'
import { Kissenhuelle } from '../../support/configurator_kissenhuelle_einzel'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_einzeln_Scorda",
    "produkt": "/kissenhuelle/scorda",
    "ab_preis": "38,50",
    "ab_preis_red": "23,10", // R 42: -40%
    "supplier": "VHG",
    "system": "Kissenhuelle_einzeln",
    "farbe": "Petrol",
    "groesse": "Stück 50x50cm",

    "anzahl": 4,
    "grundpreis": 38.50, 
    "discount": 0.6,
    "vat": 123,
    "mwst_1": 23,
    "versandkosten": 20.68,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Sergio",
    "last_name": "Fernandez",
    "email": "sergio@delphinus-test.de",
    "street": "Via de la Playa 56",
    "postal_code": "1234",
    "city": "Lissabon",
    "state": "Portugal",
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