import { test } from 'playwright/test'
import { Doppelrollo } from '../../support/configurator_doppelrollo'

const testcase = {
    "name": "LIVConfig. - Doppelrollo Maß - o.K. I",
    "produkt": "Remsa 5076",
    "ab_preis":"60,00",  //Doppelrollo Mini zum Klemmen Startpreis PG2
    "ab_preis_red":"24,00",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo ohne Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1500",
    "breite": "1550",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  //+21
    "verblendung_farbe": "grau",

    "anzahl": 1,
    "grundpreis": 791,
    "kettenpreis": 21, 
    "kassFarbenpreis": 0,  //ohne Kassette
    "discount": 0.4,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 70.58, // 70/119 *120

    "login": "register",
    "password": "testpassw4",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
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

    const new_Doppelrollo = new Doppelrollo(page)
    await new_Doppelrollo.startFromConfigurator(testcase)
    await new_Doppelrollo.configureDoppelrollo(testcase)

}) 