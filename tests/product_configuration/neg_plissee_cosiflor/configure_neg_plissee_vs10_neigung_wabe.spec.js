import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs10D_neigung_wabe",
    "produkt": "plissee/wabe-comfort-1466",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "VS10",
    "system": "Cosiflor",
    "hoehe": "1900",
    "breite": "300",
    "breite_new": "700",
    "ausrichtung": "links",
    "message": "Der Neigungswinkel muss zwischen 25° und 70° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 