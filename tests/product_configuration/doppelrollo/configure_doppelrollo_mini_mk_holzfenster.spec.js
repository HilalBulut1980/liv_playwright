import { test } from 'playwright/test'
import { Doppelrollo } from '../../support/configurator_doppelrollo'

const testcase = {
    "name": "LIVConfig. - Doppelrollo Mini_Maß - m.K. Holzfenster",  //mit Kassette -->zum Kleben
    "produkt": "/doppelrollo/acorda-5091",
    "ab_preis": "46,00",  //Doppelrollo Mini zum Klemmen Startpreis PG1
    "ab_preis_red": "18,40",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo Minimit Kassette",  //mit Kassette -->zum Kleben
    "system": "Maß_DoppelRollo",
    "hoehe": "1400",
    "breite": "1000",
    "befestigung": "Holzfenster",
    "bedienseite": "rechts",
    "kugelkette": "Metall", //+21
    "kassettenfarbe": "goldeiche",  // --> D "Preis Kassettenfarbe" = ( ("Preis D" + "Aufpreis D") - ("Preis S" + "Aufpreis S") )

    "anzahl": 2,
    "grundpreis": 284,  // D1
    "kettenpreis": 21,
    "kassFarbenpreis": 30,  //D1 ==> = (284 + 16) - (260 + 10)  = 300 - 270 = 30  wird rabattiert
    "discount": 0.4,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, //20,00 /119 *121

    "login": "guest",
    "prefix": "Frau",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria1@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "113314",
    "city": "Barcelona",
    "state": "Spanien",  //ES --> 21%
    "phone": "360489",
    "shipping": "same",
    "payment": "bankpayment"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Doppelrollo = new Doppelrollo(page)
    await new_Doppelrollo.startFromProductPage(testcase)
    await new_Doppelrollo.configureDoppelrollo(testcase)

}) 