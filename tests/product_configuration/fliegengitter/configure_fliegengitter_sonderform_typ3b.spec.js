
import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform_3B",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "219,80", //Startpreis für Typ3 157,00 +40% da Mahagoni
    "ab_preis_red": "164,85",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 3B", //Viereck links
    "hoehe_links": "2000",
    "hoehe_rechts": "1200",
    "breite": "1300",
    "farbe": "Mooreiche",
    "netzfarbe": "grau",
    "befestigung": "Montage im Rahmen",
    "halterung": "18 mm",

    "anzahl": 2,
    "grundpreis": 1092,  //780 + 40% (312) = 1092
    "discount": 0.75,
    "vat": 123,
    "mwst_1": 23,
    "versandkosten": 72.35, //  70 /119 *123

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Katheryn",
    "last_name": "Winnick",
    "email": "dkaty@delphinus-test.de",
    "street": "Vikings Street 33",
    "postal_code": "5287",
    "city": "Dublin",
    "state": "Irland",
    "phone": "963258",
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