import { test, expect } from 'playwright/test'


test('Configuration of doppelrollo with edit in cart', async ({ page }) => {


    //************************************************************************/
    // CONFIGURE PRODUCT
    //************************************************************************/

    // load product
    await page.goto('/doppelrollo/doppelrollo-konfigurator'); // Rayure 5000 is preselected --> PG 1

    // select tab
    await page.locator('#type-selector-top > ul').locator(":scope > *").getByText(/Doppelrollo ohne Kassette/).first().click();

    // type height & width
    await page.locator('#hoehe input').fill('1800');
    await page.locator('#breite input').fill('1400'); // --> 1800 x 1400 = 601,00

    // select metallkette
    await page.locator('#montageoptionen > div > :nth-child(1) > div > ul').locator(":scope > *").getByText(/Metall/).first().click(); //+21,00


    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(/622,00/)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(/261,40/)  // 601-60% +21
    await expect(page.locator("div.product-view div.old-price > span")).toContainText(/622,00/)
    await expect(page.locator("div.product-view div.special-price > span")).toContainText(/261,40/)
    // add to cart
    await page.locator('#configurator-price-cart > .add-to-cart > #qty').fill('2');
    await page.locator('#configurator-price-cart > .add-to-cart > button').click();

    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/622,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/261,40/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/1\.244,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/522,80/);

    // click 'Artikel bearbeiten'
    await page.getByText(/Artikel bearbeiten/).first().click();

    //************************************************************************/
    // RE-CONFIGURE PRODUCT
    //************************************************************************/

    // Stoff ändern
    await expect(page.getByText(/Farbe & Eigenschaften ändern/).first()).toBeVisible();
    await page.getByText(/Farbe & Eigenschaften ändern/).first().click();
    await page.getByText(/Remsa 5063/).first().click();    // --> PG 2
    await page.getByText(/Auswahl übernehmen/).first().click();

    // type height and width
    await page.locator('#hoehe input').fill('2000');
    await page.locator('#breite input').fill('1500'); // --> 2000 x 1500 = 857,00 Regel 18 --> -60% 

    // select Kunststoffkette
    await page.locator('#montageoptionen > div > :nth-child(1) > div > ul').locator(":scope > *").getByText(/Kunststoff/).first().click(); //+0,00

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(/857,00/)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(/342,80/)
    await expect(page.locator("div.product-view div.old-price > span")).toContainText(/857,00/)
    await expect(page.locator("div.product-view div.special-price > span")).toContainText(/342,80/)
    // add to cart
    // quantity: should be the same as before --> 2
    await page.locator('#configurator-price-cart > .add-to-cart > button').click();
    // await page.waitForTimeout(3000);

    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    // check prices in cart
    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/857,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/342,80/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/1\.714,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/685,60/);

    // proceed to checkout
    await page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();

    // check checkout page
    await expect(page).toHaveURL(/\/checkout\/onepage/);
    // end test here without checkout test
})