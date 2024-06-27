import { test, expect } from 'playwright/test'

const testcase =
{
    "name": "Preis-Check mit Testkonto AT",
    "email": "testkonto_AT@delphinus-test.de",
    "password": "Abcde_12345",

    //category pages

    "categoryPage_1": "/doppelrollo/doppelrollo-beige",
    "productname_1": "Remsa 5058",  //60,00 / 24,00
    "catPrice_old_1": "60,50",  // 60 /119*120
    "catPrice_special_1": "24,20", // 24 /119*120

    "categoryPage_2": "/rollo/kinderzimmer-rollo",
    "productname_2": "BlackOut Reflex 3089", //46,00 / 20,70
    "catPrice_old_2": "46,39", // 46 * 119 / 120
    "catPrice_special_2": "20,87", // 20,70 / 119 * 120

    "categoryPage_3": "/raffrollo/raffrollo-beige",
    "productname_3": "Dillio 9071", //340,00 / 153,00
    "catPrice_old_3": "342,86", // 340 /119*120
    "catPrice_special_3": "154,29", // 153 /119*120

    "categoryPage_4": "/plissee/buero-plissee",
    "productname_4": "Vivid Blackout 1503",
    "catPrice_old_4": "84,71",  // 84 / 119 * 120
    "catPrice_special_4": "42,35",  // 42 * 119 * 120

    "categoryPage_5": "/schiebegardinen/alle-schiebegardinen",
    "productname_5": "Odetta 7219",
    "catPrice_old_5": "36,30",  // 36 / 119 * 120
    "catPrice_special_5": "25,41",  //  25,20 / 119 * 120

    "categoryPage_6": "/gardinenstangen",
    "productname_6": "Gardinenstange Belamy",
    "catPrice_old_6": "33,27",  // 32,99 / 119 * 120
    "catPrice_special_6": "28,28",  // 28,04 * 119 * 120

    "categoryPage_7": "/oesenschal/oesenschal-gelb",
    "productname_7": "Cortina Verdunkelungsvorhang",
    "catPrice_old_7": "67,06",  // 66,50 / 119 * 120
    "catPrice_special_7": "33,53",  // 33,25 * 119 * 120


    //product pages

    "productPage_1": "/doppelrollo/rayure-5000",
    "price_old_1": "46,39", // 46 / 119 * 120
    "price_special_1": "18,55", // 18,40 / 119 * 120

    "productPage_2": "/rollo/basic-3011",
    "price_old_2": "39,33", // 39 / 119 * 120
    "price_special_2": "17,70", // 17,55 / 119 * 120

    "productPage_3": "/raffrollo/zadar-9025",
    "price_old_3": "314,62", // 312 / 119 * 120
    "price_special_3": "141,58", // 140,40 / 119 * 120

    "productPage_4": "/plissee/ambience-1355",
    "price_old_4": "55,46", // 55 / 119 * 120
    "price_special_4": "17,65", // 17,50 / 119 * 120

    "productPage_5": "/schiebegardinen/shana-7334",
    "price_old_5": "43,36",    // 43 / 119 * 120
    "price_special_5": "30,35", //  30,10 / 119 * 120

    //jalousie pages

    "product_jal": "/jalousie",
    "price_jal_old1": "49,41", // 49 / 119 * 120
    "price_jal_special1": "19,76", // 19,60 / 119 * 120
    "price_jal_old2": "39,33", // 39 / 119 * 120
    "price_jal_special2": "15,73", // 15,60 / 119 * 120
    "price_jal_old3": "102,86", // 102 / 119 * 120
    "price_jal_special3": "41,14", // 40,80 / 119 * 120

    "product_holzjal": "/holzjalousie",
    "price_hjal_old1": "88,74", // 88 / 119 * 120
    "price_hjal_special1": "44,37", // 44 / 119 * 120
    "price_hjal_old2": "131,09", // 130 / 119 * 120
    "price_hjal_special2": "58,99", // 58,50 / 119 * 120
    "price_hjal_old3": "222,86", // 221 / 119 * 120
    "price_hjal_special3": "111,43", // 110,50 / 119 * 120

    //zubehör categories

    "zubehoerPage_1": "/plissee/zubehoer",
    "zubehoer1": "Bedienstab für Cosiflor-Plissees",
    "price_zub1": "44,37", // 44 / 119 * 120

    "zubehoerPage_2": "/schiebegardinen/zubehoer",
    "zubehoer2": "Magnetclip aus Kunststoff für Schiebegardinen",
    "price_zub2": "4,02", // 3,99 / 119 * 120

    "zubehoerPage_3": "/rollo/zubehoer",
    "zubehoer3": "Bedienstab Rollo Dachfenster",
    "price_zub3": "34,29", // 34 / 119 * 120

    //div

    "divPage1": "/zusatzauftrag-laengere-fuehrungsschnuere",
    "price_div1": "20,17", // 20 / 119 * 120

    "divPage2": "/bediengriff-standard-neu",
    "price_div2": "7,06", // 7,00 / 119 * 120

    "divPage3": "/seitenfuehrung-a-rm18",
    "price_div3": "4,03", // 4,00 / 119 * 120

    // configurator

    "conf_1": "/plissee/plissee-konfigurator",
    "confPrice_old1": "55,46",  // 55 /119*120
    "confPrice_special1": "17,65", // 17,50 /119*120

    "conf_2": "/rollo/rollo-konfigurator",
    "confPrice_old2": "39,33",  // 39 /119*120
    "confPrice_special2": "17,70", // 17,55 /119*120

}

test('login of AT customer with pricecheck of different products', async ({ page }) => {

    //check/create testaccount --- testkonto_AT@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_AT@delphinus-test.de&prefix=Herr&firstname=Testkonto&lastname=%C3%96sterreich&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=AT&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Wien&shipping_country=AT')


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

    //check product prices on category page 7
    await page.goto(testcase.categoryPage_7)
    const locator_7 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.productname_7).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_7.locator('.old-price')).toContainText(testcase.catPrice_old_7)
    await expect(locator_7.locator('.special-price')).toContainText(testcase.catPrice_special_7)



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
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.confPrice_old1)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.confPrice_special1)
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.confPrice_old1)
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.confPrice_special1)



    //******************* LOGOUT  *******************/
    //***********************************************/

    await page.getByRole('link', { name: 'Abmelden' }).click()
    await expect(page.locator('h1:text("Sie sind jetzt abgemeldet")')).toBeVisible()


})