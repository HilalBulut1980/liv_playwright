import { test } from 'playwright/test'
import { Muster } from '../../support/configurator_muster'

const testcase = {
    "name": "LIVConfig. - Plissee_Stoffmuster_Ruvido-1930",
    "produkt": "/plissee/ruvido-1930", //PG 1
    "ab_preis": "75,00",
    "ab_preis_red": "41,25", //-45%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "0",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test4 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "246727",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "844434",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Muster= new Muster(page)
    await new_Muster.configureMuster(testcase)

}) 