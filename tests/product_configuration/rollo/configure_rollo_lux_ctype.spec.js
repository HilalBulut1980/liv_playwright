import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo - Kassette LUX Typ C - Führungsschiene",
    "produkt": "Ruolo 3842",  //PG B
    "ab_preis": "67,00", // Anfangspreis von Modell LUX (mit Seitenleiste) , da vorselektiert
    "ab_preis_red": "30,15", //Regel 19 -55%
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette LUX",
    "schiene": "Führungsschiene",
    "hoehe": "1500",
    "breite": "1300",  // Kassette LUX --> 394
    "befestigung": "verschraubt am Fensterflügel",
    "bedienseite": "rechts",
    "kugelkette": "Kunststoff",  //kein Aufpreis
    "kassettenfarbe": "winchester", // +74

    "anzahl": 2,
    "grundpreis": 394,
    "befestigung_preis": 0,
    "bedienstab_preis": 0,
    "kassetten_preis": 74,
    "montageleiste_preis": 0,
    "ketten_preis": 0,
    "pendel_preis": 0,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Micha",
    "last_name": "Poslowsky",
    "email": "michi@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "963258",
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