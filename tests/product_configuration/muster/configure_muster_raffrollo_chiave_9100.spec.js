import { test } from 'playwright/test'
import { Muster } from '../../support/configurator_muster'

const testcase = {
    "name": "LIVConfig. - Raffrollo_Stoffmuster_Chiave-9100",
    "produkt": "/raffrollo/chiave-9100",  //PG C
    "ab_preis": "354,00",
    "ab_preis_red": "159,30", //-55%
    "system": "Muster",
    "anzahl": "",
    "unit": "kostenlos",
    "total": "kostenlos",
    "vatRateLine_1": "23",
    "vatProduct": "0,00",
    "vatAmountTotal": "0,00",

    //customer data
    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Milena",
    "last_name": "Gomez Filipe",
    "email": "milena@delphinus-test.de",
    "street": "Via Colonada 87",
    "postal_code": "85243",
    "city": "Lissabon",
    "state": "Portugal",
    "phone": "1236987",
    "versandkosten": "0,00",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Muster= new Muster(page)
    await new_Muster.configureMuster(testcase)

}) 