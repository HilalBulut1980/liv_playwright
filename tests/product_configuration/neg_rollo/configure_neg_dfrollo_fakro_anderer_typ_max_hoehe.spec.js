import { test } from 'playwright/test'
import { NEG_Rollo } from '../../support/configurator_neg_rollo'

const testcase = {
    "name": "LIV-rollo_DF_Fakro_and.Typ_H_max",
    "produkt": "/rollo/basic-3008",
    "supplier": "Anwis",
    "rollotyp": "Dachfensterrollos",
    "system": "Maß_Rollo",
    "df_hersteller": "Fakro",
    "df_produkt": "PTP",
    "df_typ": "anderer Typ",
    "df_falzart": "Schräger Falz",
    "df_fluegelbreite": "1000",
    "df_fluegelhoehe": "3000",
    "df_fluegelbreite_new": "1000",
    "df_fluegelhoehe_new": "1500",
    "message": "Die maximale Höhe eines Rollos beträgt 1500 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Rollo = new NEG_Rollo(page)
    await neg_Rollo.configure_neg_rollo(testcase)

}) 