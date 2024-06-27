import { test, expect } from 'playwright/test'


test('Configuration of jalousie with edit in cart', async ({ page }) => {

    //************************************************************************/
    // CONFIGURE PRODUCT
    //************************************************************************/

    // load jalousie configurator
    await page.goto('/jalousie/jalousie-konfigurator');

    // 16 mm is preselected
    // Blau 6012 is preselected --> PG 0

    // set Maße
    await page.locator('#hoehe_in_mm input').fill('1500');
    await page.locator('#breite_in_mm input').fill('1000');
    // --> 1500 x 1000 bei PG0 = 300,00

    // set Kugelkette Kunststoff
    await page.locator('.bedienung > ul').locator(":scope > *").getByText(/Kugelkette aus Kunststoff/).first().click();

    // set Pendelsicherung
    await page.locator('.seitenfuehrung > div > ul').locator(":scope > *").getByText(/mit Pendelsicherung/).first().click(); //+14,00

    // Preis
    // 300,00 + 14 = 314,00
    // 300-60%  +14 = 134,00

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    // check prices after configuration
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText('314,00')
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText('134,00')
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText('314,00')
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText('134,00')

    // add to cart
    // await page.locator('#configurator-price-cart > .add-to-cart input').clear(); 
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');
    await page.locator('#configurator-price-cart > .add-to-cart button').click();

    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toHaveText(/314,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toHaveText(/134,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toHaveText(/628,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toHaveText(/268,00/);

    // click 'Artikel bearbeiten'
    await page.getByText(/Artikel bearbeiten/).first().click();
    await page.waitForTimeout(1000);


    //************************************************************************/
    // RE-CONFIGURE PRODUCT
    //************************************************************************/

    // Jalousie ändern auf 50mm
    await page.getByText(/50 mm Höhe/).first().click(); // type selection not possible without wait

    // change preselected color to Lachs perforiert 6106 --> PG 1+
    await expect(page.locator('#jalousie-collection > ul').locator(":scope > *").getByText(/Lachs perforiert 6106/).first()).toBeVisible();
    await page.locator('#jalousie-collection > ul').locator(":scope > *").getByText(/Lachs perforiert 6106/).first().click();

    // set Kugelkette Metall
    await page.locator('.bedienung > ul').locator(":scope > *").getByText(/Kugelkette aus Metall/).first().click();


    // Preis 1500 x 1000 bei PG 1+ = 519
    // Metallkette: 21,00
    // Pendelsicherung: 32,00
    // 519 + 21 + 32 = 572,00
    // 519-60% +21 +32 = 260,60 

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    // check prices after configuration
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText('572,00')
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText('260,60')
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText('572,00')
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText('260,60')

    // add to cart
    // quantity: should be the same as before
    await page.locator('#configurator-price-cart > .add-to-cart button').click();
    // await page.waitForTimeout(3000);


    // check prices in cart
    // Streichpreis einzel 
    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toHaveText(/572,00/);
    // red. Einzelpreis
    await expect(page.locator('span[class="cart-price"] > div > .price')).toHaveText(/260,60/);
    // Streichpreis gesamt
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toHaveText(/1\.144,00/);
    // red. Gesamtpreis
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toHaveText(/521,20/);

    // proceed to checkout
    await page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();

    // check checkout page
    await expect(page).toHaveURL(/\/checkout\/onepage/);
    // end test here without checkout test
})