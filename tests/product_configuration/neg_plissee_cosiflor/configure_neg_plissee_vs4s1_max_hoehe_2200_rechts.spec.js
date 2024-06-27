import { test } from 'playwright/test'
import { NEG_Plissee } from '../../support/configurator_neg_plissee'

const testcase = {
  "name": "LIV-vs4s1_max_height_2200_right",
  "produkt": "/plissee/lunara-1689",
  "produktgruppe": "Plissees mit Sonderform",
  "modell": "VS4 S1",
  "system": "Cosiflor",
  "breite": "1000",
  "hoehe_links": "500",
  "hoehe_rechts": "2300",
  "hoehe_rechts_new": "2200",
  "ausrichtung": "rechts",
  "schienenfarbe": "Weiß",
  "message": "Die rechte Höhe muss kleiner als oder gleich 2200 mm sein."
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

  const neg_Plissee = new NEG_Plissee(page)
  await neg_Plissee.configure_neg_plissee(testcase)

}) 