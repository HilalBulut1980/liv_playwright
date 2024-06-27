import { test } from 'playwright/test'
import { NEG_Jalousie} from '../../support/configurator_neg_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_50_maxHoehe",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "50mm",
    "farbe": "Orangebraun 6092",
    "hoehe": "5000",
    "breite": "2000",
    "hoehe_new": "2800",
    "breite_new": "2000",
    "befestigung": "An der Decke",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 3800 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Jalousie = new NEG_Jalousie(page)
    await neg_Jalousie.configure_neg_jalousie(testcase)

}) 