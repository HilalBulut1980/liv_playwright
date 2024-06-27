import { test } from 'playwright/test'
import { NEGVATID } from '../../support/configurator_neg_vatid'

const testcase = {
    "name": "neg. Umsatzsteuertest ungültige UID SK same address",
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

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Lidlana Slovenska",

    "vatID1_false": "SKK2020279415",
    "vatID1_correct": "SK2020279415",

    "prefix_business": "Frau",
    "first_name": "Natalie",
    "last_name": "Drusky",
    "email": "natalie@delphinus-test.de",
    "street": "Karlsplatz 99",
    "postal_code": "5428",
    "city": "Bratislava",
    "state": "Slowakei",
    "state_code": "SK",
    "phone": "2154822",
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

    const new_neg_VATID = new NEGVATID(page)
    await new_neg_VATID.startFromProductPage(testcase)
    await new_neg_VATID.configure_neg_vatid(testcase)

}) 