import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform_3D",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "219,80", //Startpreis für Typ3 157,00 +45% da Mooreiche
    "ab_preis_red": "164,85",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 3D", //Viereck rechts
    "hoehe": "2000",
    "breite_oben": "800",
    "breite_unten": "1300",
    "farbe": "Mooreiche",
    "netzfarbe": "schwarz",
    "befestigung": "Montage vor dem Rahmen",
    "halterung": "9 mm",

    "anzahl": 2,
    "grundpreis": 1092,  //780 + 40% (312) = 1092
    "discount": 0.75,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 70.59, //  70 /119 *120

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Marlene",
    "last_name": "Coton",
    "email": "marlene@delphinus-test.de",
    "street": "19, Rue de la Liberté",
    "postal_code": "5287",
    "city": "Paris",
    "state": "Frankreich",
    "phone": "852147",
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