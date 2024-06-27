




import { test, expect } from 'playwright/test'


test('DF20 genormt - check comfort / non-comfort with Velux VX Flügeltyp 10 | Holz', async ({ page }) => {

    // nur als Comfort erhlältlich
    // Fakro FYP-V 94 / 180 | Holz
    // Fakro PTL 78 / 160 | Kunststoff
    // Fakro FTP-V 94 / 206 | Holz
    // Velux VX Flügeltyp 10 / 12 | Holz

    // nur als Non-Comfort erhältlich
    // Roto Roto 61_ 11 / 11 | Holz
    // Roto SA 11 / 16 | Kunststoff / Holz
    // Velux VX Flügeltyp 21 A | Holz


    // load PDP
    await page.goto('/plissee/duale-blackout-1424')

    // load configurator
    await page.locator("#configurator-button").click()

    //select tab DF
    await page.locator('.tabs').locator(":scope > *").getByText('Dachfensterplissees').first().click();
    // DF20 is preselected - following product is only available with comfort, therefore it shpuld be switched to DF20 Comfort afterwards

    // set Hersteller, Produkt and Typ
    await page.selectOption(('.dfselect select'), 'Velux')
    await page.selectOption(('.dfselect:nth-of-type(2) select'), 'VX Flügeltyp')
    await page.selectOption(('.dfselect:nth-of-type(3) select'), '10 / 12 | Holz')
    // --> 609 x 390 comfort PG4
        // Preiskalkulation bei genormt LIV wie ungenormt LIV!! Preis nach Maßen in Preistabelle raussuchen


    // ****** the selected product above is only available in comfort *************
    // ********** check if type SWITCHED from df20 to df20c ***********************
    // ****************************************************************************
    const parent_locator_A = page.locator('.type-selector-left > ul li').getByText(/DF20/).first().locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(parent_locator_A).not.toHaveClass('selected')

    const parent_locator_B = page.locator('.type-selector-left > ul li').getByText(/DF20 Comfort/).first().locator('..') // .locator('..') gets the parent element of the yielded element
    await expect(parent_locator_B).toHaveClass('selected')


    //************************************************************************/
    // CHECK PRICES 
    //************************************************************************/

    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(/231,00/);
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(/103,95/)
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText(/231,00/)
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText(/103,95/)

    // add to cart
    await page.locator('#configurator-price-cart > .add-to-cart input').fill('1');
    await page.locator('#configurator-price-cart > .add-to-cart button').click();


    //************************************************************************/
    // CHECK PRICES IN CART
    //************************************************************************/

    // Streichpreis einzel 
    await expect(page.locator('span[class="cart-price"] > div > span[style="text-decoration: line-through;"]')).toContainText('231,00');
    // red. Einzelpreis
    await expect(page.locator('span[class="cart-price"] > div > .price')).toContainText('103,95');
    //Streichpreis gesamt
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > span[style="text-decoration: line-through;"]')).toContainText('231,00');
    //red. Gesamtpreis
    await expect(page.locator('span[class="cart-price cart-zwischensumme"] > div > .price')).toContainText('103,95');

})