import { test } from 'playwright/test'
import { NEG_Rollo } from '../../support/configurator_neg_rollo'

const testcase = {
    "name": "LIV-rollo_DF_Velux_and.Produkt_B_max",
    "produkt": "/rollo/basic-dimout-3027",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Velux",
    "df_produkt": "anderes Produkt",
    "df_falzart": "Schräger Falz",
    "df_fluegelbreite": "1200",
    "df_fluegelhoehe": "1000",
    "df_fluegelbreite_new": "1100",
    "df_fluegelhoehe_new": "1000",
    "message": "Die maximale Breite eines Rollos beträgt 1100 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Rollo = new NEG_Rollo(page)
    await neg_Rollo.configure_neg_rollo(testcase)

}) 