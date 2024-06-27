import { test } from 'playwright/test'
import { NEG_Holzjalousie} from '../../support/configurator_neg_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._70_Schnur_B_min",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "70 mm",
    "farbe": "Natural Rehbraun 6557",
    "hoehe": "3500",
    "breite": "400",
    "hoehe_new": "3500",
    "breite_new": "450",
    "befestigung": "An der Decke",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 450 mm und 2900 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Holzjalousie = new NEG_Holzjalousie(page)
    await neg_Holzjalousie.configure_neg_holzjalousie(testcase)

}) 