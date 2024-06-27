import { test } from 'playwright/test'
import { Kissenhuelle } from '../../support/configurator_kissenhuelle_einzel'

const testcase = {
    "name": "LIVConfig. - Kissenhuellen_einzeln_Partita",
    "produkt": "/kissenhuelle/partita",
    "ab_preis": "35,00",
    "ab_preis_red": "21,00", // R 42: -40%
    "supplier": "VHG",
    "system": "Kissenhuelle_einzeln",
    "farbe": "Lavendel",
    "groesse": "Stück 40x40cm",

    "anzahl": 3,
    "grundpreis": 35, 
    "discount": 0.6,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Rosalane",
    "last_name": "Cortez",
    "email": "rosa@delphinus-test.de",
    "street": "Via del Mundo 52/A6",
    "postal_code": "2536",
    "city": "Barcelona",
    "state": "Spanien",
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