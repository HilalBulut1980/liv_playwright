import { test } from 'playwright/test'
import { Plissee } from '../../support/configurator_plissee'

const testcase = {
    "name": "LIVConfig. - VS3SD - Winkel",
    "produkt": "Armonico 1726",
    "ab_preis": "75,00", //PG1
    "ab_preis_red": "41,25",  //Regel 1 -45%
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS3 SD",
    "befestigung": "Montage am Fensterflügel mit Winkeln",
    "system": "Cosiflor",
    "hoehe": "1100",
    "breite": "1000",  //--> 1100x1000 --> PG1 --> 158,00 Regel 1-45% = 86,90
    "unterer_Stoff": "Wabe Glow 2165",  //--> 1100x1000 --> PG4 --> 230,00 Regel 1 -45% = 126,50
    "schienenfarbe": "Bronze",

    "anzahl": 3,
    "grundpreis": 158,
    "grundpreis_2": 230,
    "bediengriff_preis": 0, 
    "bedienstab_preis": 0,  
    "zusatz_preis": 0,  
    "discount": 0.55,
    "discount_2": 0.55,
    "vat": 120,
    "mwst_1": 20,
    "versandkosten": 15.02,

    "login": "guest",
    "password": "",
    "prefix": "Herr",
    "company_name": "",
    "prefix_business": "",
    "first_name": "Manuel",
    "last_name": "Totvic",
    "email": "manny@delphinus-test.de",
    "street": "Waldweg 99",
    "postal_code": "1110",
    "city": "Graz",
    "state": "Österreich",
    "phone": "",
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