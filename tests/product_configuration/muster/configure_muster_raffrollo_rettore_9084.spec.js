import { test } from 'playwright/test'
import { Muster } from '../../support/configurator_muster'

const testcase = {
    "name": "LIVConfig. - Raffrollo_Stoffmuster_Rettore-9084",
    "produkt": "/raffrollo/rettore-9084",  //PG C
    "ab_preis": "354,00",
    "ab_preis_red": "159,30", //-55%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "21",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test6 GmbH",
    "prefix_business": "Frau",
    "first_name": "Mia",
    "last_name": "Luana",
    "email": "mia@delphinus-test.de",
    "street": "Via del Mundo 100",
    "postal_code": "62543",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "852147",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Muster= new Muster(page)
    await new_Muster.configureMuster(testcase)

}) 