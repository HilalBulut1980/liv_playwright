import { test } from 'playwright/test'
import { Schiebegardine_gesamt } from '../../support/configurator_schiebegardine_gesamt'

const testcase = {
    "name": "LIVConfig.-Schiebegardine_gesamt_Elisa-7347",
    "produkt": "Elisa 7347", //PG 2 --> Baseprice 62,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 108,00  für Mindestmaß 300x300
    "ab_preis": "108,00", // 62,00+46,00
    "ab_preis_red": "75,60", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Elisa-7347",
    "hoehe": "2200",
    "breite": "2500",  // vorgeschl. Paneelanzahl = 3, Overlap 50
    "pan_anpassen": false,
    "endstab": "Beschwerungsstab",// +18,00
    "paneel_anzahl": "3",
    "overlap": "100",  // --> panBreite X1= (2500-100) :3 |+100 = 900
    "montage": "Montage an der Decke", 
    "bediengriff": "ohne Bediengriff", // +0,00
    "lauf_schiene": "3",  // +90,00 (bis B 2600mm)
    "farbe_schiene": "weiß",

    "anzahl": 1,
    "paneel_preis": 141,  // 1 paneel á 2200x900 = 141,00 
    "paneel_anzahl": 3,
    "endstab_preis": 18,  // 3 x 6,00
    "schienen_preis": 90,
    "bediengriff_einzeln": 0,
    "bediengriff_preis": 0,
    "befestigung_preis": 0,
    "discount": 0.7,
    "vat": 119,
    "mwst_1": 19,
    "mwst_2": 19,
    "versandkosten": 0,

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test5 GmbH",
    "prefix_business": "Herr",
    "first_name": "Henry",
    "last_name": "Ossenbrügge",
    "email": "henry@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1120974",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Magdalena",
    "last_name2": "Krems",
    "street2": "Lange Reihe 62",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "1120974",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Schiebegardine_gesamt = new Schiebegardine_gesamt(page)
    await new_Schiebegardine_gesamt.startFromConfigurator(testcase)
    await new_Schiebegardine_gesamt.configureSchiebegardineGesamt(testcase)

}) 