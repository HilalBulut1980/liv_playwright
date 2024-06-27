import { test } from 'playwright/test'
import { Doppelrollo } from '../../support/configurator_doppelrollo'

const testcase = {
    "name": "LIVConfig. - Rabattcode_Doppelrollo",
    "produkt": "Lacinia 5053",
    "ab_preis":"91,00",  //Doppelrollo Mini zum Klemmen Startpreis PG 1
    "ab_preis_red":"36,40",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1500",
    "breite": "1000",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+20
    "verblendung_farbe": "grau",

    "rabatt_code": "LIV-TEST-3K5P",  //3,5%
    "rabatt_faktor_a": 3.5,  
    "rabatt_faktor_b": 96.5,  

    "anzahl": 1,
    "grundpreis": 419,
    "kettenpreis": 21, 
    "kassFarbenpreis": 0,  //ohne Kassette
    "discount": 0.4,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02, //14,90/119 *120

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Lehnhardt",
    "email": "maria2@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "151432",
    "city": "Wien",
    "state": "Österreich",
    "phone": "498759",
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

    await page.goto('/scripts/coupons/create.php');

    const new_Doppelrollo = new Doppelrollo(page)
    await new_Doppelrollo.startFromConfigurator(testcase)
    await new_Doppelrollo.configureDoppelrollo(testcase)

}) 