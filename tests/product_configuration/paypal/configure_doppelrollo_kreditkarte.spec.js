import { test } from 'playwright/test'
import { Doppelrollo } from '../../support/configurator_doppelrollo'

const testcase = {
    "name": "LIVConfig. - doppelRollo_Maß - credit card",
    "produkt": "Striscia 5041",
    "ab_preis":"60,00",  //Doppelrollo Mini zum Klemmen Startpreis PG2
    "ab_preis_red":"24,00",  // Regel 18 -60%
    "supplier": "Anwis",
    "rollotyp": "Doppelrollo mit Kassette",
    "system": "Maß_DoppelRollo",
    "hoehe": "1400",
    "breite": "1200",
    "befestigung": "Montage an der Decke",
    "bedienseite": "rechts",
    "kugelkette": "Kunststoff",
    "kassettenfarbe": "grau",

    "anzahl": 3,
    "grundpreis": 652,
    "kettenpreis": 0, //da Kunststoff
    "kassFarbenpreis": 0,  //ohne Kassette
    "discount": 0.4,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, //20,00 /119 *121

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "189550",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "637029",
    "shipping": "same",
    "prefix2": "",
    "first_name2": "",
    "last_name2": "",
    "street2": "",
    "postal_code2": "",
    "city2": "",
    "state2": "",
    "phone2": "",
    "payment": "Kreditkarte"
}


test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Doppelrollo = new Doppelrollo(page)
    await new_Doppelrollo.startFromConfigurator(testcase)
    await new_Doppelrollo.configureDoppelrollo(testcase)

}) 