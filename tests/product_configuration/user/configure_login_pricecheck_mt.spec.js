
import { test, expect } from 'playwright/test'

const testcase =
{
    "name": "Preis-Check mit Testkonto MT",
    "email": "testkonto_MT@delphinus-test.de",
    "password": "Abcde_12345",

    //category pages

    "categoryPage_1": "/doppelrollo/doppelrollo-schwarz",
    "productname_1": "Rayure 5014",  //46,00 / 18,40
    "catPrice_old_1": "45,61",  // 46 /119*118
    "catPrice_special_1": "18,25", // 18,40 /119*118

    "categoryPage_2": "/rollo/kueche-rollo",
    "productname_2": "Basic 3017", //39,00 / 17,55
    "catPrice_old_2": "38,67", // 39 * 119 / 118
    "catPrice_special_2": "17,40", // 17,55 / 119 * 118

    "categoryPage_3": "/raffrollo/raffrollo-wohnzimmer",
    "productname_3": "Parole 9000", //312,00 / 140,40
    "catPrice_old_3": "309,38", // 312 /119*118
    "catPrice_special_3": "139,22", // 140,40 /119*118

    "categoryPage_4": "/plissee/plissee-gelb",
    "productname_4": "Lindura 1584",
    "catPrice_old_4": "54,54",  // 55 / 119 * 118
    "catPrice_special_4": "20,08",  // 20,25 * 119 * 118

    "categoryPage_5": "/schiebegardinen/schiebegardinen-blickdicht",
    "productname_5": "Bambou 7345",
    "catPrice_old_5": "42,64",    // 43 / 119 * 118
    "catPrice_special_5": "29,85",  //  30,10 / 119 * 118

    "categoryPage_6": "/gardinenstangen",
    "productname_6": "Gardinenstange Bifo",
    "catPrice_old_6": "11,89",  // 11,99 / 119 * 118
    "catPrice_special_6": "10,10",  // 10,19 * 119 * 118

    "categoryPage_7": "/gardinen",
    "productname_7": "Golfo Gardine",
    "catPrice_old_7": "29,25",  // 29,50 / 119 * 118
    "catPrice_special_7": "16,09",  // 16,23 * 119 * 118


    //product pages

    "productPage_1": "/doppelrollo/lacinia-5052",
    "price_old_1": "90,24", // 91 / 119 * 118
    "price_special_1": "36,09", // 36,40 / 119 * 118

    "productPage_2": "/rollo/neve-3903",
    "price_old_2": "59,50", // 60 / 119 * 118
    "price_special_2": "26,77", // 27 / 119 * 1018

    "productPage_3": "/raffrollo/dillio-9069",
    "price_old_3": "337,14", // 340 / 119 * 118
    "price_special_3": "151,71", // 153 / 119 * 118

    "productPage_4": "/plissee/elegant-1209",
    "price_old_4": "95,19", // 96 / 119 * 118
    "price_special_4": "52,36", // 52,80 / 119 * 118

    "productPage_5": "/schiebegardinen/siva-7313",
    "price_old_5": "35,70", // 36 / 119 * 118
    "price_special_5": "24,99", //  25,20 / 119 * 118

    //jalousie pages

    "product_jal": "/jalousien",
    "price_jal_old1": "48,59", // 49 / 119 * 118
    "price_jal_special1": "19,44", // 19,60 / 119 * 118
    "price_jal_old2": "38,67", // 39 / 119 * 118
    "price_jal_special2": "15,47", // 15,60 / 119 * 118
    "price_jal_old3": "101,14", // 102 / 119 * 118
    "price_jal_special3": "40,46", // 40,80 / 119 * 118

    "product_holzjal": "/holzjalousien",
    "price_hjal_old1": "87,26", // 88 / 119 * 118
    "price_hjal_special1": "43,63", // 44 / 119 * 118
    "price_hjal_old2": "128,91", // 130 / 119 * 118
    "price_hjal_special2": "58,01", // 58,50 / 119 * 118
    "price_hjal_old3": "219,14", // 221 / 119 * 118
    "price_hjal_special3": "109,57", // 110,50 / 119 * 118

    //zubehör categories  

    "zubehoerPage_1": "/plissee/zubehoer",
    "zubehoer1": "Halteclip (klein)",
    "price_zub1": "3,97", // 4,00 / 119 * 118

    "zubehoerPage_2": "/schiebegardinen/zubehoer",
    "zubehoer2": "Magnetclip aus Kunststoff für Schiebegardinen",
    "price_zub2": "3,96", // 3,99 / 119 * 118

    "zubehoerPage_3": "/rollo/zubehoer",
    "zubehoer3": "Klemmträger für kleine Rollos (Modell RM18)",
    "price_zub3": "3,97", // 4,00 / 119 * 118

    //div

    "divPage1": "/aenderungsauftrag-breite",
    "price_div1": "49,58", // 50 / 119 * 118

    "divPage2": "/sockelplatten",
    "price_div2": "7,64", // 7,70 / 119 * 118

    "divPage3": "/seitenfuehrung-b-rm18",
    "price_div3": "3,97", // 4,00 / 119 * 118

    // configurator

    "conf_1": "/jalousie/holz-jalousie-konfigurator",
    "confPrice_old1": "87,26",  // 88 / 119 * 118
    "confPrice_special1": "43,63", // 44 / 119 * 118

    "conf_2": "/insektenschutz/fliegengitter",
    "confPrice_old2": "34,71",  // 35 / 119 * 118
    "confPrice_special2": "26,03", // 26,25 / 119 * 118
}


test('login of MLT customer with pricecheck of different products', async ({ page }) => {


    //check/create testaccount --- testkonto_MT@delphinus-test.de ---
    //**************************************************************/

    await page.goto('/scripts/customers/testaccounts.php?email=testkonto_MT@delphinus-test.de&prefix=Frau&firstname=Testkonto&lastname=Malta&password=Abcde_12345&billing_street=Teststra%C3%9Fe%202&billing_postcode=1110&billing_city=Teststadt&billing_country=MT&shipping_street=Teststraße%203&shipping_postcode=1234&shipping_city=Valletta&shipping_country=MT')



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
    const locator_zub_1 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.zubehoer1).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(locator_zub_1.locator('.regular-price')).toContainText(testcase.price_zub1)

    await page.goto(testcase.zubehoerPage_2)
    const locator_zub_2 = page.locator('.products-grid').locator(":scope > *").getByText(testcase.zubehoer2).locator('..').locator('..') // .locator('..') gets the parent element of the yielded element
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
    await expect(page.locator('.old-price')).toContainText(testcase.confPrice_old2)
    await expect(page.locator('.special-price')).toContainText(testcase.confPrice_special2)



    //******************* LOGOUT  *******************/
    //***********************************************/

    await page.getByRole('link', { name: 'Abmelden' }).click()
    await expect(page.locator('h1:text("Sie sind jetzt abgemeldet")')).toBeVisible()

})