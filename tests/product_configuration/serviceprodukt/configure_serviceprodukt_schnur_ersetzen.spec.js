import { test } from 'playwright/test'
import { Service } from '../../support/configurator_serviceprodukt'

const testcase = {
    "name": "LIVConfig. -Service_Plissee_SchnurErsetzen",
    "produkt": "/reparaturauftrag-schnur-ersetzen",
    "system": "Serviceprodukt",
    "bestellnummer": "10007000",
    "breite": "1200",
    "hoehe": "1500",
    "wunschlaenge": "1500",
    "produkt_name": "Wabe-Uni 4205",

    "anzahl": 3,
    "grundpreis": 30,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Mira",
    "last_name": "Münchhausen",
    "email": "miri@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
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