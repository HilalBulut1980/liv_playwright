import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "Umsatzsteuertest Fall 3b different Address AT-->BG valid",
    "produkt": "/plissee/darken-1574",
    "ab_preis": "88,00", //PG3
    "ab_preis_red": "48,40",  //-45%
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "500",
    "hoehe_rechts": "1200",
    "breite_oben": "300",
    "breite_unten": "1000",
    "ausrichtung": "rechts",
    "schienenfarbe": "Anthrazit",

    "anzahl": 1,
    "grundpreis": 512,
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
    "company_name": "Verkehrsbüro-Ruefa Reisen GmbH",
    "vatID": "ATU56160004",
    "prefix_business": "Frau",
    "first_name": "Mia",
    "last_name": "Rechberger",
    "email": "mia@delphinus-test.de",
    "street": "Leinenweg 66",
    "postal_code": "1010",
    "city": "Graz",
    "state": "Österreich",
    "state_code": "ATU",
    "phone": "145968",
    "shipping": "new",
    "prefix2": "geschaeftskunde",
    "company_name2": "Chaimag Ltd",
    "vatID_2": "BG201794665",
    "prefix_business2": "Herr",
    "first_name2": "Mirco",
    "last_name2": "Yanar",
    "street2": "104 Bdin Str., Büro 12",
    "postal_code2": "1234",
    "city2": "Sofia",
    "state2": "Bulgarien",
    "state_code_2": "BG",
    "phone2": "225588",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromProductPage(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 