import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform_4A",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "157,00", //Startpreis für Typ4 
    "ab_preis_red": "117,75",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 4A", //Viereck rechts
    "hoehe_links": "1000",
    "hoehe_rechts": "1900",
    "breite_oben": "800",
    "breite_unten": "1300",
    "farbe": "Anthrazit",
    "netzfarbe": "grau",
    "befestigung": "Montage im Rahmen",
    "halterung": "25 mm",

    "anzahl": 4,
    "grundpreis": 748,  
    "discount": 0.75,
    "vat": 122,
    "mwst_1": 22,
    "versandkosten": 71.76, //   70 /119 *122

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Mirco",
    "last_name": "Tadella",
    "email": "mirco@delphinus-test.de",
    "street": "Via del Mundo 55",
    "postal_code": "5287",
    "city": "Mailand",
    "state": "Italien",
    "phone": "874521",
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

    const new_Fliegengitter = new Fliegengitter(page)
    await new_Fliegengitter.configureFliegengitter(testcase)

})