import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Muster = class Muster {

    constructor(page) {
        this.page = page;
    }

    async configureMuster(testcase) {

        const emailSuffix = Date.now();

        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // visit URL
        await this.page.goto(testcase.produkt)

        // check from prices
        await expect(this.page.locator('.old-price')).toContainText(testcase.ab_preis);
        await expect(this.page.locator('.special-price')).toContainText(testcase.ab_preis_red);

        // add sample to cart
        await this.page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click();

        // // load configurator
        // if (testcase.system == "Muster") {
        //     // await this.page.locator('.buttons > .buttons__samples').click();
        //     await this.page.locator('#free-samples-addtocart').click();
        // } else
        // if (testcase.system == "Muster_V") {
        //     // await this.page.locator('#free-samples-addtocart:visible').click();
        //     // await this.page.getByRole('button', { name: 'Gratis Stoffprobe anfordern' }).click();
        //     await this.page.locator('#free-samples-addtocart').click();
        // }

        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // cart functions
        await newCart.checkCartSpecial(testcase.system, testcase.unit, testcase.total)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, testcase.versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.shipping, testcase.versandkosten, testcase.state, testcase.state2, testcase.reduced_unitprice, testcase.subTotal_cart, testcase.kissenSet40, testcase.kissenSet40_original, testcase.kissenSet40_reduced, testcase.kissenSet40_original_total, testcase.kissenSet40_reduced_total, testcase.kissenSet50, testcase.kissenSet50_original, testcase.kissenSet50_reduced, testcase.kissenSet50_original_total, testcase.kissenSet50_reduced_total, testcase.supplier, testcase.anzahl, testcase.vatID, testcase.vatID_2, testcase.state_code, testcase.state_code_2)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, testcase.versandkosten, testcase.rabatt_code, testcase.rabatt_betrag_backend, testcase.rabatt_betrag_backend2, testcase.vatRateLine_1, testcase.vatRateLine_2, testcase.vatRateLine_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, testcase.vatProduct, testcase.vatAmountLine_2, testcase.vatAmountLine_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, testcase.vatAmountTotal)
    }
}