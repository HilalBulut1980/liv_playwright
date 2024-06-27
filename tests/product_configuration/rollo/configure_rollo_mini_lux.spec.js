import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo - Kassette Mini-LUX - Seitenleiste",
    "produkt": "Estro 3799",  //PG C
    "ab_preis": "70,00", // Anfangspreis von Modell LUX (mit Seitenleiste) , da vorselektiert
    "ab_preis_red": "31,50", //Regel 19 -->  -55%
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette MINI-LUX",
    "schiene": "Seitenleiste universal",
    "hoehe": "2200",
    "breite": "1200",  // MINILUX --> 520
    "befestigung": "mit Klebeband am Fensterflügel",
    "bedienseite": "rechts",
    "kugelkette": "Metall",  // +21
    "kassettenfarbe": "mooreiche", // +50

    "anzahl": 1,
    "grundpreis": 520,
    "befestigung_preis": 0,
    "bedienstab_preis": 0,
    "kassetten_preis": 50,
    "montageleiste_preis": 0,
    "ketten_preis": 21,
    "pendel_preis": 0,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, // 20/119*121

    "login": "guest",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Manja",
    "last_name": "Heermann Gercia",
    "email": "manja@delphinus-test.de",
    "street": "Via Del Mundo 99",
    "postal_code": "1234",
    "city": "Barcelona", 
    "state": "Spanien",
    "phone": "741258",
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