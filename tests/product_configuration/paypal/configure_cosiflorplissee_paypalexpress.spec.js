import { expect, test } from 'playwright/test'
import { Helper } from '../../support/helper'
//  Lade die Umgebungsvariablen aus der .env-Datei
require('dotenv').config();

const testcase = {
    "name": "LIVConfig. - Plissee F1 - paypalexpress",
    "produkt": "/plissee/ayana-1809",
    "ab_preis": "84,00", //PG2
    "ab_preis_red": "46,20",  //-45% 
    "supplier": "VHG",
    "produktgruppe": "rechteckige Plissees",
    "modell": "F1",
    "befestigung": "Montage direkt vor dem Glas",
    "system": "Cosiflor",
    "hoehe": "1150",
    "breite": "1050",
    "bedienseite": "links",
    "pendelsicherung": "ja",  //+16
    "schienenfarbe": "Anthrazit",
    "paypalExpress": true
}

test('test: ' + testcase.name, async ({ page }) => {  // page is a page instance  

    await page.goto(testcase.produkt);
    //load configurator
    await page.locator("#configurator-button").click()

    // check Startpreise
    await expect(page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.ab_preis)
    await expect(page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.ab_preis_red)
    await expect(page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.ab_preis)
    await expect(page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.ab_preis_red)

    // set Produktgruppe
    await page.locator('.tabs').locator(":scope > *").getByText(testcase.produktgruppe).first().click();

    //Weitere Modelle aufklappen
    await page.locator('.btn-group > :nth-child(1)').click();

    // set Plisseemodell
    await page.locator('.type-selector-left > ul').locator(":scope > *").getByText(testcase.modell).first().click();

    // set Maße
    await page.locator('#hoehe input').fill(testcase.hoehe);
    await page.locator('#breite input').fill(testcase.breite);

    // set Pendelsicherung
    await page.locator('#pendelsicherung-normal > ul > :nth-child(2)').click();

    // add to cart
    await page.locator('#configurator-price-cart > .add-to-cart button').click();

    // in cart --> PAYPALEXPRESS

    // find and save iframe
    const iframe = await page.frameLocator('.component-frame');

    // Click on the PayPal button inside PayPal's iframe
    // new window opens
    const [PP_popup] = await Promise.all([
        page.waitForEvent('popup'),
        await iframe.locator('div[data-funding-source="paypal"]').click()
    ])

    // wait until new window is loaded
    await PP_popup.waitForLoadState();

    console.log('title of PP-popup: ' + await PP_popup.title());
    console.log('title of main page: ' + await page.title());

    // now we can interact with elements of the new window
    await PP_popup.locator("#email").fill("sb-zsomv8592744@personal.example.com");  // btnNext
    await PP_popup.locator("#btnNext").click();
    await PP_popup.locator("#password").fill("c)79sJ!.");
    await PP_popup.locator("#btnLogin").click();
    await expect(PP_popup.locator('div[data-testid="fi-amount"]')).toContainText('140,30 EUR'); // --> amount of the only paypalexpress testcase we have, can be replaced with variable



    //if placeOrder=true and baseurl is unequal to production then place the order
    if (process.env.PLACE_ORDER == 'true' && process.env.BASE_URL != "https://www.livoneo.de/") {

        // click blue button 'Kauf abschließen'
        await PP_popup.locator('button#payment-submit-btn').click();

        // set agreements in cart and confirm again
        await page.locator('.paypal_agreements').locator('#agreement-1').check();
        await page.locator('.paypal_agreements').locator('#agreement-2').check();
        await page.locator('button#confirm-pp').getByText(/Jetzt kaufen/).first().click();

        // Erstelle eine Instanz der Klasse Helper
        const newHelper = new Helper(page)
        // check url
        await newHelper.checkSuccessPage()

    }
    //cancel paypalexpress payment and go back to store
    else if (process.env.PLACE_ORDER == 'false') {

        await PP_popup.getByText('Abbrechen und zurück zu Test Store.').click();

        // check if we are back in cart
        await expect(page).toHaveURL(new RegExp('/checkout/cart'));


    }


})

// describe('Test: configuration of Vorhang Cortina mit Ösen', () => {

//     it(testcase.name, function () {

//         cy.visit(testcase.produkt)
//         cy.get('.buttons > .buttons__configuration').click()

//         cy.get('.old-price').should('contain', testcase.ab_preis)
//         cy.get('.special-price').should('contain', testcase.ab_preis_red)

//         cy.get('.tabs').children().contains(testcase.produktgruppe).click()


//         //Weitere Modelle aufklappen
//         cy.get('.btn-group > :nth-child(1)').click()
//         cy.get('.type-selector-left > ul').children().contains(testcase.modell).click()
//         cy.get('#hoehe input').type(testcase.hoehe)
//         cy.get('#breite input').type(testcase.breite)
//         cy.get('#pendelsicherung-normal > ul > :nth-child(2)').click()
//         cy.get('#configurator-price-cart > .add-to-cart > button').click()
//         paypalExpress(testcase.paypalExpress)

//     })

// })

// function paypalExpress(paypalExpress) {

//     if (paypalExpress) {
//         cy.capturePopupFromIFrame_express()
//         cy.paypalExpress('sb-zsomv8592744@personal.example.com', 'c)79sJ!.')
//         cy.paypalPrice().should('to.contain', '140,30 EUR') // --> amount of the only paypalexpress testcase we have, can be replaced with variable

//         //if placeOrder=true and baseurl is unequal to production then plade the order
//         if (Cypress.env('placeOrder') && Cypress.config().baseUrl != "https://www.livoneo.de/") {

//             cy.paypalComplete()
//             cy.confirmPaypalExpress()
//             successPage.checkSuccessMessage()
//         }
//         else { // otherwise if placeOrder=false then cancel the payment

//             cy.cancelPaypal()
//             cartPage.proceedToCheckout()

//         }
//     }
// }