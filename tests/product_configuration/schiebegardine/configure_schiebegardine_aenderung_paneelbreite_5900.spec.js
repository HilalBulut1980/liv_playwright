import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelbreite_Piara-7280",
    "produkt": "/schiebegardinen/piara-7280", //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "23,10", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Piara-7280",
    "hoehe": "2300",
    "breite": "5900",
    "pan_anpassen": true,
    "schiene": 185,
    "panAnzahl": "6", //preselected for 2500x5900

    //preselected values
    "overlap_0": "50",
    "panBreite_0": "1025", // --> panBreite X1= (5900-50) |:5 |+50 = 1025 
    "price_0": "148", // 2300x1025 --> 148,00

    "panBreite_1": "1000",
    "overlap_1": "20", // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5900 - (6 x 1000)] / - (6-1) = -100 / -5 = 20
    "price_1": "136", // 2300x1000 --> 136,00

    "panBreite_2": "1200",
    "overlap_2": "260", // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5900 - (6 x 1200)] / - (6-1) = -1300 / -5 = 260
    "price_2": "160", // 2300x1200 --> 160,00

    "panBreite_3": "800",
    "overlap_3": "-220", // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5900 - (6 x 800)] / - (6-1) = 1100 / -5 = -220
    "price_3": "115", // 2300x800 --> 115,00

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

    // change breite paneele and check
    await helper.setBreitePaneele(testcase.panAnzahl, testcase.pan_anpassen, testcase.panBreite_1)
    await helper.checkOverlap(testcase.overlap_1);
    await helper.checkOriginalpreis(testcase.panAnzahl, testcase.price_1, testcase.schiene)

    // change anzahl paneele and check
    await helper.setBreitePaneele(testcase.panAnzahl, testcase.pan_anpassen, testcase.panBreite_2)
    await helper.checkOverlap(testcase.overlap_2);
    await helper.checkOriginalpreis(testcase.panAnzahl, testcase.price_2, testcase.schiene)

    // change anzahl paneele and check
    await helper.setBreitePaneele(testcase.panAnzahl, testcase.pan_anpassen, testcase.panBreite_3)
    await helper.checkOverlap(testcase.overlap_3);
    await helper.checkOriginalpreis(testcase.panAnzahl, testcase.price_3, testcase.schiene)
})