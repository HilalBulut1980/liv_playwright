import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Schiebegardine_gesamt = class Schiebegardine_gesamt {

    constructor(page) {
        this.page = page;
    }

    async startFromConfigurator(testcase) {

        await this.page.goto('/schiebegardinen/schiebegardinen-konfigurator')
        await this.page.getByText(/Farbe & Eigenschaften ändern/).first().click();
        await this.page.getByText(testcase.produkt).first().click();
        await this.page.getByText(/Auswahl übernehmen/).first().click();

    }

    async startFromProductPage(testcase) {

        await this.page.goto(testcase.produkt)
        await expect(this.page.locator('.old-price')).toContainText(testcase.ab_preis)
        await expect(this.page.locator('.special-price')).toContainText(testcase.ab_preis_red)
        await this.page.locator("#configurator-button").click()
    }

    async configureSchiebegardineGesamt(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        //grundpreis
        let paneele = (jsonLogic.apply({ '*': [testcase.paneel_preis, testcase.paneel_anzahl] })).toFixed(2);
        let paneele_red = (jsonLogic.apply({ '*': [testcase.discount, paneele] })).toFixed(2);
        let paneele_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [paneele, 119] }), testcase.vat] })).toFixed(2);
        let paneele_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [paneele_red, 119] }), testcase.vat] })).toFixed(2);

        //zusätze
        // Schiene wird rabattiert
        let schiene_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.schienen_preis, 119] }), testcase.vat] })).toFixed(2);
        let schiene_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.schienen_preis] })).toFixed(2);
        let schiene_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [schiene_red, 119] }), testcase.vat] })).toFixed(2);

        // Endstab wird rabattiert
        let endstab_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.endstab_preis, 119] }), testcase.vat] })).toFixed(2);
        let endstab_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.endstab_preis] })).toFixed(2);
        let endstab_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [endstab_red, 119] }), testcase.vat] })).toFixed(2);

        // Bediengriffe werden NICHT rabattiert (Gardinia)
        let bediengriffe_einzeln_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.bediengriff_einzeln, 119] }), testcase.vat] })).toFixed(2);
        let bediengriffe_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.bediengriff_preis, 119] }), testcase.vat] })).toFixed(2);
        let bediengriffe_mwst_total = (jsonLogic.apply({ '*': [bediengriffe_einzeln_mwst, testcase.anzahl, testcase.anzahl_bediengriff] })).toFixed(2)

        // Befestigung wird NICHT rabattiert
        let befestigung_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.befestigung_preis, 119] }), testcase.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [paneele, testcase.schienen_preis, testcase.endstab_preis, testcase.bediengriff_preis, testcase.befestigung_preis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)

        let redPreis = (jsonLogic.apply({ '+': [paneele_red, schiene_red, endstab_red, testcase.bediengriff_preis, testcase.befestigung_preis] })).toFixed(2);
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

        // Checkout
        let streichPreis_mwst = (jsonLogic.apply({ '+': [paneele_mwst, schiene_mwst, endstab_mwst, bediengriffe_mwst, befestigung_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2);
        let redPreis_mwst = (jsonLogic.apply({ '+': [paneele_red_mwst, schiene_red_mwst, endstab_red_mwst, bediengriffe_mwst, befestigung_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2);
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, testcase.versandkosten] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let versandkosten = testcase.versandkosten.toFixed(2);

        //Backend
        let preis_backend = (jsonLogic.apply({ '+': [paneele_red_mwst, schiene_red_mwst, endstab_red_mwst, befestigung_mwst] })).toFixed(2)
        let preis_backend_total = (jsonLogic.apply({ '*': [preis_backend, testcase.anzahl] })).toFixed(2);
        let sideProduct_1 = bediengriffe_einzeln_mwst;
        let sideProduct_1_total = (jsonLogic.apply({ '*': [bediengriffe_einzeln_mwst, testcase.anzahl, testcase.paneel_anzahl] })).toFixed(2);

        let total_backend = (jsonLogic.apply({ '+': [preis_backend_total, sideProduct_1_total, testcase.versandkosten] })).toFixed(2)

        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [preis_backend_total, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        console.log('Steuerbetrag Hauptprodukt: ' + steuer_betrag)
        let steuer_betrag_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [sideProduct_1_total, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        console.log('Steuerbetrag Nebenprodukt: ' + steuer_betrag_2)
        let steuer_betrag_3;
        let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.versandkosten, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let steuer_betrag_gesamt = (jsonLogic.apply({ '+': [steuer_betrag, steuer_betrag_2, steuer_versand] })).toFixed(2)
        console.log('Steuerbetrag Gesamt: ' + steuer_betrag_gesamt)


        let sideProduct_2
        let sideProduct_2_total
        let sideProduct_3
        let sideProduct_3_total
        let sideProduct_4
        let sideProduct_4_total
        let sideProduct_5
        let sideProduct_5_total

        //-------------------------------------------------------------------------------------------------------------------------------\\
        //---------------------   --------- replace . with , and add separator if needed -------------------------------------------------\\

        streichPreis = streichPreis.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis = redPreis.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_2 = steuer_betrag_2.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        preis_backend = preis_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        preis_backend_total = preis_backend_total.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sideProduct_1 = sideProduct_1.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000 = preis_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sideProduct_1_total = sideProduct_1_total.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000



        //-------------------------------------------------------------------------------------------------------------------------------\\
        //****************************************************************************************************************************/

        const emailSuffix = Date.now();

        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // set SG Typ
        await this.page.getByText(testcase.modell).first().click();

        // check Startpreise
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.ab_preis_red)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.ab_preis_red)

        // set Breite
        await this.page.locator('#breite_in_mm input').fill(testcase.breite);

        // set Höhe
        await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);

        // set Anzahl Paneele
        if (typeof testcase.paneel_anzahl !== "undefined") {
            await this.page.locator('#paneelnumber input').clear();
            await this.page.locator('#paneelnumber input').fill(((testcase.paneel_anzahl).toString()));
        }

        // set Overlap
        if (typeof testcase.overlap !== "undefined") {
            // await this.page.locator('#paneeloverlap input').clear();
            await this.page.locator('#paneeloverlap input').fill(testcase.overlap);
        }

        // set Schienenlauf
        if (typeof testcase.lauf_schiene !== "undefined") {
            await this.page.locator('#schienenlaeufe-wahlen > :nth-child(1) > div > ul').locator(":scope > *").getByText(testcase.lauf_schiene).first().click();
        }

        // set Schienenfarbe
        if (typeof testcase.farbe_schiene !== "undefined") {
            await this.page.locator('div[options-property="schienenfarbe"] ul li').getByText(testcase.farbe_schiene).first().click();

        }

        // set Schienenart
        if (typeof testcase.art_schiene !== "undefined") {
            await this.page.locator('span').getByText(testcase.art_schiene).first().click();
        }

        // set Montage
        if (typeof testcase.montage !== "undefined") {
            await this.page.getByText(new RegExp("^" + testcase.montage + "\\s*$")).first().click();
        }

        // set Bediengriff
        if (typeof testcase.bediengriff !== "undefined") {
            await this.page.locator('h4').getByText(testcase.bediengriff).first().click();
        }

        // set Anzahl Bediengriff
        if (typeof testcase.anzahl_bediengriff !== "undefined") {
            // await page.locator('input[id="bediengriffe_value"]').clear();
            await this.page.locator('input[id="bediengriffe_value"]').fill(((testcase.anzahl_bediengriff).toString()));
        }

        // set Endstab
        if (typeof testcase.endstab !== "undefined") {
            await this.page.getByText(new RegExp("^" + testcase.endstab + "\\s*$")).first().click();
        }

        // check prices
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(streichPreis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(redPreis)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(streichPreis)
        await expect(this.page.locator("#configurator-price-cart div.special-price > span")).toContainText(redPreis)

        // add to cart
        // await this.page.locator('#configurator-price-cart > .add-to-cart input').clear();
        await this.page.locator('#configurator-price-cart > .add-to-cart input').fill(((testcase.anzahl).toString()));
        await this.page.locator('#configurator-price-cart > .add-to-cart button').click();


        // Erstelle eine Instanz der Klasse Cart
        const newCart = new Cart(this.page)
        // Erstelle eine Instanz der Klasse Checkout
        const newCheckout = new Checkout(this.page)

        // cart functions
        await newCart.checkCart(streichPreis, redPreis, streichPreisTotal, redPreisTotal, testcase.system)
        await newCart.checkCartTotals(testcase.system, warenkorbTotal, sieSparen, testcase.rabatt_code, testcase.rabatt_betrag, testcase.sieSparen_new, testcase.total_cart_new)
        await newCart.proceedToCheckout(testcase.system, testcase.paypalexpress)

        // checkout functions
        await newCheckout.checkOut(testcase.system, testcase.login, testcase.email, testcase.password, testcase.prefix, testcase.company_name, testcase.vatID, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID_2, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, testcase.rabatt_betrag_mwst, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        console.log(steuer_betrag)
        console.log(steuer_betrag_gesamt)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, testcase.rabatt_betrag_backend, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, preis_backend, preis_backend_total, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}