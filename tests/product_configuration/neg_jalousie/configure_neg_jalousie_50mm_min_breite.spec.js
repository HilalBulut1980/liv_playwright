import { test } from 'playwright/test'
import { NEG_Jalousie} from '../../support/configurator_neg_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_50_minBreite",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Eiche 6100",
    "hoehe": "1500",
    "breite": "300",
    "hoehe_new": "1500",
    "breite_new": "450",
    "befestigung": "An der Decke",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 450 mm und 3300 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Jalousie = new NEG_Jalousie(page)
    await neg_Jalousie.configure_neg_jalousie(testcase)

}) 