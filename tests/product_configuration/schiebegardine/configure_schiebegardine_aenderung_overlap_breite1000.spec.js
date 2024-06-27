import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Overlap_Pika-7327",
    "produkt": "/schiebegardinen/pika-7327",  //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "23,10", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Pika-7327",
    "hoehe": "2000",
    "breite": "1000", // 2 Paneele --> panBreite X1= (1000-50) :2 |+50 = 525
    "pan_anpassen": true,
    "schiene": 46,
    "panAnzahl": "2", // preselected for 2000x1000

    "overlap_0": "50",  // preselected for  2000x1000
    "panBreite_0": "525", // preselected for  2000x1000
    "price_0": "86", // 2000x525 --> 86,00

    "overlap_1": "0", // 2 Paneele --> panBreite X1= (1000-0) :2 |+0 = 500
    "panBreite_1": "500",
    "price_1": "76", // 2000x500--> 76,00

    "overlap_2": "-10", // 2 Paneele --> panBreite X1= (1000- - 10) :2 |-10 = 495
    "panBreite_2": "495",
    "price_2": "76", // 2000x495--> 76,00

    "overlap_3": "150", // 2 Paneele --> panBreite X1= (1000-150) :2 |+150 = 575
    "panBreite_3": "575",
    "price_3": "86", // 2000x575 --> 86,00
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

