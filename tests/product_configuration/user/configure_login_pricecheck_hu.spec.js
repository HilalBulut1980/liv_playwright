import { test, expect } from 'playwright/test'

const testcase =
{
    "name": "Preis-Check mit Testkonto HU",
    "email": "testkonto_HU@delphinus-test.de",
    "password": "Abcde_12345",

    //category pages

    "categoryPage_1": "/doppelrollo/doppelrollo-grau",
    "productname_1": "Amelio 5102",
    "catPrice_old_1": "64,03",  // 60 / 119 * 127
    "catPrice_special_1": "25,61", // 24 / 119 * 127

    "categoryPage_2": "/rollo/rollo-grau",
    "productname_2": "Samira 3820",
    "catPrice_old_2": "56,56", // 53 * 119 / 127
    "catPrice_special_2": "25,45", // 23,85 / 119 * 127

    "categoryPage_3": "/raffrollo/raffrollo-grau",
    "productname_3": "Umile 9039",
    "catPrice_old_3": "362,86", // 340 / 119 * 127
    "catPrice_special_3": "163,29", // 153 / 119 * 127

    "categoryPage_4": "/plissee/wintergarten-plissee",
    "productname_4": "Baseline 1023",
    "catPrice_old_4": "58,70",  // 55 / 119 * 127
    "catPrice_special_4": "21,61",  // 20,25 * 119 * 127

    "categoryPage_5": "/schiebegardinen/schiebegardinen-beige",
    "productname_5": "Bosna 7292",
    "catPrice_old_5": "45,89",  // 43 / 119 * 127
    "catPrice_special_5": "32,12",  //  30,10 / 119 * 127

    "categoryPage_6": "/dekoschal/dekoschal-transparent",
    "productname_6": "Linna Vorhang",
    "catPrice_old_6": "59,76",  // 56,00 / 119 * 127
    "catPrice_special_6": "29,88",  // 28,00 * 119 * 127

    "categoryPage_7": "/gardinenstangen",
    "productname_7": "Gardinenstange Belamy",
    "catPrice_old_7": "34,15",  // 32 / 119 * 127
    "catPrice_special_7": "29,93",  // 28,04 * 119 * 127


    //product pages

    "productPage_1": "/doppelrollo/modessa-5101",
    "price_old_1": "64,03", // 60 / 119 * 127
    "price_special_1": "25,61", // 24 / 119 * 127

    "productPage_2": "/rollo/blackout-unicolor-3096",
    "price_old_2": "49,09", // 46 / 119 * 127
    "price_special_2": "22,09", // 20,70 / 119 * 1018

    "productPage_3": "/raffrollo/dillio-9070",
    "price_old_3": "362,86", // 340 / 119 * 127
    "price_special_3": "163,29", // 153,00 / 119 * 127

    "productPage_4": "/plissee/darken-1573",
    "price_old_4": "93,92", // 88,00 / 119 * 127
    "price_special_4": "51,65", // 48,40 / 119 * 127

    "productPage_5": "/schiebegardinen/aris-7353",
    "price_old_5": "45,89",     //  43 / 119 * 127
    "price_special_5": "32,12", // 30,10 / 119 * 127

    //jalousie pages

    "product_jal": "/jalousien",
    "price_jal_old1": "52,29", // 49 / 119 * 127
    "price_jal_special1": "20,92", // 19,60 / 119 * 127
    "price_jal_old2": "41,62", // 39 / 119 * 127
    "price_jal_special2": "16,65", // 15,60 / 119 * 127
    "price_jal_old3": "108,86", // 102 / 119 * 127
    "price_jal_special3": "43,54", // 40,80 / 119 * 127

    "product_holzjal": "/holzjalousien",
    "price_hjal_old1": "93,92", // 88 / 119 * 127
    "price_hjal_special1": "46,96", // 44 / 119 * 127
    "price_hjal_old2": "138,74", // 130 / 119 * 127
    "price_hjal_special2": "62,43", // 58,50 / 119 * 127
    "price_hjal_old3": "235,86", // 221 / 119 * 127
    "price_hjal_special3": "117,93", // 110,50 / 119 * 127

    //zubehör categories  

    "zubehoerPage_1": "/plissee/zubehoer",
    "zubehoer1": "Wandwinkel",
    "price_zub1": "5,34", // 5,00 / 119 * 127

    "zubehoerPage_2": "/schiebegardinen/zubehoer",
    "zubehoer2": "Magnetclip aus Kunststoff für Schiebegardinen",
    "price_zub2": "4,26", // 3,99 / 119 * 127

    "zubehoerPage_3": "/rollo/zubehoer",
    "zubehoer3": "Klemmträger für kleine Rollos (Modell RM18) ",
    "price_zub3": "4,27", // 4,00 / 119 * 127

    //div

    "divPage1": "/reparaturauftrag-schnur-ersetzen",
    "price_div1": "32,02", // 30 / 119 * 127

    "divPage2": "/stickfix-klebestreifen-einzeln",
    "price_div2": "8,54", // 8,00 / 119 * 127

    "divPage3": "/seitenfuehrung-b-rm18",
    "price_div3": "4,27", // 4,00 / 119 * 127

    // configurator

    "conf_1": "/insektenschutz/insektenschutz-rollo",
    "confPrice_old1": "146,21",  // 137 / 119 * 127
    "confPrice_special1": "73,11", // 68,50 / 119 * 127

    "conf_2": "/schiebegardinen/schiebegardinen-konfigurator", // Lika 7174 28,00 / 19,60
    "confPrice_old2": "29,88",  //  28 / 119 * 127
    "confPrice_special2": "20,92", //   19,60 / 119 * 127
}

