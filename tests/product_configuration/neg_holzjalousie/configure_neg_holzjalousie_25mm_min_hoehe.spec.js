import { test } from 'playwright/test'
import { NEG_Holzjalousie} from '../../support/configurator_neg_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._25_Schnur_H_min",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "25 mm",
    "farbe": "Natural Braun 6503",
    "hoehe": "50",
    "breite": "2000",
    "hoehe_new": "300",
    "breite_new": "2000",
    "befestigung": "Auf dem Fensterflügel mit Klemmträgern",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 2200 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Holzjalousie = new NEG_Holzjalousie(page)
    await neg_Holzjalousie.configure_neg_holzjalousie(testcase)

}) 