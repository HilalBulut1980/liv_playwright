import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS2 - GLW",
    "produkt": "Freja 1772",
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
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "testkonto_3@delphinus-test.de",
    "street": "Lange Reihe 59",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "153084",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 59",
    "postal_code2": "56137",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "153084",
    "payment": "bankpayment"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    //check/create testaccount --- testkonto_3@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_3@delphinus-test.de&prefix=Frau&firstname=PEX&lastname=Testkonto%203&password=Abcde_12345&billing_street=Teststraße%2099&billing_postcode=1100&billing_city=Wien&billing_country=AT&shipping_street=Teststraße%2099&shipping_postcode=1100&shipping_city=Wien&shipping_country=AT')

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromConfigurator(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 