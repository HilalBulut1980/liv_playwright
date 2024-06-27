import { test } from 'playwright/test'
import { Rollo } from '../../support/configurator_rollo'

const testcase = {
    "name": "LIVConfig. - Rollo - Kassette Mini-LUX Typ C - Führungsschiene",
    "produkt": "Marron 3767",  //PG B
    "ab_preis": "67,00", // Anfangspreis von Modell LUX (mit Seitenleiste) , da vorselektiert
    "ab_preis_red": "30,15", //Regel 19 -55%
    "supplier": "Anwis",
    "rollotyp": "Mini-Rollos",
    "system": "Maß_Rollo",
    "kassette": "Kassette MINI-LUX",
    "schiene": "Führungsschiene",
    "hoehe": "2000",
    "breite": "1000",  // LUX --> 384
    "befestigung": "verschraubt am Fensterflügel",
    "bedienseite": "rechts",
    "kugelkette": "Kunststoff",  //kein Aufpreis
    "kassettenfarbe": "anthrazit", 

    "anzahl": 3,
    "grundpreis": 384,
    "befestigung_preis": 0,
    "bedienstab_preis": 0,
    "kassetten_preis": 0,
    "montageleiste_preis": 0,
    "ketten_preis": 0,
    "pendel_preis": 0,
    "volant_preis": 0,
    "motor_preis": 0,
    "discount": 0.45,
    "discount_extra": 1,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 20.17,  // 20/119*120

    "login": "guest",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Sebastian",
    "last_name": "Petersen",
    "email": "basti@delphinus-test.de",
    "street": "Ausschläger Allee 32",
    "postal_code": "25473",
    "city": "Paris",
    "state": "Frankreich",
    "phone": "852369",
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

    const new_Rollo = new Rollo(page)
    await new_Rollo.startFromConfigurator(testcase)
    await new_Rollo.configureRollo(testcase)

}) 