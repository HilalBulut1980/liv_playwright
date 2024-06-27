
import { test, expect } from 'playwright/test'


test('Configuration of schiebegardine gesamt with edit in cart', async ({ page }) => {


    //************************************************************************/
    // CONFIGURE PRODUCT
    //************************************************************************/

    // load configurator
    await page.goto('/schiebegardinen/schiebegardinen-konfigurator')

    // select Gesamtsysteme
    await page.getByText('Schiebegardine mit Schienensystem').first().click();
    // Aris 7348 preselected --> PG 3

    // set Höhe
    await page.locator('#hoehe_in_mm input').fill('3000');

    // set Breite
    await page.locator('#breite_in_mm input').fill('4000');

    // Anzahl der Paneele vorgegeben: 4
    // Breite der Paneele: X = (4000-50) /4 +50 = 1037,50 --> 1038mm
    // Paneelpreis= 3000x1038 ==> 255,00 ==> x4 ==> 1020,00
    // + Schiene 2-Lauf ==> +124,00 = 1144,00


    // click out --> workaround
    await page.click('h1:text("Paneele anpassen")')

    // Paneele bearbeiten
    await page.locator('#check_individual input').check();

    // neue Stoffe und Maße pro Paneel
    var stoffe = ['Lokela 7304', 'Vilana 7305', 'Philo 7324', 'Ukko 7328']  // PG2, PG2, PG1, PG3
    var hoehen = ['2000', '2500', '3000', '3000']
    var breiten = ['900', '1000', '1100', '1200']
    // Stoffpreise = [135, 171, 170, 275] = 751

    for (var j = 1, i = 0; i <= 3; i++, j++) {
        await page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') input[type="button"]').click();
        await page.locator('#material-collection > ul > li').getByText(stoffe[i]).first().click();
        await page.getByText(/Auswahl übernehmen/).first().click();
        await page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').fill(breiten[i]);
        await page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').fill(hoehen[i]);
    }

    // set Schienenlauf 4
    await page.locator('#schienenlaeufe-wahlen > :nth-child(1) > div > ul').locator(":scope > *").getByText('4').first().click();


    // set Montage an der Wand
    await page.getByText(new RegExp("^" + "Montage an der Wand" + "\\s*$")).first().click();


    // Streichpreis: 751 + 156 + 42 = 949
    // red. Preis: 525,70 + 109,20 + 42 = 676,90

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    // check prices
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText("949,00")
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText("676,90")
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText("949,00")
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText("676,90")

    // add to cart
    // add to cart
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('2');
    await page.locator('#configurator-price-cart > .add-to-cart button').click();


    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/949,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/676,90/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/1\.898,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/1.353,80/);

    // click 'Artikel bearbeiten'
    await page.getByText(/Artikel bearbeiten/).first().click();

    //************************************************************************/
    // RE-CONFIGURE PRODUCT
    //************************************************************************/

    // Paneele bearbeiten
    // await page.locator('#check_individual input').check();
    // --> it is already checked <--

    // neue Stoffe und Maße pro Paneel
    var stoffe_new = ['Piara 7279', 'Pika 7325', 'Salomo 7346', 'Naru 7297']  // PG1, PG1, PG2, PG3
    var hoehen_new = ['1500', '2000', '2500', '3000']
    var breiten_new = ['800', '900', '1000', '1100']
    // Stoffpreise_new = [95, 114, 171, 255] = 635

    for (var j = 1, i = 0; i <= 3; i++, j++) {
        // check old product names of all panels
        // await expect(page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > :nth-child(1) > .product_name')).toHaveText(stoffe[i]);
        // set new product names
        await page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') input[type="button"]').click();
        await page.locator('#material-collection > ul > li').getByText(stoffe_new[i]).first().click();
        await page.getByText(/Auswahl übernehmen/).first().click();
        // check if old widths are still existing
        // await expect(page.locator('input[name=' + breiten[i] + ' ]')).toBeVisible();
        // set new heights and widths
        // await expect(page.locator('input[name=' + hoehen[i] + ' ]')).toBeVisible();
        // set new heights and widths
        await page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(1) input').fill(breiten_new[i]);
        await page.locator('.optional_paneele_wrapper > :nth-child(' + j + ') > .optional_paneele_sizes :nth-child(2) input').fill(hoehen_new[i]);
    }

    // Streichpreis: 635 + 156 + 42 = 833
    // red. Preis: 444,50 + 109,20 + 42 = 595,70

    //************************************************************************/
    // CHECK PRICES and add to cart
    //************************************************************************/

    // check prices
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText("833,00")
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText("595,70")
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText("833,00")
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText("595,70")

    // add to cart
    // quantity: should be the same as before
    await page.locator('#configurator-price-cart > .add-to-cart button').click();


    //************************************************************************/
    // CHECK PRICES in CART
    //************************************************************************/

    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText(/833,00/);
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText(/595,70/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText(/1\.666,00/);
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText(/1.191,40/);

    // proceed to checkout
    await page.locator('.cart-collaterals > .page-title.title-buttons > .checkout-types > li button').click();

    // check checkout page
    await expect(page).toHaveURL(/\/checkout\/onepage/);
    // end test here without checkout test

})