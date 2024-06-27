import { test } from 'playwright/test'
import { NEG_Jalousie} from '../../support/configurator_neg_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_25_maxBreite",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "25mm",
    "farbe": "Blütenweiß glänzend 6051",
    "hoehe": "1500",
    "breite": "2500",
    "hoehe_new": "1500",
    "breite_new": "2400",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Breite in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Jalousie = new NEG_Jalousie(page)
    await neg_Jalousie.configure_neg_jalousie(testcase)

}) 