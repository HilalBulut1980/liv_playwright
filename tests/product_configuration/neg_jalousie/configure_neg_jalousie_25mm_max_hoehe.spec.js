import { test } from 'playwright/test'
import { NEG_Jalousie} from '../../support/configurator_neg_jalousie'

const testcase = {
    "name": "LIVConfig. - Jalousie_25_maxHoehe",
    "produkt": "jalousien",
    "supplier": "Anwis",
    "system": "Maß_Jalousie",
    "produktgruppe": "25mm",
    "farbe": "Rose 6035",
    "hoehe": "2500",
    "breite": "1500",
    "hoehe_new": "2400",
    "breite_new": "1500",
    "befestigung": "In der Glasleiste",
    "bedientyp": "Kugelkette aus Metall",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2400 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Jalousie = new NEG_Jalousie(page)
    await neg_Jalousie.configure_neg_jalousie(testcase)

}) 