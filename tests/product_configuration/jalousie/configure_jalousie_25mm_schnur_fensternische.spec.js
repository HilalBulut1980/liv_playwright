import { test } from 'playwright/test'
import { Jalousie } from '../../support/configurator_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_25_Schnur_Fensternische",
    "produkt": "jalousien",
    "ab_preis": "39,00",
    "ab_preis_red": "15,60",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "25mm",
    "farbe": "Lachs Metall matt 6038",  //PG 0
    "hoehe": "2400",
    "breite": "1200",
    "befestigung": "In der Fensternische",
    "bedientyp": "Schnurbedienung",
    "farbe_ketteUndBlende": "",
    "farbe_kette": "",
    "farbe_seitenblende": "",
    "bedienseite": "Wendestab rechtsBedienung links",
    "pendelsicherung": "",

    "anzahl": 1,
    "grundpreis": 263,
    "kette": 0,
    "klemm_oben": 0,
    "pendel": 0,
    "klemm_unten": 0,  //nur wenn bei Befestigung Klemmträger eine Pendels. mitbestellt wird
    "discount": 0.4,
    "vat": 121,
    "mwst_1": 21,
    "versandkosten": 71.17,  // 70,00, da 2400/3*2= 1600 und somit > Breite und >1500 

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
    "shipping": "new",
    "prefix2": "Herr",
    "first_name2": "Max",
    "last_name2": "Mustermann",
    "street2": "Karlsplatz 6",
    "postal_code2": "380140",
    "city2": "Barcelona",
    "state2": "Spanien",
    "phone2": "1328379",
    "payment": "bankpayment"
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const new_Jalousie = new Jalousie(page)
    await new_Jalousie.configureJalousie(testcase)

}) 