
import { test, expect } from 'playwright/test'


test('Configuration of plissee with edit in cart', async ({ page }) => {


    //************************************************************************/
    // CONFIGURE PRODUCT
    //************************************************************************/

    // load product
    await page.goto('/plissee/wabe-sincero-2187'); // --> PG 3

    // go to configurator
    await page.locator("#configurator-button").click()
    
    // select tab
    await page.locator('.tabs').locator(":scope > *").getByText(/rechteckige Plissees/).first().click();

    // select type
    await page.locator('.type-selector-left > ul').locator(":scope > *").getByText(/F1/).first().click();

    // type height
    await page.locator('#hoehe input').fill('1500');

    // type width
    await page.locator('#breite input').fill('1200');

    // select befestigung
    await page.getByText(new RegExp("^" + 'Montage am Fensterflügel mit Winkeln' + "\\s*$")).first().click();


    // select pendelsicherung
    await page.locator('#pendelsicherung-normal > ul > :nth-child(2)').click();


    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(/331,00/)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(/253,50/)
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText(/331,00/)
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText(/253,50/)

    // add to cart
    // await page.locator('#configurator-price-cart > .add-to-cart input').clear();
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');
    await page.locator('#configurator-price-cart > .add-to-cart button').click();


    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/331,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/253,50/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/662,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/507,00/);


    // click 'Artikel bearbeiten'
    await page.getByText(/Artikel bearbeiten/).first().click();

    //************************************************************************/
    // RE-CONFIGURE PRODUCT
    //************************************************************************/

    // Stoff ändern
    await expect(page.getByText(/Plissee-Farbe & Eigenschaften ändern/).first()).toBeVisible();
    await page.getByText(/Plissee-Farbe & Eigenschaften ändern/).first().click();
    await page.getByText(/Vivid Blackout 1503/).first().click();    // --> PG 2
    await page.getByText(/Auswahl übernehmen/).first().click();

    // select befestigung
    await page.getByText(new RegExp("^" + 'Montage am Fensterflügel mit Klemmträgern - ohne Bohren' + "\\s*$")).first().click();


    // un-select pendelsicherung
    await page.locator('#pendelsicherung-normal > ul > :nth-child(1)').click();


    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText('298,50')
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText('157,50')
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText('298,50')
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText('157,50')

    // add to cart
    // quantity: should be the same as before
    await page.locator('#configurator-price-cart > .add-to-cart button').click();


    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    // check prices in cart
    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/298,50/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/157,50/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/597,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/315,00/);

    // proceed to checkout
    await page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();

    // check checkout page
    await expect(page).toHaveURL(/\/checkout\/onepage/);
    // end test here without checkout test

})