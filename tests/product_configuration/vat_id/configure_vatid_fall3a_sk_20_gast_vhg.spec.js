import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "Umsatzsteuer-Test: Fall 3a Slowakei - Gast",
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
    "versandkosten": 20.17,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Lidl Slovenska",
    "prefix_business": "Frau",
    "first_name": "Lena",
    "last_name": "Kuhlmann",
    "email": "lena@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "75196",
    "city": "Bratislava",
    "state": "Slowakei",
    "state_code": "SK",
    "phone": "12345",
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

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 