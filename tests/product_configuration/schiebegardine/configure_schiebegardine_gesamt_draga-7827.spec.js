import { test } from 'playwright/test'
import { Schiebegardine_gesamt } from '../../support/configurator_schiebegardine_gesamt'

const testcase = {
    "name": "LIVConfig.-Schiebegardine_gesamt_Draga-7287",
    "produkt": "Draga 7287", //PG 2 --> Baseprice 62,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 108,00  für Mindestmaß 300x300
    "ab_preis": "108,00", // 62,00+46,00
    "ab_preis_red": "75,60", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Draga-7287",
    "hoehe": "300",
    "breite": "300",  // vorgeschl. Paneelanzahl = 1, Overlap 0
    "pan_anpassen": false,
    "endstab": "Beschwerungsstab",// +2,00
    "paneel_anzahl": "1",
    //"overlap": "0",  // --> panBreite X1= (300-0) :1 |+0 = 300 --> Overlap kann nicht bearbeitet werden, wenn es 0 ist (ein paneel)
    "montage": "Montage an der Wand", // +21
    "bediengriff": "mit Magnetclip Kunststoff, weiß", // +3,99
    "anzahl_bediengriff": 1,
    "lauf_schiene": "3",  // +49,00 (bis B 1000mm)
    "farbe_schiene": "silber",

    "anzahl": 3,
    "paneel_preis": 62,  // 1 paneel á 300x300 = 62,0 
    "paneel_anzahl": 1,
    "endstab_preis": 2,  // 1 x 2,00
    "schienen_preis": 49,
    "bediengriff_einzeln": 3.99,
    "bediengriff_preis": 3.99,  // 3,99
    "befestigung_preis": 21,
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
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test4@delphinus-test.de",
    "street": "Lange Reihe 62",
    "postal_code": "1234",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "1120974",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
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