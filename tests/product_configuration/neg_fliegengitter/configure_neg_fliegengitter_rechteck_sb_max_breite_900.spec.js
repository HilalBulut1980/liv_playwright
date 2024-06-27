import { test } from 'playwright/test'
import { NEG_Fliegengitter } from '../../support/configurator_neg_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_SB_maxBreite_900",
    "produkt": "insektenschutz/fliegengitter",
    "supplier": "Anwis",
    "form": "Rechteck",
    "einbau": "Fliegengitter SB - zum selber zusammenbauen",
    "farbe": "Goldeiche",
    "netzfarbe": "grau",
    "hoehe": "1900",
    "breite": "901",
    "hoehe_new": "1900",
    "breite_new": "900",
    "message": "Die maximale Höhe beträgt 2000 mm und die maximale Breite beträgt 900 mm. Alternativ können wir Fliegengitter bis zu einer Höhe von 1600 mm fertigen, wenn die Breite maximal 1800 mm beträgt. Alternativ können Sie das Modell \"Fliegengitter einbaufertig\" mit bis zu 2400 mm Höhe wählen."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Fliegengitter = new NEG_Fliegengitter(page)
    await neg_Fliegengitter.configure_neg_fliegengitter(testcase)

}) 