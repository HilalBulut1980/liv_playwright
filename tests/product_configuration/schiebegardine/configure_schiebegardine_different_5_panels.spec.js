import { test } from 'playwright/test'
import { Schiebegardine_different } from '../../support/configurator_schiebegardine_different'
import jsonLogic from 'json-logic-js';


const testcase = {
    "name": "LIVConfig.-Schiebegardine_different_5_panels",
    "produkt": "Draga 7288", //PG 2 --> Baseprice 62,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 108,00  für Mindestmaß 300x300
    "ab_preis": "108,00", // 62,00+46,00
    "ab_preis_red": "75,60", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "3200",
    "pan_anpassen": true,
    "breite_1": "600", // PG 2: 2500x600 
    "stoff_2": "Mica 7340",//PG 3
    "hoehe_2": "2000",
    "breite_2": "700", // PG 3: 2000x700 
    "stoff_3": "Pika 7327", //PG 1
    "hoehe_3": "1500",
    "breite_3": "800", // PG 1: 1500x800 
    "stoff_4": "Mica 7340", //PG 3
    "hoehe_4": "2000",
    "breite_4": "700", // PG 3: 2000x700 
    "breite_5": "600", // PG 2: 2500x600 
    "endstab": "Beschwerungsstab",  // +3+4+5+4+3
    "paneel_anzahl": "5",
    "montage": "Montage an der Decke",
    "bediengriff": "mit Magnetgriff Aluminium",
    "anzahl_bediengriff": "5",  //5 x 6,99 = 34,95
    "lauf_schiene": "5",  // +154
    "farbe_schiene": "weiß",

    "anzahl": 2,
    "paneel_preis_1": 115,  // PG 2: 2500x600 --> 115,00 + B-Stab 3,00
    "paneel_preis_2": 131,  // PG 3: 2000x700 --> 131,00 + B-Stab 4,00
    "paneel_preis_3": 95,   // PG 1: 1500x800 --> 95,00 + B-Stab 5,00
    "paneel_preis_4": 131,  // PG 3: 2000x700 --> 131,00 + B-Stab 4,00
    "paneel_preis_5": 115,  // PG 2: 2500x600 --> 115,00 + B-Stab 3,00
    "panAnzahl": 5,
    "endstab_preis": 19,
    "schienen_preis": 154,
    "bediengriff_einzeln": 6.99,
    "bediengriff_preis": 34.95,
    "befestigung_preis": 0,
    "discount": 0.7,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Lydia",
    "last_name": "Knorr",
    "email": "lydia@delphinus-test.de",
    "street": "Tausend Töpfe 100",
    "postal_code": "20099",
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

    const paneele = (jsonLogic.apply({ '+': [testcase.paneel_preis_1, testcase.paneel_preis_2, testcase.paneel_preis_3, testcase.paneel_preis_4, testcase.paneel_preis_5] }))
    const new_Schiebegardine_different = new Schiebegardine_different(page)

    await new_Schiebegardine_different.startFromConfigurator(testcase)
    await new_Schiebegardine_different.configureSchiebegardineDifferent(testcase, paneele)

}) 