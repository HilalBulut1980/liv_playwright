import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelanlanzahl_Mica-7340",
    "produkt": "/schiebegardinen/mica-7340",  //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "30,10", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Mica-7340",
    "hoehe": "2200",
    "breite": "3000",
    "pan_anpassen": true,
    "schiene": 94,

    "overlap_0": "51", //configurator chooses 51 instead of 50
    "paneelAnzahl_0": "3",
    "panBreite_0": "1034", // --> panBreite X1= (3000-50) :3 |+50 = 1034
    "price_0": "204", // 2200x1034 --> 204,00

    "overlap_1": "51", //configurator chooses 51 instead of 50
    "paneelAnzahl_1": "7",
    "panBreite_1": "472", // --> panBreite X1= (3000-50) :7 |+50 = 472
    "price_1": "107", // 2200x472 --> 107,00

    "overlap_2": "50",
    "paneelAnzahl_2": "5",
    "panBreite_2": "640", // --> panBreite X1= (3000-50) :5 |+50 = 640
    "price_2": "138", // 2200x640 --> 138,00

    "overlap_3": "51", //configurator chooses 51 instead of 50
    "paneelAnzahl_3": "4",
    "panBreite_3": "788", // --> panBreite X1= (3000-50) :4 |+50 = 788
    "price_3": "157", // 2200x788 --> 157,00
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

    // change anzahl paneele and check
    await helper.setAnzahlPaneele(testcase.paneelAnzahl_3)
    await helper.checkPaneelBreite(testcase.paneelAnzahl_3, testcase.pan_anpassen, testcase.panBreite_3);
    await helper.checkOverlap(testcase.overlap_3);
    await helper.checkOriginalpreis(testcase.paneelAnzahl_3, testcase.price_3, testcase.schiene)
})