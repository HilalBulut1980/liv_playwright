import { test } from 'playwright/test'
import { NEG_Fliegengitter } from '../../support/configurator_neg_fliegengitter'

const testcase = {
    "name": "LIVConfig. - Fliegengitter_Sonderform3B_maxBreite",
    "produkt": "insektenschutz/fliegengitter",
    "form": "Sonderform",
    "einbau": "Fliegengitter einbaufertig",
    "typ": "Typ 3B",
    "hoehe_links": "1500",
    "hoehe_rechts": "1000",
    "breite": "1301",
    "breite_new": "1300",
    "message": "Die maximale Höhe beträgt 2000 mm und die maximale Breite beträgt 1300 mm. Alternativ können wir Fliegengitter bis zu einer Höhe von 1300 mm fertigen, wenn die Breite maximal 2000 mm beträgt."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Fliegengitter = new NEG_Fliegengitter(page)
    await neg_Fliegengitter.configure_neg_fliegengitter(testcase)

}) 