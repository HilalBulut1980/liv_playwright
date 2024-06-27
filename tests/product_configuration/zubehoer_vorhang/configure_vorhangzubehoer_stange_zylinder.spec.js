import { test } from 'playwright/test'
import { Zubehoer_Vorhang } from '../../support/configurator_zubehoer_vorhang'

const testcase = {
    "name": "LIVConfig. - Vorhangzubehör - Stange_Zylinder_2-läufig",
    "produkt": "/gardinenstangen/zylinder2",
    "farbe": "Edelstahl",
    "system": "Zubehör_V",
    "breite": "200",

    "anzahl": 2,
    "grundpreis": 49.99,
    "discount": 0.85,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.03,

    "login": "register",
    "password": "testpassw10",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria5@delphinus-test.de",
    "street": "Karlsplatz 6",
    "postal_code": "380140",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1328379",
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

    const new_Zubehoer_Vorhang = new Zubehoer_Vorhang(page)
    await new_Zubehoer_Vorhang.configureZubehoer_Vorhang(testcase)

}) 