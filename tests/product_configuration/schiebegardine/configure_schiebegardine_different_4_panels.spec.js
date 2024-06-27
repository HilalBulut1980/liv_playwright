import { test } from 'playwright/test'
import { Schiebegardine_different } from '../../support/configurator_schiebegardine_different'
import jsonLogic from 'json-logic-js';


const testcase = {
    "name": "LIVConfig.-Schiebegardine_different_4_panels",
    "produkt": "Vilana 7307", //PG 2 --> Baseprice 62,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 108,00  für Mindestmaß 300x300
    "ab_preis": "108,00", // 62,00+46,00
    "ab_preis_red": "75,60", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "hoehe": "2500",
    "breite": "2000",
    "pan_anpassen": true,
    "stoff_1": "Hilko 7315",
    "breite_1": "450", // PG 3: 2500x450 
    "hoehe_2": "1300",
    "breite_2": "600", // PG 2: 1300x600 
    "hoehe_3": "1300",
    "breite_3": "600", // PG 2: 1300x600 
    "stoff_4": "Hilko 7315",
    "breite_4": "450", // PG 3: 2500x450 
    "endstab": "Designprofil",
    "paneel_anzahl": "4",
    "montage": "Montage an der Wand", //+28,00
    "bediengriff": "mit Magnetclip Kunststoff, weiß",
    "anzahl_bediengriff": "4",  //4 x 3,99 = 15,96
    "lauf_schiene": "4",  // +86,00
    "farbe_schiene": "silber",

    "anzahl": 2,
    "paneel_preis_1": 120,  // PG 3: 2500x450 -->  120,00 + D-Profil 13,00
    "paneel_preis_2": 83,   // PG 2: 1300x600 -->  83,00 + D-Profil 15,00
    "paneel_preis_3": 83,   // PG 2: 1300x600 -->  83,00 + D-Profil 15,00
    "paneel_preis_4": 120,  // PG 3: 2500x450 -->  120,00 + D-Profil 13,00
    "panAnzahl": 4,
    "endstab_preis": 56,  // 13+15+15+13
    "schienen_preis": 86,
    "bediengriff_einzeln": 3.99,
    "bediengriff_preis": 15.96,
    "befestigung_preis": 28,
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
    "first_name": "Boris",
    "last_name": "Lütten",
    "email": "boris@delphinus-test.de",
    "street": "Krunertweg 88",
    "postal_code": "22043",
    "city": "Bremen",
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