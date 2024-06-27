import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_SB_im_Rahmen",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "35,00",
    "ab_preis_red": "26,25",  //-25%
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter SB - zum selber zusammenbauen",
    "befestigung": "Montage im Rahmen",
    "farbe": "Braun",
    "netzfarbe": "grau",
    "hoehe": "1800",
    "breite": "800",
    "vorrichtung": "",
    "halterung": "5 mm",

    "anzahl": 2,
    "grundpreis": 144,
    "discount": 0.75,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,  

    "login": "register",
    "password": "Abcde_12345",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test1@delphinus-test.de",
    "street": "Lange Reihe 60",
    "postal_code": "9455",
    "city": "Basel",
    "state": "Schweiz",
    "phone": "291354",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 60",
    "postal_code2": "22043",
    "city2": "Hamburg",
    "state2": "Deutschland",
    "phone2": "291354",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Fliegengitter = new Fliegengitter(page)
    await new_Fliegengitter.configureFliegengitter(testcase)

})