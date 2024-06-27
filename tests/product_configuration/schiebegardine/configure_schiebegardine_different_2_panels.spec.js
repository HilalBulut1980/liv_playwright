import { test } from 'playwright/test'
import { Schiebegardine_different } from '../../support/configurator_schiebegardine_different'
import jsonLogic from 'json-logic-js';


const testcase = {
    "name": "LIVConfig.-Schiebegardine_different_2_panels",
    "produkt": "Bonito 7337", //PG 3 --> Baseprice 69,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 115,00  für Mindestmaß 300x300
    "ab_preis": "115,00", // 62,00+46,00
    "ab_preis_red": "80,50", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "pan_anpassen": true,
    "breite": "2000",
    "breite_1": "1050", // PG 3: 2500x1050 = 230,00
    "breite_2": "1050", // PG 3: 2500x1050 = 230,00
    "endstab": "Beschwerungsstab", // 7,00 pro paneel
    "paneel_anzahl": "2",
    "montage": "Montage an der Decke", // +0,00
    "lauf_schiene": "2",  // +72
    "farbe_schiene": "silber",

    "anzahl": 2,
    "paneel_preis_1": 230,
    "paneel_preis_2": 230,
    "paneel_anzahl": 2,
    "endstab_preis": 14,  // 2 x 7
    "schienen_preis": 72,
    "bediengriff_einzeln": 0,
    "bediengriff_preis": 0,
    "befestigung_preis": 0,
    "discount": 0.7,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lorenzzo",
    "last_name": "Hegen",
    "email": "lorenzo@delphinus-test.de",
    "street": "Traunspark 66",
    "postal_code": "20539",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "123654",
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

    const paneele = (jsonLogic.apply({ '+': [testcase.paneel_preis_1, testcase.paneel_preis_2] }))
    const new_Schiebegardine_different = new Schiebegardine_different(page)

    await new_Schiebegardine_different.startFromConfigurator(testcase)
    await new_Schiebegardine_different.configureSchiebegardineDifferent(testcase, paneele)

}) 