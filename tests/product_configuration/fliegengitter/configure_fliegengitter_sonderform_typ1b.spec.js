import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform_1B",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "219,80", //// Startpreis Typ1 157,00 da Mahagoni +40%
    "ab_preis_red": "164,85",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 1B",  //Dreieck links
    "hoehe": "1300",
    "breite": "1000",
    "farbe": "Mooreiche",
    "netzfarbe": "grau",
    "befestigung": "Montage vor dem Rahmen",
    "halterung": "12 mm",

    "anzahl": 2,
    "grundpreis": 695.80,  //497 + 40% (198,80) = 672
    "discount": 0.75,
    "vat": 119,
    "mwst_1": 19,
    "versandkosten": 0,  

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Tobias",
    "last_name": "Wilken",
    "email": "tobi2@delphinus-test.de",
    "street": "Amsinckstr. 66",
    "postal_code": "20095",
    "city": "Hamburg",
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

    const new_Fliegengitter = new Fliegengitter(page)
    await new_Fliegengitter.configureFliegengitter(testcase)

})