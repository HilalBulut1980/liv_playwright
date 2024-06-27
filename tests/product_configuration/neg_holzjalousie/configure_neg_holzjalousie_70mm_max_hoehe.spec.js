import { test } from 'playwright/test'
import { NEG_Holzjalousie} from '../../support/configurator_neg_holzjalousie'

const testcase = {
    "name": "LIVConfig. - Holzjal._70_Schnur_H_max",
    "produkt": "/jalousie/holz-jalousie-konfigurator",
    "supplier": "Anwis",
    "system": "Maß_Holzjalousie",
    "produktgruppe": "70 mm",
    "farbe": "Natural Anthrazit 6561",
    "hoehe": "4000",
    "breite": "2500",
    "hoehe_new": "3600",
    "breite_new": "2500",
    "befestigung": "An der Mauer",
    "bedientyp": "Schnurbedienung",
    "message": "Bitte geben Sie die Höhe in Millimeter im Bereich von 300 mm und 3600 mm ein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Holzjalousie = new NEG_Holzjalousie(page)
    await neg_Holzjalousie.configure_neg_holzjalousie(testcase)

}) 