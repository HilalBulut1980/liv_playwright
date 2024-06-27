
import { test, expect } from 'playwright/test'


test('Configuration of schiebegardine einzel with edit in cart', async ({ page }) => {


    //************************************************************************/
    // CONFIGURE PRODUCT
    //************************************************************************/

    // load product
    await page.goto('/schiebegardinen/schiebegardinen-konfigurator')

    // Lika 7174 is preselected --> PG 0 --> 28,00 / 14,00

    // set Höhe
    await page.locator('#hoehe_in_mm input').fill('2300');

    // set Breite
    await page.locator('#breite_in_mm input').fill('1000');


    // 2300x1000  = 80
    // red. Preis -30% = 56

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    // check prices
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText("80,00")
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText("56,00")
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText("80,00")
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText("56,00")

    // add to cart
    // add to cart
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');
    await page.locator('#configurator-price-cart > .add-to-cart button').click();


    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/80,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/56,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/160,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/112,00/);

    // click 'Artikel bearbeiten'
    await page.getByText(/Artikel bearbeiten/).first().click();

    //************************************************************************/
    // RE-CONFIGURE PRODUCT
    //************************************************************************/

    // select other Stoff
    await page.getByText(/Farbe & Eigenschaften ändern/).first().click();
    await page.getByText('Ukko 7330').first().click(); // --> PG 3
    await page.getByText(/Auswahl übernehmen/).first().click();

    // set Höhe
    await page.locator('#hoehe_in_mm input').fill('2500');

    // set Breite
    await page.locator('#breite_in_mm input').fill('1200');

    // set Paneelwagen
    await page.locator('img[alt="mit Paneelwagen"]').click();

    // set Beschwerungsstab
    await page.getByText(new RegExp("^" + "Beschwerungsstab" + "\\s*$")).first().click();


    // 2500x1200  = 202,00
    // +53,00 +8,00 = 263,00
    // red. Preis -30% = 184,10

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/
    // check prices
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText("263,00")
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText("184,10")
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText("263,00")
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText("184,10")

    // add to cart
    // quantity: should be the same as before
    await page.locator('#configurator-price-cart > .add-to-cart button').click();


    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    // check prices in cart
    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/263,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/184,10/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/526,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/368,20/);

    // proceed to checkout
    await page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();

    // check checkout page
    await expect(page).toHaveURL(/\/checkout\/onepage/);
    // end test here without checkout test

})