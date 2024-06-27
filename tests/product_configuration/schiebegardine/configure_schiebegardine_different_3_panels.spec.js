import { test } from 'playwright/test'
import { Schiebegardine_different } from '../../support/configurator_schiebegardine_different'
import jsonLogic from 'json-logic-js';


const testcase = {
    "name": "LIVConfig.-Schiebegardine_different_3_panels",
    "produkt": "Ukko 7331", //PG 3 --> Baseprice 69,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 115,00  für Mindestmaß 300x300
    "ab_preis": "115,00", // 62,00+46,00
    "ab_preis_red": "80,50", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2600",
    "breite": "3000",
    "pan_anpassen": true,
    "stoff_1": "Odetta 7217", //PG 2
    "breite_1": "1000", //2600x1000
    "stoff_2": "Pika 7325", //PG 1
    "hoehe_2": "2000",
    "breite_2": "1000", // 2000x1000
    "breite_3": "1010", // 2600x1010
    "endstab": "ohne Endstab",
    "paneel_anzahl": "3",
    "montage": "Montage an der Decke",
    "lauf_schiene": "3",  // +101
    "farbe_schiene": "weiß",

    "anzahl": 2,
    "paneel_preis_1": 171,  // PG 2: 2600x1000 -->  171,00 (lt. Sheet Gesamtsystem)
    "paneel_preis_2": 122,  // PG 1: 2000x1000 -->  122,00 (lt. Sheet Gesamtsystem)
    "paneel_preis_3": 230,  // PG 3: 2600x1010 -->  230,00 (lt. Sheet Gesamtsystem)
    "panAnzahl": 3,
    "endstab_preis": 0,
    "schienen_preis": 101,
    "bediengriff_einzeln": 0,
    "bediengriff_preis": 0,
    "befestigung_preis": 0,
    "discount": 0.7,
    "vat": 125,
    "mwst_1": 25,
    "versandkosten": 21.01,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Dragan",
    "last_name": "Lusevic",
    "email": "boris@delphinus-test.de",
    "street": "Staza žičare 100 A",
    "postal_code": "9635",
    "city": "Split",
    "state": "Kroatien",
    "phone": "852147",
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

    const paneele = (jsonLogic.apply({ '+': [testcase.paneel_preis_1, testcase.paneel_preis_2, testcase.paneel_preis_3] }))
    const new_Schiebegardine_different = new Schiebegardine_different(page)

    await new_Schiebegardine_different.startFromConfigurator(testcase)
    await new_Schiebegardine_different.configureSchiebegardineDifferent(testcase, paneele)

}) 