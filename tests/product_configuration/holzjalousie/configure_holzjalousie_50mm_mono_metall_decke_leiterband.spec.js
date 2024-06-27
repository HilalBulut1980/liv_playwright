import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._50_Decke_Leiterband",
    "produkt": "/holzjalousien",
    "ab_preis": "130,00",
    "ab_preis_red": "58,50",  //da im konf. 6568 vorselektiert ist
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "50mm",
    "farbe": "Ashen Beigebraun 6551",  //PG A
    "hoehe": "1500",
    "breite": "600",  // --> +421
    "befestigung": "An der Decke",
    "lamellenverbindung": "Leiterband",  // +5% von 421 = 21,05
    "farbe_leiterband": "Orangebraun",
    "bedientyp": "Kugelkette aus Metall",  //Monocommando  +21
    "farbe_kette": "Silber",
    "farbe_seitenblende": "Elfenbein",
    "bedienseite": "Bedienung links",

    "anzahl": 1,
    "grundpreis": 421,  //PG A
    "leiterband": 21.05,  //+5%
    "kette": 21,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 20.34, 

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 9",
    "postal_code": "456377",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1604920",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 9",
    "postal_code2": "456377",
    "city2": "Barcelona",
    "state2": "Spanien",
    "phone2": "1604920",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Holzjalousie = new Holzjalousie(page)
    await new_Holzjalousie.configureHolzjalousie(testcase)

}) 