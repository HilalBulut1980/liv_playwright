import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
    "name": "LIV-df30C_finnenbreite_min",
    "produkt": "/plissee/ambience-1543",
    "produktgruppe": "Dachfensterplissees",
    "modell": "DF30 Comfort",
    "system": "Cosiflor",
    "df_switcher": "Ungenormt",
    "unterer_Stoff": "Darken 1568",
    "df_glasbreite": "250",
    "df_glashoehe": "1300",
    "df_falztiefe": "50",
    "df_fluegelbreite": "100",
    "df_fluegelhoehe": "1300",
    "df_fluegelbreite_new": "250",
    "df_falzart": "Gerader Falz",
    "schienenfarbe": "Silber",
    "message": "Die minimale Flügelinnenbreite eines Plissee beträgt 250 mm."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    const neg_Plissee = new NEG_Plissee(page)
    await neg_Plissee.configure_neg_plissee(testcase)

}) 