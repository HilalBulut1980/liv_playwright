import { test } from 'playwright/test'
import { Schiebegardine_different } from '../../support/configurator_schiebegardine_different'
import jsonLogic from 'json-logic-js';


const testcase = {
    "name": "LIVConfig.-Schiebegardine_different_8_panels",
    "produkt": "Draga 7288", //PG 2 --> Baseprice 62,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 108,00  für Mindestmaß 300x300
    "ab_preis": "108,00", // 62,00+46,00
    "ab_preis_red": "75,60", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2400",
    "breite": "5900", 
    "pan_anpassen": true,
    //paneel 1
    "breite_1": "950", // 2400x950
    //paneel 2
    "stoff_2": "Ginella 7300", 
    "hoehe_2": "2300",
    "breite_2": "900", // PG 2: 2300x900
    //paneel 3
    "stoff_3": "Piara 7279", 
    "hoehe_3": "2200",
    "breite_3": "850", //PG 1: 2200x850
    //paneel 4
    "stoff_4": "Bosna 7292", 
    "hoehe_4": "2100",
    "breite_4": "800", //PG 3: 2100x800
    //paneel 5
    "stoff_5": "Bonito 7335", 
    "hoehe_5": "2000",
    "breite_5": "750", // PG 3: 2000x750
    //paneel 6
    "stoff_6": "Piara 7281", 
    "hoehe_6": "1900",
    "breite_6": "700", // PG 1: 1900x700
    //paneel 7
    "stoff_7": "Naru 7295", 
    "hoehe_7": "1800",
    "breite_7": "650", // PG 3: 1800x650
    //paneel 8
    "stoff_8": "Ukko 7328", 
    "hoehe_8": "1700",
    "breite_8": "600", // PG 3: 1700x600
    "endstab": "ohne Endstab",
    "paneel_anzahl": "8",
    "montage": "Montage an der Decke",
    "bediengriff": "mit Magnetgriff Aluminium",
    "anzahl_bediengriff": "8",  // 8 x 6,99 = 55,92
    "lauf_schiene": "5",  // +289
    "farbe_schiene": "weiß",

    "anzahl": 3,
    "paneel_preis_1": 162,  // PG 2: 2400x950 --> 162,00 --> korrekt
    "paneel_preis_2": 149,  // PG 2: 2300x900 --> 149,00 --> korrekt
    "paneel_preis_3": 120,  // PG 1: 2200x850 --> 120,00 --> korrekt
    "paneel_preis_4": 157,  // PG 3: 2100x800 --> 157,00 --> korrekt
    "paneel_preis_5": 146,  // PG 3: 2000x750 --> 146,00 --> korrekt
    "paneel_preis_6": 94,  // PG 1: 1900x700 --> 94,00 --> 
    "paneel_preis_7": 122,  // PG 3: 1800x650 --> 122,00
    "paneel_preis_8": 142,   // PG 3: 1700x600 --> 142,00
    "panAnzahl": 8,
    "endstab_preis": 0,  
    "schienen_preis": 289,
    "bediengriff_einzeln": 6.99,
    "bediengriff_preis": 55.92,
    "befestigung_preis": 0,
    "discount": 0.7,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Frederic",
    "last_name": "Lassenbrügge",
    "email": "freddy@delphinus-test.de",
    "street": "Loorberweg 133",
    "postal_code": "22043",
    "city": "Hannover",
    "state": "Deutschland",
    "phone": "98547",
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

    const paneele = (jsonLogic.apply({ '+': [testcase.paneel_preis_1, testcase.paneel_preis_2, testcase.paneel_preis_3, testcase.paneel_preis_4, testcase.paneel_preis_5, testcase.paneel_preis_6, testcase.paneel_preis_7, testcase.paneel_preis_8]}))
    const new_Schiebegardine_different = new Schiebegardine_different(page)

    await new_Schiebegardine_different.startFromConfigurator(testcase)
    await new_Schiebegardine_different.configureSchiebegardineDifferent(testcase, paneele)

}) 