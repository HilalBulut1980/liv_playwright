import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelanlanzahl_Piara-7281",
    "produkt": "/schiebegardinen/piara-7281",  //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "23,10", // --> 30%
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Piara-7281",
    "hoehe": "2000",
    "breite": "2500",
    "pan_anpassen": true,
    "schiene": 85,  //bis 2600mm

    "overlap_0": "51",
    "paneelAnzahl_0": "3",
    "panBreite_0": "867", // --> panBreite X1= (2500-50) :3 |+50 = 867
    "price_0": "114", // 2000x867 --> 114,00

    "overlap_1": "51",  //configurator chooses 51 instead of 50
    "paneelAnzahl_1": "4",
    "panBreite_1": "663", // --> panBreite X1= (2500-50) :4 |+50 = 663
    "price_1": "94", // 2000x663--> 94,00

    "overlap_2": "50",
    "paneelAnzahl_2": "5",
    "panBreite_2": "540",
    "price_2": "86", // 2000x540 --> 86,00
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
    await helper.checkAnzahlPaneele(testcase.paneelAnzahl_0);
    await helper.checkPaneelBreite(testcase.paneelAnzahl_0, testcase.pan_anpassen, testcase.panBreite_0);
    await helper.checkOverlap(testcase.overlap_0);
    await helper.checkOriginalpreis(testcase.paneelAnzahl_0, testcase.price_0, testcase.schiene);

    // change anzahl paneele and check
    await helper.setAnzahlPaneele(testcase.paneelAnzahl_1)
    await helper.checkPaneelBreite(testcase.paneelAnzahl_1, testcase.pan_anpassen, testcase.panBreite_1);
    await helper.checkOverlap(testcase.overlap_1);
    await helper.checkOriginalpreis(testcase.paneelAnzahl_1, testcase.price_1, testcase.schiene)

    // change anzahl paneele and check
    await helper.setAnzahlPaneele(testcase.paneelAnzahl_2)
    await helper.checkPaneelBreite(testcase.paneelAnzahl_2, testcase.pan_anpassen, testcase.panBreite_2);
    await helper.checkOverlap(testcase.overlap_2);
    await helper.checkOriginalpreis(testcase.paneelAnzahl_2, testcase.price_2, testcase.schiene)
})