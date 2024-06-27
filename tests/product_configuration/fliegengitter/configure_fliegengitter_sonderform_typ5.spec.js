import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform_5",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "238,00", //Startpreis für Typ5 170,00 +40% da Walnuss
    "ab_preis_red": "178,50",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Sonderform",
    "typ": "Typ 5", //Fünfeck
    "hoehe_teil": "1500",
    "hoehe_gesamt": "2000",
    "breite": "1250",
    "farbe": "Walnuss",
    "netzfarbe": "schwarz",
    "befestigung": "Montage im Rahmen",
    "halterung": "25 mm",

    "anzahl": 3,
    "grundpreis": 1159.20,  //828 + 40% (331,20) = 1159,20
    "discount": 0.75,
    "vat": 100,
    "mwst_1": 0,
    "versandkosten": 58.82,   //70 /119*100

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Magdalena",
    "last_name": "Friedrich",
    "email": "magdalena@delphinus-test.de",
    "street": "Baseler Weg 44",
    "postal_code": "1254",
    "city": "Zürich",
    "state": "Schweiz",
    "phone": "852369",
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