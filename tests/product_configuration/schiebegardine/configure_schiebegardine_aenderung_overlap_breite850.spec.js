import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Overlap_Aris-7351",
    "produkt": "/schiebegardinen/aris-7351",  //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "30,10", // --> 30% =21,50
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Aris-7351",
    "hoehe": "1500",
    "breite": "850",  // 2 Paneele --> panBreite X1= (850-50) :2 |+50 = 450
    "pan_anpassen": true,
    "schiene": 46,
    "panAnzahl": "2", // preselected for 1500x850

    "overlap_0": "50",  // preselected for  1500x850
    "panBreite_0": "450", // preselected for  1500x850
    "price_0": "90", // 1500x450 --> 90,00

    "overlap_1": "100", // 2 Paneele --> panBreite X1= (850-100) :2 |+100 = 475
    "panBreite_1": "475",
    "price_1": "90", // 1500x475--> 90,00

    "overlap_2": "70", // 2 Paneele --> panBreite X1= (850-70) :5 |+70 = 460
    "panBreite_2": "460",
    "price_2": "90", // 1500x460--> 90,00

    "overlap_3": "200", // 2 Paneele --> panBreite X1= (850-200) :5 |+200 = 525
    "panBreite_3": "525",
    "price_3": "132", // 1500x525 --> 132,00
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
