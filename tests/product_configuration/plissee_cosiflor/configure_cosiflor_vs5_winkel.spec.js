import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS5 - Winkel",
    "produkt": "Darken 1574",
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
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test7 GmbH",
    "prefix_business": "Frau",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "494494",
    "city": "Barcelona",
    "state": "Spanien",
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