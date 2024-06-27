import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Rechteck_vor_Rahmen",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "64,40", //da Walnuss --> 46 + 40% (46, da jetzt mit LIV-4696 erst der Einbau bestimmt wird --> 'einbaufertig' --> 46,00)
    "ab_preis_red": "48,30",  //-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Rechteck",
    "hoehe": "2000",
    "breite": "1000",
    "farbe": "Goldeiche", //+40%
    "netzfarbe": "schwarz",
    "befestigung": "Montage vor dem Rahmen",
    "halterung": "25 mm",

    "anzahl": 2,
    "grundpreis": 376.60,  // 269 + 40% (107,60) = 348,60
    "discount": 0.75,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82,  // 70/119*100

    "login": "register",
    "password": "testpassw3",
    "prefix": "geschaeftskunde",
    "company_name": "Test3 GmbH",
    "prefix_business": "Herr",
    "first_name": "Max",
    "last_name": "Mustermann",
    "email": "test2@delphinus-test.de",
    "street": "Lange Reihe 59",
    "postal_code": "22043",
    "city": "Hamburg",
    "state": "Deutschland",
    "phone": "429624",
    "shipping": "new",
    "prefix2": "Frau",
    "first_name2": "Maria",
    "last_name2": "Müller",
    "street2": "Lange Reihe 59",
    "postal_code2": "2587",
    "city2": "Basel",
    "state2": "Schweiz",
    "phone2": "429624",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Fliegengitter = new Fliegengitter(page)
    await new_Fliegengitter.configureFliegengitter(testcase)

})