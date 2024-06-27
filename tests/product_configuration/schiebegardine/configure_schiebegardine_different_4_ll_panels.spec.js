import { test } from 'playwright/test'
import { Schiebegardine_different } from '../../support/configurator_schiebegardine_different'
import jsonLogic from 'json-logic-js';


const testcase = {
    "name": "LIVConfig.-Schiebegardine_different_4_II_panels",
    "produkt": "Pika 7327 ", //PG 1 --> Baseprice 54,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 100,00  für Mindestmaß 300x300
    "ab_preis": "105,00", // 59,00+46,00
    "ab_preis_red": "73,50", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "1000",
    "breite": "1650",  //--> Anzahl Paneele: 4 --> X1 = (1650 - 50) : 4 + 50 = 450 mm
    "pan_anpassen": true,
    "stoff_2": "Siva 7313", //PG 2  
    "stoff_4": "Siva 7313", //PG 2    
    "endstab": "Beschwerungsstab", // 4 x 2,00
    "paneel_anzahl": "4",
    "montage": "Montage an der Wand", // +21,00
    "lauf_schiene": "2",  // +67,00
    "farbe_schiene": "silber",

    "anzahl": 1,
    "paneel_preis_1": 61,  // PG 1: 1000x450 -->  61,00 + B-Stab 2,00
    "paneel_preis_2": 65,  // PG 2: 1000x450 -->  65,00 + B-Stab 2,00
    "paneel_preis_3": 61,  // PG 1: 1000x450 -->  61,00 + B-Stab 2,00
    "paneel_preis_4": 65,  // PG 2: 1000x450 -->  65,00 + B-Stab 2,00
    "panAnzahl": 4,
    "endstab_preis": 8,  // 4 x 2,00
    "schienen_preis": 67,
    "bediengriff_einzeln": 0,
    "bediengriff_preis": 0,
    "befestigung_preis": 21,
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

    const paneele = (jsonLogic.apply({ '+': [testcase.paneel_preis_1, testcase.paneel_preis_2, testcase.paneel_preis_3, testcase.paneel_preis_4] }))
    const new_Schiebegardine_different = new Schiebegardine_different(page)

    await new_Schiebegardine_different.startFromConfigurator(testcase)
    await new_Schiebegardine_different.configureSchiebegardineDifferent(testcase, paneele)

}) 