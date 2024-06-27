import { test } from 'playwright/test'
import { Muster } from '../../support/configurator_muster'

const testcase = {
    "name": "LIVConfig. - Raffrollo_Stoffmuster_Dillio-9071",
    "produkt": "/raffrollo/dillio-9071",  //PG B
    "ab_preis": "340,00",
    "ab_preis_red": "153,00", //-55%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "22",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lena",
    "last_name": "Kuhlmann",
    "email": "lena@delphinus-test.de",
    "street": "Via d'Vincento 99",
    "postal_code": "1254",
    "city": "Venedig",
    "state": "Italien",
    "phone": "1236987",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Muster= new Muster(page)
    await new_Muster.configureMuster(testcase)

}) 