import { Helper_Schiebegardine } from '../../support/helper_schiebegardine'
import { test, expect } from 'playwright/test'


const testcase =
{
    "name": "LIVConfig.-Schiebegardine_Aenderung_Overlap_Philo-7323",
    "produkt": "/schiebegardinen/philo-7323", //PG 1
    "ab_preis": "33,00",// Startpreis aus Preistabelle 33,00
    "ab_preis_red": "23,10", // --> 30% 
    "supplier": "Erfal",
    "system": "Schiebegardine",
    "modell": "Schiebegardine mit Schienensystem",
    "stoff": "Philo-7323",
    "hoehe": "2000",
    "breite": "5000",
    "pan_anpassen": true,
    "schiene": 155,
    "panAnzahl": "5", // preselected for 2000x5000

    "overlap_0": "50",  // preselected for 2000x5000
    "panBreite_0": "1040", // preselected for 2000x5000
    "price_0": "134", // 2000x1040 --> 134,00

    "overlap_1": "100", // 5 Paneele --> panBreite X1= (5000-100) :5 |+100 = 1080
    "panBreite_1": "1080",
    "price_1": "134", // 2000x1080 --> 134,00

    "overlap_2": "70", // 5 Paneele --> panBreite X1= (5000-70) :5 |+70 = 1056
    "panBreite_2": "1056",
    "price_2": "134", // 2000x1056 --> 134,00

    "overlap_3": "200", // 5 Paneele --> panBreite X1= (5000-200) :5 |+200 = 1160
    "panBreite_3": "1160",
    "price_3": "146", // 2000x1160 --> 146,00
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
