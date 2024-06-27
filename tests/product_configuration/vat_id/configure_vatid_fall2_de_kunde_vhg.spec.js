import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "Umsatzsteuer-Test: Fall 2 Deutschland - Kunde",
    "produkt": "/plissee/freja-1772",
    "ab_preis": "75,00", //PG1
    "ab_preis_red": "41,25",  //-45%
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage am Fensterflügel mit Glasleistenwinkeln", //+16,50
    "system": "Cosiflor",
    "hoehe": "900",
    "breite": "800",
    "schienenfarbe": "Weiß",

    "anzahl": 2,
    "grundpreis": 117,
    "grundpreis_2": 0,
    "bediengriff_preis": 0,
    "bedienstab_preis": 0,
    "zusatz_preis": 16.50,
    "discount": 0.55,
    "discount_2": 0,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "vatID": "DE136627286",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "uid_DE@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Deutschland",
    "state_code": "DE",
    "phone": "",
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

    //check/create testaccount --- uid_DE@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=uid_DE@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=Deutschland&billing_company=Test%20GmbH&billing_vatid=DE136627286&password=Abcde_12345&billing_street=Teststraße%201&billing_postcode=12345&billing_city=Teststadt&billing_country=DE&shipping_vatid=DE136627286&shipping_street=Teststraße%201&shipping_postcode=12345&shipping_city=Teststadt&shipping_country=DE')

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 