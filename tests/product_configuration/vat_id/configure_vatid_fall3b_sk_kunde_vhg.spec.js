import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "Umsatzsteuer-Test: Fall 3b Slowakei - Kunde",
    "produkt": "/plissee/color-breeze-1360",
    "ab_preis": "55,00", //PG0
    "ab_preis_red": "20,25",  //-45% Regel 1 + Regel 40: 10,00 bei 300x300
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1400",
    "breite": "700",
    "schienenfarbe": "Silber",

    "anzahl": 3,
    "grundpreis": 120,
    "grundpreis_2": 0,
    "bediengriff_preis": 0,
    "bedienstab_preis": 0,
    "zusatz_preis": 0,
    "discount": 0.55,
    "discount_2": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 16.81,

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "vatID": "SK2020279415",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "uid_EU@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Slowakei",
    "state_code": "SK",
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

    //check/create testaccount --- uid_EU@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=uid_EU@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=EU-Staat&billing_company=Test%20Company&billing_vatid=SK2020279415&password=Abcde_12345&billing_street=Teststraße%2010&billing_postcode=1234&billing_city=Bratislava&billing_country=SK&shipping_vatid=SK2020279415&shipping_street=Teststraße%2010&shipping_postcode=1234&shipping_city=Bratislava&shipping_country=SK')

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 