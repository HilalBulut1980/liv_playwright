import { test, expect } from 'playwright/test'

const testcase =
{
    "name": "Preis-Check mit Testkonto CH",
    "email": "testkonto_CH@delphinus-test.de",
    "password": "Abcde_12345",

    //category pages

    "categoryPage_1": "/doppelrollo/doppelrollo-weiss",
    "productname_1": "Rayure 5000",  //46,00 / 18,40
    "catPrice_old_1": "38,66",  // 46 /119*100
    "catPrice_special_1": "15,46", // 18,40 /119 * 100

    "categoryPage_2": "/rollo/buero-rollo",
    "productname_2": "Greve 3711", //39,00 / 17,55
    "catPrice_old_2": "32,77", // 39 * 119 / 100
    "catPrice_special_2": "14,75", // 17,55 / 119 * 100

    "categoryPage_3": "/raffrollo/raffrollo-weiss",
    "productname_3": "Zadar 9019", //312,00 / 140,40
    "catPrice_old_3": "262,18", // 312 /119*100
    "catPrice_special_3": "117,98", // 140,40 /119*100

    "categoryPage_4": "/plissee/kueche-plissee",
    "productname_4": "Ambience 1357",
    "catPrice_old_4": "46,22",  // 55 / 119 * 100
    "catPrice_special_4": "14,71",  // 17,50 * 119 * 100

    "categoryPage_5": "/schiebegardinen/schiebegardinen-grau",
    "productname_5": "Philo 7324",
    "catPrice_old_5": "27,73",   // 33 / 119 * 100
    "catPrice_special_5": "19,41",  //  23,10 / 119 * 100

    "categoryPage_6": "/gardinenstangen",
    "productname_6": "Gardinenstange Lugano",
    "catPrice_old_6": "11,76",  // 13,99 / 119 * 100
    "catPrice_special_6": "9,99",  // 11,89 * 119 * 100

    "categoryPage_7": "/dekoschal",
    "productname_7": "Linna Vorhang",
    "catPrice_old_7": "47,06",  // 56 / 119 * 100
    "catPrice_special_7": "23,53",  // 28 * 119 * 100


    //product pages

    "productPage_1": "/doppelrollo/amelio-5105",
    "price_old_1": "50,42", // 60 / 119 * 100
    "price_special_1": "20,17", // 24 / 119 * 100

    "productPage_2": "/rollo/silves-3692",
    "price_old_2": "32,77", // 39 / 119 * 100
    "price_special_2": "14,75", // 17,55 / 119 * 100

    "productPage_3": "/raffrollo/gola-9013",
    "price_old_3": "262,18", // 312 / 119 * 100
    "price_special_3": "117,98", // 140,40 / 119 * 100

    "productPage_4": "/plissee/juvel-1951",
    "price_old_4": "63,03", // 75 / 119 * 100
    "price_special_4": "34,66", // 41,25 / 119 * 100

    "productPage_5": "/schiebegardinen/hilko-7315",
    "price_old_5": "36,13", // 43 / 119 * 100
    "price_special_5": "25,29",  //  30,10 / 119 * 100

    //jalousie pages
    "product_jal": "/jalousie",
    "price_jal_old1": "41,18", // 49 / 119 * 100
    "price_jal_special1": "16,47", // 19,60 / 119 * 100
    "price_jal_old2": "32,77", // 39 / 119 * 100
    "price_jal_special2": "13,11", // 15,60 / 119 * 100
    "price_jal_old3": "85,71", // 102 / 119 * 100
    "price_jal_special3": "34,29", // 40,80 / 119 * 100

    "product_holzjal": "/holzjalousie",
    "price_hjal_old1": "73,95", // 88 / 119 * 100
    "price_hjal_special1": "36,97", // 44 / 119 * 100
    "price_hjal_old2": "109,24", // 130 / 119 * 100
    "price_hjal_special2": "49,16", // 58,50 / 119 * 100
    "price_hjal_old3": "185,71", // 221 / 119 * 100
    "price_hjal_special3": "92,86", // 110,50 / 119 * 100

    //zubehör categories

    "zubehoerPage_1": "/plissee/zubehoer",
    "zubehoer1": "Abdeckkappe für Spannschuh",
    "price_zub1": "3,36", // 4,00 / 119 * 100

    "zubehoerPage_2": "/schiebegardinen/zubehoer",
    "zubehoer2": "Magnetgriff aus Aluminium für Schiebegardinen",
    "price_zub2": "5,87", // 6,99 / 119 * 100

    "zubehoerPage_3": "/rollo/zubehoer",
    "zubehoer3": "Klemmträger für Doppelrollo Mini",
    "price_zub3": "3,36", // 4,00 / 119 * 100

    //div

    "divPage1": "/aenderungsauftrag-schnurlaenge",
    "price_div1": "25,21", // 30 / 119 * 100

    "divPage2": "/stickfix",
    "price_div2": "16,81", // 20 / 119 * 100

    "divPage3": "/klemmtraeger-b-rm18",
    "price_div3": "3,36", // 4,00 / 119 * 100

    // configurator

    "conf_1": "/doppelrollo/doppelrollo-konfigurator",
    "confPrice_old1": "38,66",  // 46 /119*100
    "confPrice_special1": "15,46", // 18,40 /119*100

    "conf_2": "/jalousie/jalousie-konfigurator",
    "confPrice_old2": "41,18",  // 49 /119*100
    "confPrice_special2": "16,47", // 19,60 /119*100
}

test('login of CH customer with pricecheck of different products', async ({ page }) => {

    //check/create testaccount --- testkonto_CH@delphinus-test.de ---
    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_CH@delphinus-test.de&prefix=Herr&firstname=Testkonto&lastname=Schweiz&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=CH&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Basel&shipping_country=CH')


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

    await page.goto(testcase.conf_1)
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.confPrice_old1)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.confPrice_special1)
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.confPrice_old1)
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.confPrice_special1)

    await page.goto(testcase.conf_2)
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.confPrice_old2)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.confPrice_special2)
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.confPrice_old2)
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.confPrice_special2)



    //******************* LOGOUT  *******************/
    //***********************************************/

    await page.getByRole('link', { name: 'Abmelden' }).click()
    await expect(page.locator('h1:text("Sie sind jetzt abgemeldet")')).toBeVisible()


})