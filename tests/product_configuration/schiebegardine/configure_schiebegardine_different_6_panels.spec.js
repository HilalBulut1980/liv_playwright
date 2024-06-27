import { test } from 'playwright/test'
import { Schiebegardine_different } from '../../support/configurator_schiebegardine_different'
import jsonLogic from 'json-logic-js';


const testcase = {
    "name": "LIVConfig.-Schiebegardine_different_6_panels",
    "produkt": "Ukko 7331",//PG 3 --> Baseprice 69,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 115,00  für Mindestmaß 300x300
    "ab_preis": "115,00", // 62,00+46,00
    "ab_preis_red": "80,50", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2300",
    "breite": "4200",
    "pan_anpassen": true,
    "breite_1": "900",    // PG 3: 2300x900
    "stoff_2": "Vilana 7305", //PG 2 
    "breite_2": "700",    // PG 2: 2300x700
    "stoff_3": "Philo 7323", //PG 1
    "breite_3": "600",    // PG 0: 2300x600
    "stoff_4": "Philo 7323", //PG 1
    "breite_4": "600",    // PG 0: 2300x600
    "stoff_5": "Vilana 7305", //PG 2
    "breite_5": "700",    // PG 2: 2300x700 
    "breite_6": "900",    // PG 3: 2300x900 
    "endstab": "Designprofil",
    "paneel_anzahl": "6",
    "montage": "Montage an der Wand",  //+42
    "lauf_schiene": "4",  // +166
    "farbe_schiene": "weiß",
    "art_schiene": "Schiene auf Maß",

    "anzahl": 1,
    "paneel_preis_1": 181,  // PG 3: 2300x900 --> 181,00 + D-Profil 22,00
    "paneel_preis_2": 121,  // PG 2: 2300x700 --> 121,00 + D-Profil 18,00
    "paneel_preis_3": 93,   // PG 1: 2300x600 --> 93,00 + D-Profil 15,00
    "paneel_preis_4": 93,  // PG 1: 2300x600 --> 93,00 + D-Profil 15,00
    "paneel_preis_5": 121,  // PG 2: 2300x700 --> 121,00 + D-Profil 18,00
    "paneel_preis_6": 181,  // PG 3: 2300x900 --> 181,00 + D-Profil 22,00
    "panAnzahl": 6,
    "endstab_preis": 110, // 22+18+15+15+18+22
    "schienen_preis": 166,
    "bediengriff_einzeln": 0,
    "bediengriff_preis": 0,
    "befestigung_preis": 42,
    "discount": 0.7,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 20.51,

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Milena",
    "last_name": "Toapanta",
    "email": "milly@delphinus-test.de",
    "street": "Via del Governate 625",
    "postal_code": "1225",
    "city": "Milano",
    "state": "Italien",
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

    const paneele = (jsonLogic.apply({ '+': [testcase.paneel_preis_1, testcase.paneel_preis_2, testcase.paneel_preis_3, testcase.paneel_preis_4, testcase.paneel_preis_5, testcase.paneel_preis_6]}))
    const new_Schiebegardine_different = new Schiebegardine_different(page)

    await new_Schiebegardine_different.startFromConfigurator(testcase)
    await new_Schiebegardine_different.configureSchiebegardineDifferent(testcase, paneele)

}) 