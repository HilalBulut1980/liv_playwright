import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "Umsatzsteuer-Test: Fall 2 Österreich - Kunde",
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
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "vatID": "ATU15255907",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "uid_AT@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Österreich",
    "state_code": "ATU",
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


    //check/create testaccount --- uid_AT@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=uid_AT@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=%C3%96sterreich&billing_company=Test%20AG&billing_vatid=ATU33803701&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=AT&shipping_vatid=ATU33803701&shipping_street=Teststra%C3%9Fe%202&shipping_postcode=1110&shipping_city=Teststadt&shipping_country=AT')

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 