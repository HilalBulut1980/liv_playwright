import { test, expect } from 'playwright/test'


test('Configuration of holzjalousie with edit in cart', async ({ page }) => {

    //************************************************************************/
    // CONFIGURE PRODUCT
    //************************************************************************/

    // load jalousie configurator
    await page.goto('/jalousie/holz-jalousie-konfigurator');

    // 25 mm is preselected
    // Natural Weiß 6500 is preselected --> PG M

    // set Maße
    await page.locator('#hoehe_in_mm input').fill('1500'); 
    await page.locator('#breite_in_mm input').fill('1000');
    // --> 1500 x 1000 bei PG M = 458,00

    // set Kugelkette Kunststoff
    await page.locator('div[options-property="bedienung"] > ul').locator(":scope > *").getByText(/Kugelkette aus Kunststoff/).first().click();

    // set Pendelsicherung
    await page.locator('.seitenfuehrung > div > ul').locator(":scope > *").getByText(/mit Pendelsicherung/).first().click(); //+14,00

    // Preis
    // 458,00 + 14 = 472,00
    // 458-50%  +14 = 229 + 14 =243

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    // check prices after configuration
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText('472,00')
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText('243,00')
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText('472,00')
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText('243,00')

    // add to cart
    // await page.locator('#configurator-price-cart > .add-to-cart input').clear(); 
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2'); 
    await page.locator('#configurator-price-cart > .add-to-cart button').click();

    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toHaveText(/472,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toHaveText(/243,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toHaveText(/944,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toHaveText(/486,00/);

    // click 'Artikel bearbeiten'
    await page.getByText(/Artikel bearbeiten/).first().click();
    await page.waitForTimeout(1000);


    //************************************************************************/
    // RE-CONFIGURE PRODUCT
    //************************************************************************/

    // Jalousie ändern auf 50mm
    await page.getByText(/50 mm Höhe/).first().click(); // type selection not possible without wait


    // change preselected color to Natural Milchkaffee 6528 --> PG N
    await expect(page.locator('#jalousie-collection > ul').locator(":scope > *").getByText(/Natural Milchkaffee 6528/).first()).toBeVisible(); 
    await page.locator('#jalousie-collection > ul').locator(":scope > *").getByText(/Natural Milchkaffee 6528/).first().click(); 

    // set Kugelkette Metall
    await page.locator('div[options-property="bedienung"] > ul').locator(":scope > *").getByText(/Kugelkette aus Metall/).first().click();

    // set Leiterband
    await page.locator('.lamellenverbindung > div > ul').locator(":scope > *").getByText(/Leiterband/).first().click();


    // Preis 1500 x 1000 bei PG N = 625
    // Metallkette: 21
    // Pendelsicherung: 32,00
    // Leiterband (+5%) = 31,25
    // 625 + 21 + 32 + 31,25 = 709,25
    // 625+31,25-50% +21 +32  = 319,73 + 21+32 = 381,13

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    // check prices after configuration
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText('709,25')
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText('381,13')
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText('709,25')
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText('381,13')

    // add to cart
    // quantity: should be the same as before
    await page.locator('#configurator-price-cart > .add-to-cart button').click();
    // await page.waitForTimeout(3000);


    // check prices in cart
    // Streichpreis einzel 
    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toHaveText(/709,25/);
    // red. Einzelpreis
    await expect(page.locator('span[class="cart-price"] > div > .price')).toHaveText(/381,13/);
    // Streichpreis gesamt
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toHaveText(/1\.418,50/);
    // red. Gesamtpreis
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toHaveText(/762,26/);

    // proceed to checkout
    await page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();

    // check checkout page
    await expect(page).toHaveURL(/\/checkout\/onepage/);
    // end test here without checkout test
})
