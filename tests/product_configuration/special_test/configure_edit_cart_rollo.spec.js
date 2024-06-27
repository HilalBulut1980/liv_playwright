
import { test, expect } from 'playwright/test'


test('Configuration of rollo with edit in cart', async ({ page }) => {


    //************************************************************************/
    // CONFIGURE PRODUCT
    //************************************************************************/

    // load product
    await page.goto('/rollo/rollo-konfigurator') // Basic 3011 is preselected --> PG A
    // select tab
    // tab Rollo is preselected

    // select kassette
    await page.locator('#container-kassette li').filter({ hasText: 'mit Kassette' }).click();  // --> RM32

    // type height
    await page.locator('#hoehe_in_mm input').fill('1200');

    // type width
    await page.locator('#breite_in_mm input').fill('1200');  // RM 32 --> 150,00 + 122 (wird rabattiert)

    // select befestigung
    await page.locator('.montage-type').locator('div').locator('ul').locator(":scope > *").getByText('Montage an der Wand').first().click();

    // select metallkette
    await page.locator('#art-der-kugelkette > div > ul').locator(":scope > *").getByText('Metall').first().click(); // + 21


    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    // check prices
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText("293,00")
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText("143,40")
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText("293,00")
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText("143,40")


    // add to cart
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');
    await page.locator('#configurator-price-cart > .add-to-cart button').click();


    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/293,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/143,40/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/586,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/286,80/);


    // click 'Artikel bearbeiten'
    await page.getByText(/Artikel bearbeiten/).first().click();

    //************************************************************************/
    // RE-CONFIGURE PRODUCT
    //************************************************************************/

    // Maße ändern
    // type height
    await page.locator('#hoehe_in_mm input').fill('1500');

    // type width
    await page.locator('#breite_in_mm input').fill('1200'); // --> 1500 x 1200 = 171,00 + 122

    // select kunststoffkette
    await page.locator('#art-der-kugelkette > div > ul').locator(":scope > *").getByText('Kunststoff').first().click(); // +0,00


    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/


    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText('293,00')
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText('131,85')
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText('293,00')
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText('131,85')

    // add to cart
    // quantity: should be the same as before
    await page.locator('#configurator-price-cart > .add-to-cart button').click();

    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    // check prices in cart
    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/293,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/131,85/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/586,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/263,70/);

    // proceed to checkout
    await page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();

    // check checkout page
    await expect(page).toHaveURL(/\/checkout\/onepage/);
    // end test here without checkout test

})

