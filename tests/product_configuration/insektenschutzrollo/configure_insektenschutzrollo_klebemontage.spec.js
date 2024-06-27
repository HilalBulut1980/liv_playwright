import { test } from 'playwright/test'
import { Insektenschutzrollo } from '../../support/configurator_insektenschutzrollo'

const testcase = {
    "name": "LIVConfig. - Insekten.Rollo - Klebemontage",
    "produkt": "insektenschutz/insektenschutz-rollo",
    "ab_preis": "198,65",  //bei Farbe NUSS
    "ab_preis_red": "99,33",//-50%
    "supplier": "Anwis",
    "befestigung": "Klebemontage",
    "farbe": "Nuss",  //+45%
    "netzfarbe": "schwarz",
    "hoehe": "2400",
    "breite": "1300",
    "vorrichtung": "Hakenleiste",

    "anzahl": 1,
    "grundpreis": 714.85,  //493 + 45% --> +221.85
    "discount": 0.5,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 70.59,  //  70,00 /119 *120  //70,00 da dieses Produkt mit Schienen geliefert wird --> Höhe ist ausschlaggebend

    "login": "guest",
    "password": "",
    "prefix": "geschaeftskunde",
    "company_name": "Test2 GmbH",
    "prefix_business": "Frau",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "75196",
    "city": "Wien",
    "state": "Österreich",
    "phone": "222219",
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

    const new_Insektenschutzrollo = new Insektenschutzrollo(page)
    await new_Insektenschutzrollo.configureInsektenschutzrollo(testcase)

}) 