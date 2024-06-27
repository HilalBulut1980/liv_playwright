import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Paneelanlanzahl_Aris-7350",
    "produkt": "/schiebegardinen/aris-7350",  //PG 3 
    "ab_preis": "43,00",// Startpreis aus Preistabelle 43,00
    "ab_preis_red": "30,10", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Aris-7350",
    "hoehe": "2500",
    "breite": "5000",
    "pan_anpassen": true,
    "schiene": 155,

    "overlap_0": "50",
    "paneelAnzahl_0": "5",
    "panBreite_0": "1040", // --> panBreite X1= (5000-50) |:5 |+50 = 1040
    "price_0": "230", // 2500x1040 --> 230,00

    "overlap_1": "50",
    "paneelAnzahl_1": "6",
    "panBreite_1": "875", // --> panBreite X1= (5000-50) |:6 |+50 = 875
    "price_1": "192", // 2500x875 --> 192,00

    "overlap_2": "51", //configurator chooses 51 instead of 50
    "paneelAnzahl_2": "7",
    "panBreite_2": "758", // --> panBreite X1= (5000-50) |:7 |+50 = 758
    "price_2": "174", // 2500x758 --> 174,00
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