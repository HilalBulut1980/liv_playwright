import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS9 D - Winkel",
    "produkt": "Juvel 1954",
    "ab_preis": "75,00", //PG1
    "ab_preis_red": "41,25",  //-45%
    "supplier": "VHG",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS9",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1000",
    "breite": "1200",
    "schienenfarbe": "Weiß",

    "anzahl": 3,
    "grundpreis": 430,
    "grundpreis_2": 0,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "register",
    "password": "testpassw6",
    "prefix": "Frau",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Maria",
    "last_name": "Müller",
    "email": "maria6@delphinus-test.de",
    "street": "Karlsplatz 8",
    "postal_code": "532612",
    "city": "Wien",
    "state": "Österreich",
    "phone": "1881459",
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

    const new_Plissee = new Plissee(page)
    await new_Plissee.startFromConfigurator(testcase)
    await new_Plissee.configurePlissee(testcase)

}) 