import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelbreite_Ginella-7300",
    "produkt": "/schiebegardinen/Ginella-7300", //PG 2
    "ab_preis": "36,00",// Startpreis aus Preistabelle 36,00
    "ab_preis_red": "25,20", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Ginella-7300",
    "hoehe": "2500",
    "breite": "5400",
    "pan_anpassen": true,
    "schiene": 167,
    "panAnzahl": "5", //preselected for 2500x5400

    //preselected values
    "overlap_0": "50",
    "panBreite_0": "1120", // --> panBreite X1= (5400-50) |:5 |+50 = 1120 
    "price_0": "202", // 2500x1120 --> 202,00

    //1st change
    "panBreite_1": "1000",
    "overlap_1": "-100", // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5400 - (5 x 1000)] / - (5-1) = 400 / -4 = -100
    "price_1": "171", // 2500x1000 --> 171,00

    //2nd change
    "panBreite_2": "950",
    "overlap_2": "-162", // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5400 - (5 x 950)] / - (5-1) = 650 / -4 = -162,50
    "price_2": "171", // 2500x950 --> 171,00

    //3rd change
    "panBreite_3": "1050",
    "overlap_3": "-37", // --> Overlap = [Breite - (panAnzahl x panBreite)] / [- (panAnzahl-1)] --> [5400 - (5 x 1050)] / - (5-1) = 150 / -4 = -37,50
    "price_3": "188", // 2500x1050 --> 188,00
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