import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS5 SD - Winkel",
    "produkt": "Darken 1567",
    "ab_preis": "88,00", //PG3
    "ab_preis_red": "48,40",  //-45%
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS5 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe_links": "700",
    "hoehe_rechts": "800",
    "breite_oben": "350",
    "breite_unten": "550",
    "ausrichtung": "rechts",
    "schienenfarbe": "Bronze",

    "anzahl": 1,
    "grundpreis": 309,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 24,  //SD
    "discount": 0.55,
    "discount_2": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test7 GmbH",
    "prefix_business": "Frau",
    "first_name": "Lara",
    "last_name": "Herrmann",
    "email": "lara@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "1040",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1743189",
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
    await new_Plissee.startFromConfigurator(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 