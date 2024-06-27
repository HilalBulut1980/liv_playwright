import { test } from 'playwright/test'
import { Holzjalousie } from '../../support/configurator_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._50_Wand_Leiterkordel",
    "produkt": "/holzjalousien",
    "ab_preis": "130,00",
    "ab_preis_red": "58,50", //da im konf. 6568 vorselektiert ist
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "50mm",
    "farbe": "Modern Olivbraun 6536",  //PG M
    "hoehe": "1800",
    "breite": "2400",
    "befestigung": "An der Wand",
    "lamellenverbindung": "Leiterkordel",
    "bedientyp": "Kugelkette aus Metall",  //+21 Monocommando
    "farbe_seitenblende": "Grau",
    "farbe_kette": "Silber",
    "bedienseite": "Bedienung links",
    "pendelsicherung": "mit Pendelsicherung",  //+32

    "anzahl": 3,
    "grundpreis": 1337,  // PG M
    "leiterband": 0,
    "kette": 21,
    "klemm_oben": 0,
    "pendel": 32,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.5,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 71.17, // 70/119*121 --> eigentlich 70.18

    "login": "guest",
    "password": "",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria@delphinus-test.de",
    "street": "Karlsplatz 8",
    "postal_code": "456376",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1604919",
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 8",
    "postal_code2": "456376",
    "city2": "Barcelona",
    "state2": "Spanien",
    "phone2": "1604919",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Holzjalousie = new Holzjalousie(page)
    await new_Holzjalousie.configureHolzjalousie(testcase)

}) 