import { test } from 'playwright/test'
import { Fliegengitter } from '../../support/configurator_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Rechteck_im_Rahmen",
    "produkt": "insektenschutz/fliegengitter",
    "ab_preis": "64,40", //da Walnuss --> 46 + 40% (46, da jetzt mit LIV-4696 erst der Einbau bestimmt wird --> 'einbaufertig' --> 46,00)
    "ab_preis_red": "48,30",//-25%
    "supplier": "Anwis",
    "einbau": "Fliegengitter einbaufertig",
    "form": "Rechteck",
    "hoehe": "2000",
    "breite": "1600",  // --> 310,00
    "farbe": "Walnuss",
    "netzfarbe": "schwarz",
    "befestigung": "Montage im Rahmen",
    "halterung": "18 mm",

    "anzahl": 3,
    "grundpreis": 434,  // 310 + 40% (124,00)  = 434
    "discount": 0.75,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 70.58,  // 70/119 *120 eigentlich 70,59

    "login": "register",
    "password": "testpassw4",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria2@delphinus-test.de",
    "street": "Karlsplatz 4",
    "postal_code": "151432",
    "city": "Wien",
    "state": "Österreich",
    "phone": "498759",
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