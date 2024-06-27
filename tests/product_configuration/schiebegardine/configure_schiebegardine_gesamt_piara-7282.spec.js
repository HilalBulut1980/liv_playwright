import { test } from 'playwright/test'
import { Schiebegardine_gesamt } from '../../support/configurator_schiebegardine_gesamt'

const testcase = {
    "name": "LIVConfig.-Schiebegardine_gesamt_Piara-7282",
    "produkt": "Piara 7282", //PG 1 --> Baseprice 54,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 100,00  für Mindestmaß 300x300
    "ab_preis": "105,00", // 59,00+46,00
    "ab_preis_red": "73,50", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Piara-7282",
    "hoehe": "2500",
    "breite": "4000",  // vorgeschl. Paneelanzahl = 4, Overlap 50
    "pan_anpassen": false,
    "endstab": "Designprofil",// +4 x 28,00
    "paneel_anzahl": "4",
    "overlap": "70",  // --> panBreite X1= (4000-70) :4 |+70 = 1052,5 --> 1053 mm
    "montage": "Montage an der Wand", // --> 6 Winkel á 7,00 benötigt bei 4000mm --> 42,00 n.r.
    "bediengriff": "mit Magnetgriff Aluminium", // +6,99 pro paneel 6,99 x 4 27,96 n.r.
    "anzahl_bediengriff": 4,
    "lauf_schiene": "5",  // +196,00 (bis B 4000mm)
    "farbe_schiene": "silber",

    "anzahl": 2,
    "paneel_preis": 156,  // 1 paneel á 2500x1053 = 156,00 
    "paneel_anzahl": 4,
    "endstab_preis": 112,  // 4 x 28
    "schienen_preis": 196,
    "bediengriff_einzeln": 6.99,
    "bediengriff_preis": 27.96,
    "befestigung_preis": 42,
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
    "first_name": "Maximilian",
    "last_name": "Hruby",
    "email": "max@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1120974",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Janina",
    "last_name2": "Lüdwig",
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