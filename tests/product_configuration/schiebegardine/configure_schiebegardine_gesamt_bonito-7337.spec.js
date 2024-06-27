import { test } from 'playwright/test'
import { Schiebegardine_gesamt } from '../../support/configurator_schiebegardine_gesamt'

const testcase = {
    "name": "LIVConfig.-Schiebegardine_gesamt_Bonito-7337",
    "produkt": "Bonito 7337", //PG 3 --> Baseprice 69,00 (Paneelwagen + Stoff) + 46,00 (2-lauf-Schiene) = 115,00  für Mindestmaß 300x300
    "ab_preis": "115,00", // 62,00+46,00
    "ab_preis_red": "80,50", // -30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Bonito-7337",
    "hoehe": "1500",
    "breite": "3000",  // vorgeschl. Paneelanzahl = 3, Overlap 50
    "pan_anpassen": false,
    "endstab": "Designprofil",// +28,00
    "paneel_anzahl": "3",
    "overlap": "60",  // --> panBreite X1= (3000-60) :3 |+60 = 1040
    "montage": "Montage an der Wand", // +35,00
    "bediengriff": "mit Magnetclip Kunststoff, weiß", // +3,99
    "anzahl_bediengriff": 3,
    "lauf_schiene": "4",  // +116,00 (bis B 3000mm)
    "farbe_schiene": "silber",

    "anzahl": 4,
    "paneel_preis": 167,  // 1 paneel á 1500x1040 = 167,00 
    "paneel_anzahl": 3,
    "endstab_preis": 84,  // 3 x 28
    "schienen_preis": 116,
    "bediengriff_einzeln": 3.99,
    "bediengriff_preis": 11.97,  //3 x 3,99
    "befestigung_preis": 35,
    "discount": 0.7,
    "vat": 124,
    "mwst_1": 24,
    "mwst_2": 24,
    "versandkosten":20.84,  

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Emilia",
    "last_name": "Gregorius",
    "email": "emily@delphinus-test.de",
    "street": "Karlsplatz 7",
    "postal_code": "342022",
    "city": "Athen",
    "state": "Griechenland",
    "phone": "1190109",
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

    const new_Schiebegardine_gesamt = new Schiebegardine_gesamt(page)
    await new_Schiebegardine_gesamt.startFromConfigurator(testcase)
    await new_Schiebegardine_gesamt.configureSchiebegardineGesamt(testcase)

}) 