test('login of HU customer with pricecheck of different products', async ({ page }) => {

    //check/create testaccount --- testkonto_HU@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_HU@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Ungarn&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=HU&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Budapest&shipping_country=HU')



    //************************* LOGIN  ******************************/
    //**************************************************************/

    await page.goto('/customer/account/login')

    // await expect(page.locator('#email')).toBeVisible();
    await page.locator('#email').fill(testcase.email);
    // await expect(page.locator('#pass')).toBeVisible(); 
    await page.locator('#pass').fill(testcase.password);
    await page.locator('#send2').click();



    //******************* check category pages  *******************/
    //**************************************************************/

    // check product prices on category page 1
    await page.goto(testcase.categoryPage_1)
    const locator_1 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.productname_1).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_1.locator('.old-price')).toContainText(testcase.catPrice_old_1)
    await expect(locator_1.locator('.special-price')).toContainText(testcase.catPrice_special_1)

    //check product prices on category page 2
    await page.goto(testcase.categoryPage_2)
    const locator_2 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.productname_2).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_2.locator('.old-price')).toContainText(testcase.catPrice_old_2)
    await expect(locator_2.locator('.special-price')).toContainText(testcase.catPrice_special_2)

    //check product prices on category page 3
    await page.goto(testcase.categoryPage_3)
    const locator_3 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.productname_3).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_3.locator('.old-price')).toContainText(testcase.catPrice_old_3)
    await expect(locator_3.locator('.special-price')).toContainText(testcase.catPrice_special_3)

    //check product prices on category page 4
    await page.goto(testcase.categoryPage_4)
    const locator_4 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.productname_4).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_4.locator('.old-price')).toContainText(testcase.catPrice_old_4)
    await expect(locator_4.locator('.special-price')).toContainText(testcase.catPrice_special_4)

    //check product prices on category page 5
    await page.goto(testcase.categoryPage_5)
    const locator_5 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.productname_5).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_5.locator('.old-price')).toContainText(testcase.catPrice_old_5)
    await expect(locator_5.locator('.special-price')).toContainText(testcase.catPrice_special_5)

    //check product prices on category page 6
    await page.goto(testcase.categoryPage_6)
    const locator_6 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.productname_6).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_6.locator('.old-price')).toContainText(testcase.catPrice_old_6)
    await expect(locator_6.locator('.special-price')).toContainText(testcase.catPrice_special_6)

    //    //check product prices on category page 7
    //    await page.goto(testcase.categoryPage_7)
    //    const locator_7 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.productname_7).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    //    await expect(locator_7.locator('.old-price')).toContainText(testcase.catPrice_old_7)
    //    await expect(locator_7.locator('.special-price')).toContainText(testcase.catPrice_special_7)



    //******************* check product pages  **********************/
    //**************************************************************/

    //check product prices on product page 1
    await page.goto(testcase.productPage_1)
    await expect(page.locator('.old-price')).toContainText(testcase.price_old_1)
    await expect(page.locator('.special-price')).toContainText(testcase.price_special_1)

    //check product prices on product page 2
    await page.goto(testcase.productPage_2)
    await expect(page.locator('.old-price')).toContainText(testcase.price_old_2)
    await expect(page.locator('.special-price')).toContainText(testcase.price_special_2)

    //check product prices on product page 3
    await page.goto(testcase.productPage_3)
    await expect(page.locator('.old-price')).toContainText(testcase.price_old_3)
    await expect(page.locator('.special-price')).toContainText(testcase.price_special_3)

    //check product prices on product page 4
    await page.goto(testcase.productPage_4)
    await expect(page.locator('.old-price')).toContainText(testcase.price_old_4)
    await expect(page.locator('.special-price')).toContainText(testcase.price_special_4)

    //check product prices on product page 5
    await page.goto(testcase.productPage_5)
    await expect(page.locator('.old-price')).toContainText(testcase.price_old_5)
    await expect(page.locator('.special-price')).toContainText(testcase.price_special_5)




    //******************* check jalousie and holzjalousie pages  *******************/
    //******************************************************************************/

    // TO DO
    // CHECK IF JALOUSIE PRICES SHOULD ADAPT CUSTOM VATS

    // await page.goto(testcase.product_jal)
    // //16mm
    // await expect(page.locator('.testmenu > div:nth-child(1)')).toContainText(testcase.price_jal_old1)
    // await expect(page.locator('.testmenu > div:nth-child(1)')).toContainText(testcase.price_jal_special1)
    // //25mm
    // await expect(page.locator('.testmenu > div:nth-child(2)')).toContainText(testcase.price_jal_old2)
    // await expect(page.locator('.testmenu > div:nth-child(2)')).toContainText(testcase.price_jal_special2)
    // //50mm
    // await expect(page.locator('.testmenu > div:nth-child(3)')).toContainText(testcase.price_jal_old3)
    // await expect(page.locator('.testmenu > div:nth-child(3)')).toContainText(testcase.price_jal_special3)

    // await page.goto(testcase.product_holzjal)
    // //16mm
    // await expect(page.locator('.testmenu > div:nth-child(1)')).toContainText(testcase.price_hjal_old1)
    // await expect(page.locator('.testmenu > div:nth-child(1)')).toContainText(testcase.price_hjal_special1)
    // //25mm
    // await expect(page.locator('.testmenu > div:nth-child(2)')).toContainText(testcase.price_hjal_old2)
    // await expect(page.locator('.testmenu > div:nth-child(2)')).toContainText(testcase.price_hjal_special2)
    // //50mm
    // await expect(page.locator('.testmenu > div:nth-child(3)')).toContainText(testcase.price_hjal_old3)
    // await expect(page.locator('.testmenu > div:nth-child(3)')).toContainText(testcase.price_hjal_special3)




    //******************* check zubehoer category pages  *******************/
    //**********************************************************************/

    await page.goto(testcase.zubehoerPage_1)
    const locator_zub_1 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.zubehoer1, { exact: true }).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_zub_1.locator('.regular-price')).toContainText(testcase.price_zub1)

    await page.goto(testcase.zubehoerPage_2)
    const locator_zub_2 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.zubehoer2, { exact: true }).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_zub_2.locator('.regular-price')).toContainText(testcase.price_zub2)


    await page.goto(testcase.zubehoerPage_3)
    const locator_zub_3 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.zubehoer3, { exact: true }).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_zub_3.locator('.regular-price')).toContainText(testcase.price_zub3)



    //******************* check div pages  *******************/
    //********************************************************/

    await page.goto(testcase.divPage1)
    await expect(page.locator('.price.our-price')).toContainText(testcase.price_div1)

    await page.goto(testcase.divPage2)
    await expect(page.locator('.price.our-price')).toContainText(testcase.price_div2)

    await page.goto(testcase.divPage3)
    await expect(page.locator('.price.our-price')).toContainText(testcase.price_div3)




    //******************* check configurator  *********************/
    //************************************************************/

    await page.goto(testcase.conf_2)
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.confPrice_old2)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.confPrice_special2)
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.confPrice_old2)
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.confPrice_special2)



    await page.goto(testcase.conf_1)
    await expect(page.locator('.old-price')).toContainText(testcase.confPrice_old1)
    await expect(page.locator('.special-price')).toContainText(testcase.confPrice_special1)



    //******************* LOGOUT  *******************/
    //***********************************************/

    await page.getByRole('link', { name: 'Abmelden' }).click()
    await expect(page.locator('h1:text("Sie sind jetzt abgemeldet")')).toBeVisible()


})