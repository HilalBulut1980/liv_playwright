import { test } from 'playwright/test'
import { Service } from '../../support/configurator_serviceprodukt'

const testcase = {
    "name": "LIVConfig. -Service_Plissee_längereFührung_nachträglich",
    "produkt": "/aenderungsauftrag-schnurlaenge",
    "system": "Serviceprodukt",
    "bestellnummer": "10002000",
    "breite": "1000",
    "hoehe": "1200",
    "wunschlaenge": "1500",
    "produkt_name": "Linara 3637",

    "anzahl": 2,
    "grundpreis": 30,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Schulz",
    "email": "max@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "265786",
    "city": "Wien",
    "state": "Österreich",
    "phone": "913569",
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

    const new_Service = new Service(page)
    await new_Service.configureService(testcase)
  
  }) 