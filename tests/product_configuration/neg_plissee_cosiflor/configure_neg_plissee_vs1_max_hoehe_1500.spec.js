import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-vs1_hoehe_max2",
    "produkt": "/plissee/color-breeze-1358",
    "produktgruppe": "rechteckige Plissees",
    "modell": "VS1",
    "system": "Cosiflor",
    "hoehe": "1600",
    "breite": "1300",
    "hoehe_new": "1500",
    "schienenfarbe": "Schwarz-Braun",
    "message": "Die maximale Höhe und Breite beträgt jeweils 1500 mm. Alternativ können wir Plissees bis zu einer Höhe von 2200 mm fertigen, wenn die Breite maximal 1200 mm beträgt."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 