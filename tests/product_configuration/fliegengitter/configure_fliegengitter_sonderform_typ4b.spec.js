import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform_4B",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "219,80", //Startpreis für Typ4 157,00 +40% da Goldeiche
    "ab_preis_red": "164,85",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 4B", //Viereck links
    "hoehe_links": "1300",
    "hoehe_rechts": "700",
    "breite_oben": "1000",
    "breite_unten": "1800",
    "farbe": "Goldeiche",
    "netzfarbe": "schwarz",
    "befestigung": "Montage im Rahmen",
    "halterung": "25 mm",

    "anzahl": 3,
    "grundpreis": 1024.80,  // 732 + 40% (292,80) = 1024,80
    "discount": 0.75,
    "vat": 124,
    "mwst_1": 24,
    "versandkosten": 72.94, // 70 /119 *124

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Sven",
    "last_name": "Henderson",
    "email": "sven@delphinus-test.de",
    "street": "Valhalla Street 66",
    "postal_code": "9587",
    "city": "Helsinki",
    "state": "Finnland",
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