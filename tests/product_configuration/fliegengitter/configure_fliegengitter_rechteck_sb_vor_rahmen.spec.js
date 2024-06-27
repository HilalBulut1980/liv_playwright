import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_SB_vor_Rahmen",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "35,00",
    "ab_preis_red": "26,25",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter SB - zum selber zusammenbauen",
    "befestigung": "Montage vor dem Rahmen",
    "farbe": "Anthrazit",
    "netzfarbe": "schwarz",
    "hoehe": "1900",
    "breite": "900",
    "vorrichtung": "",
    "halterung": "9 mm",

    "anzahl": 3,
    "grundpreis": 162,
    "discount": 0.75,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 71.17,  //70/119 *121  

    "login": "register",
    "password": "testpassw2",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria1@delphinus-test.de",
    "street": "Karlsplatz 5",
    "postal_code": "113314",
    "city": "Barcelona",
    "state": "Spanien",
    "phone": "360489",
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