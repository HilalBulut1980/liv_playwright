import { test } from 'playwright/test'
import { NEG_Fliegengitter } from '../../support/configurator_neg_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Maß_maxBreite_1600",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter einbaufertig",
    "farbe": "Walnuss",
    "netzfarbe": "schwarz",
    "hoehe": "2400",
    "breite": "1601",
    "hoehe_new": "2400",
    "breite_new": "1600",
    "message": "Die maximale Höhe beträgt 2400 mm und die maximale Breite beträgt 1600 mm. Alternativ können wir Fliegengitter bis zu einer Höhe von 1600 mm fertigen, wenn die Breite maximal 2200 mm beträgt."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Fliegengitter = new NEG_Fliegengitter(page)
    await neg_Fliegengitter.configure_neg_fliegengitter(testcase)

}) 