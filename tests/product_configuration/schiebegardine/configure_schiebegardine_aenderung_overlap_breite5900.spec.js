import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Overlap_Bambou-7344",
    "produkt": "/schiebegardinen/bambou-7344", //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "30,10", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Bambou-7344",
    "hoehe": "2600",
    "breite": "5900",  // 6 Paneele --> panBreite X1= (5900-50) :6 |+50 = 1025
    "pan_anpassen": true,
    "schiene": 185,
    "panAnzahl": "6", // preselected for 2600x5900

    "overlap_0": "50",  // preselected for 2600x5900
    "panBreite_0": "1025", // preselected for 2600x5900
    "price_0": "230", // 2600x1025 --> 230,00

    "overlap_1": "10", // 6 Paneele --> panBreite X1= (5900-10) :6 |+10 = 992
    "panBreite_1": "992",
    "price_1": "209", // 2600x992 --> 209,00

    "overlap_2": "40", // 6 Paneele --> panBreite X1= (5900-40) :6 |+40 = 1017
    "panBreite_2": "1017",
    "price_2": "230", // 2600x1017 --> 230,00

    "overlap_3": "25", // 6 Paneele --> panBreite X1= (5900-25) :6 |+25 = 1005
    "panBreite_3": "1005",
    "price_3": "230", // 2600x1005 --> 230,00
}


test(testcase.name, async ({ page }) => {  // page is a page instance 

    const helper = new Helper_Schiebegardine(page)


    // visit product page
    await page.goto(testcase.produkt)

    // check from prices
    await expect(page.locator('.old-price')).toContainText(testcase.ab_preis)
    await expect(page.locator('.special-price')).toContainText(testcase.ab_preis_red)

    // load configurator
    await page.locator("#configurator-button").click()

    // check Startpreise on configurator
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.ab_preis)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.ab_preis_red)
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.ab_preis)
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.ab_preis_red)

    // set SG Typ
    await page.getByText(testcase.modell).first().click();

    // set Breite
    await page.locator('#breite_in_mm input').fill(testcase.breite);

    // set Höhe
    await page.locator('#hoehe_in_mm input').fill(testcase.hoehe);

    // check starting values
    await helper.checkAnzahlPaneele(testcase.panAnzahl);
    await helper.checkPaneelBreite(testcase.panAnzahl, testcase.pan_anpassen, testcase.panBreite_0);
    await helper.checkOverlap(testcase.overlap_0);
    await helper.checkOriginalpreis(testcase.panAnzahl, testcase.price_0, testcase.schiene);

    // change overlap and check
    await helper.setOverlap(testcase.overlap_1)
    await helper.checkAnzahlPaneele(testcase.panAnzahl);
    await helper.checkPaneelBreite(testcase.panAnzahl, testcase.pan_anpassen, testcase.panBreite_1);
    await helper.checkOriginalpreis(testcase.panAnzahl, testcase.price_1, testcase.schiene)

    // change overlap and check
    await helper.setOverlap(testcase.overlap_2)
    await helper.checkAnzahlPaneele(testcase.panAnzahl);
    await helper.checkPaneelBreite(testcase.panAnzahl, testcase.pan_anpassen, testcase.panBreite_2);
    await helper.checkOriginalpreis(testcase.panAnzahl, testcase.price_2, testcase.schiene)

    // change overlap and check
    await helper.setOverlap(testcase.overlap_3)
    await helper.checkAnzahlPaneele(testcase.panAnzahl);
    await helper.checkPaneelBreite(testcase.panAnzahl, testcase.pan_anpassen, testcase.panBreite_3);
    await helper.checkOriginalpreis(testcase.panAnzahl, testcase.price_3, testcase.schiene)

})
