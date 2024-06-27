import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "Umsatzsteuer-Test: Fall 2 Schweiz - Kunde",
    "produkt": "/plissee/wabe-calma-2152",
    "ab_preis": "96,00", //PG4
    "ab_preis_red": "52,80",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS2",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1200",
    "breite": "1000",
    "bediengriff": "Design",  //+17
    "bedienstab": "Länge 200cm",  //+52
    "schienenfarbe": "Bronze",

    "anzahl": 2,
    "grundpreis": 248,
    "grundpreis_2": 0,
    "bediengriff_preis": 17, 
    "bedienstab_preis": 52,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 29.90,

    "login": "customer",
    "password": "Abcde_12345",
    "prefix": "",
    "company_name": "",
    "vatID": "CHE150906972",
    "prefix_business": "",
    "first_name": "",
    "last_name": "",
    "email": "uid_CH@delphinus-test.de",
    "street": "",
    "postal_code": "",
    "city": "",
    "state": "Schweiz",
    "state_code": "CHE",
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


    //check/create testaccount --- uid_CH@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=uid_CH@delphinus-test.de&prefix=Herr&firstname=UID-test&lastname=Schweiz&billing_company=Test%20UG&billing_vatid=CHE150906972&password=Abcde_12345&billing_street=Teststraße%203&billing_postcode=1234&billing_city=Basel&billing_country=CH&shipping_vatid=CHE150906972&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Basel&shipping_country=CH')
    
    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 