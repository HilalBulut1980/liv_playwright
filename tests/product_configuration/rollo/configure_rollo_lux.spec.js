import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo - Kassette LUX - Seitenleiste",
    "produkt": "Basic DimOut 3034",  //PG A
    "ab_preis": "63,00", // Anfangspreis von Modell LUX (mit Seitenleiste) , da vorselektiert
    "ab_preis_red": "28,35",//Regel 19 -55%
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "2000",
    "breite": "1400",  // Kassette LUX --> 358
    "befestigung": "mit Klebeband am Fensterflügel",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  // +21
    "kassettenfarbe": "mahagoni", // +62

    "anzahl": 2,
    "grundpreis": 358,
    "befestigung_preis": 0,
    "bedienstab_preis": 0,
    "kassetten_preis": 62,
    "montageleiste_preis": 0,
    "ketten_preis": 21,
    "pendel_preis": 0,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,  

    "login": "guest",
    // "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lena",
    "last_name": "Schmidt",
    "email": "lena@delphinus-test.de",
    "street": "Treustraße 21",
    "postal_code": "1090",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1051839",
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

    const new_Rollo = new Rollo(page)
    await new_Rollo.startFromConfigurator(testcase)
    await new_Rollo.configureRollo(testcase)

}) 