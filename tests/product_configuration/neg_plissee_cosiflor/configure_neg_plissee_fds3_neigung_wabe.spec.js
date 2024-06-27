import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-fds3_neigung_wabe",
    "produkt": "plissee/wabe-comfort-1466",
    "produktgruppe": "Plissees mit Sonderform",
    "modell": "FDS3",
    "system": "Cosiflor",
    "hoehe": "1500",
    "breite": "300",
    "hoehe_new": "1050",
    "breite_new": "1300",
    "ausrichtung": "links",
    "schienenfarbe": "Weiß",
    "message": "Der Neigungswinkel muss zwischen 5° und 40° liegen. Bitte überprüfen Sie die Angaben für Breite und Höhe - falls diese korrekt sind, ist der gewählte Plisseetyp leider für ihr Fenster nicht geeignet."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 