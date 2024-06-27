import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.Rollo = class Rollo {

    constructor(page) {
        this.page = page;
    }

    async startFromConfigurator(testcase) {

        await this.page.goto('/rollo/rollo-konfigurator')
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

    async configureRollo(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */

        //grundpreis    // 
        // let grundPreis_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.grundpreis] })).toFixed(2);
        let grundPreis_red = (jsonLogic.apply({ '*': [testcase.discount_extra, (jsonLogic.apply({ '*': [testcase.discount, testcase.grundpreis] }))] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), testcase.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.grundpreis, 119] }), testcase.vat] })).toFixed(2);

        //zusätze
        let pendel_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.pendel_preis, 119] }), testcase.vat] })).toFixed(2);
        let ketten_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.ketten_preis, 119] }), testcase.vat] })).toFixed(2);
        let motor_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.motor_preis, 119] }), testcase.vat] })).toFixed(2);
        let bedienstab_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.bedienstab_preis, 119] }), testcase.vat] })).toFixed(2);

        let befestigung_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.befestigung_preis, 119] }), testcase.vat] })).toFixed(2);
        let befestigung_preis_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.befestigung_preis] })).toFixed(2);
        let befestigung_preis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [befestigung_preis_red, 119] }), testcase.vat] })).toFixed(2);

        let kassetten_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.kassetten_preis, 119] }), testcase.vat] })).toFixed(2);
        let kassetten_preis_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.kassetten_preis] })).toFixed(2);
        let kassetten_preis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [kassetten_preis_red, 119] }), testcase.vat] })).toFixed(2);

        let montLeiste_preis_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.montageleiste_preis, 119] }), testcase.vat] })).toFixed(2);
        let montLeiste_preis_preis_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.montageleiste_preis] })).toFixed(2);
        let montLeiste_preis_preis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [montLeiste_preis_preis_red, 119] }), testcase.vat] })).toFixed(2);

        let volant_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.volant_preis, 119] }), testcase.vat] })).toFixed(2);
        let volant_preis_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.volant_preis] })).toFixed(2);
        let volant_preis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [volant_preis_red, 119] }), testcase.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [testcase.grundpreis, testcase.pendel_preis, testcase.ketten_preis, testcase.motor_preis, testcase.bedienstab_preis, testcase.befestigung_preis, testcase.kassetten_preis, testcase.montageleiste_preis, testcase.volant_preis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, testcase.pendel_preis, testcase.ketten_preis, testcase.motor_preis, testcase.bedienstab_preis, befestigung_preis_red, kassetten_preis_red, montLeiste_preis_preis_red, volant_preis_red] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = redPreisTotal
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)

        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2)
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, pendel_preis_mwst, ketten_preis_mwst, motor_preis_mwst, bedienstab_preis_mwst, befestigung_preis_mwst, kassetten_preis_mwst, montLeiste_preis_preis_mwst, volant_preis_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2)
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, pendel_preis_mwst, ketten_preis_mwst, motor_preis_mwst, bedienstab_preis_mwst, befestigung_preis_red_mwst, kassetten_preis_red_mwst, montLeiste_preis_preis_red_mwst, volant_preis_red_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, versandkosten] })).toFixed(2)

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = redPreis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, testcase.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let steuer_betrag_2
        let steuer_betrag_3
        // let steuer_versand = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.versandkosten, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        // let steuer_betrag_gesamt = (jsonLogic.apply({ '+': [steuer_betrag, steuer_versand] })).toFixed(2)
        let steuer_betrag_gesamt = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [total_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let sideProduct_1
        let sideProduct_1_total
        let sideProduct_2
        let sideProduct_2_total
        let sideProduct_3
        let sideProduct_3_total
        let sideProduct_4
        let sideProduct_4_total
        let sideProduct_5
        let sideProduct_5_total


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //----------------------------------------------------- replace . with , ---------------------------------------------------------\\

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
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        einzel_backend = einzel_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        summe_backend = summe_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //****************************************************************************************************************************/


        const emailSuffix = Date.now();
        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // TO DO
        // CHECK IF THIS IS NEEDED
        // cy.intercept('GET', '/config/index/*').as('dfselect')

        // set Rollo-Typ
        await this.page.locator('#type-selector-top > ul').locator(":scope > *").getByText(testcase.rollotyp).first().click(); // this command is more specific

        // check Startpreise
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.ab_preis_red)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.ab_preis_red)


        // set Kassette
        if (typeof testcase.kassette != "undefined") {
            await this.page.locator('#container-kassette li').filter({ hasText: testcase.kassette }).click();
        }

        // only for Mini-Rollos --> Führungsschiene
        if (typeof testcase.schiene != "undefined") {
            await this.page.locator('div[options-property="fuehrungsschiene"]').locator(":scope > *").getByText(testcase.schiene).first().click(); // this command is more specific
        }

        // set Höhe
        if (typeof testcase.hoehe != "undefined") {
            await this.page.locator('#hoehe_in_mm input').fill(testcase.hoehe);
        }

        // set Breite
        if (typeof testcase.breite != "undefined") {
            await this.page.locator('#breite_in_mm input').fill(testcase.breite);
        }

        // set DF Hersteller
        if (typeof testcase.df_hersteller != "undefined") {
            await this.page.locator('#hersteller li').getByText(testcase.df_hersteller).first().click();
        }

        // set DF Produkt
        if (typeof testcase.df_produkt != "undefined") {
            await this.page.selectOption(('.dfselect select'), testcase.df_produkt)
        }

        // set DF Typ
        if (typeof testcase.df_typ != "undefined") {
            await this.page.selectOption(('.dfselect:nth-of-type(2) select'), testcase.df_typ)
        }

        // set DF Falz
        if (typeof testcase.df_falzart != "undefined") {
            await this.page.locator('[id="falztyp"]').locator(":scope > *").getByText(testcase.df_falzart).first().click();
        }

        // set DF Finnenbreite
        if (typeof testcase.df_fluegelbreite != "undefined") {
            await this.page.locator('#finnenbreite input').fill(testcase.df_fluegelbreite);
        }

        // set DF Finnenhöhe
        if (typeof testcase.df_fluegelhoehe != "undefined") {
            await this.page.locator('#finnenhoehe input').fill(testcase.df_fluegelhoehe);
        }

        // set Befestigung
        if (typeof testcase.befestigung != "undefined") {
            await this.page.waitForTimeout(3000);
            await this.page.locator('.montage-type').locator('div').locator('ul').locator(":scope > *").getByText(testcase.befestigung).first().click();
        }

        // set Kugelkette / Motorbedienung
        if (typeof testcase.bedientyp != "undefined") {
            await this.page.locator('#bedienung-normal > div > ul').locator(":scope > *").getByText(testcase.bedientyp).first().click();
        }

        // set Motortyp
        if (typeof testcase.motortyp != "undefined") {
            await this.page.locator('#bedienung-motor > div > ul').locator(":scope > *").getByText(testcase.motortyp).first().click();
        }

        // set Fernbedienung
        if (typeof testcase.fernbedienung !== "undefined") {
            await this.page.locator('div[options-property="remote"]').locator(":scope > *").getByText(testcase.fernbedienung).first().click(); // this command is more specific
        }

        // set Ladegerät
        if (typeof testcase.ladegeraet !== "undefined") {
            await this.page.locator('div[options-property="charger"]').locator(":scope > *").getByText(testcase.ladegeraet).first().click(); // this command is more specific
        }

        // set Bedienseite
        if (typeof testcase.bedienseite != "undefined") {
            await this.page.locator('#bedienung-seite > div > ul').locator(":scope > *").getByText(testcase.bedienseite).first().click();
        }

        // set Kugelkette --> Kunsstoff / Metall
        if (typeof testcase.kugelkette != "undefined") {
            await this.page.locator('#art-der-kugelkette > div > ul').locator(":scope > *").getByText(testcase.kugelkette).first().click();
        }

        // set Volant
        if (typeof testcase.volant !== "undefined") {
            await this.page.locator('div[options-property="volant"]').locator(":scope > *").getByText(testcase.volant).first().click(); // this command is more specific
        }

        // set Dekorstange
        if (typeof testcase.dekorstange !== "undefined") {
            await this.page.locator('div[options-property="farbeDekor"]').locator(":scope > *").getByText(testcase.dekorstange).first().click(); // this command is more specific
        }

        // set Kassettenfarbe
        if (typeof testcase.kassettenfarbe != "undefined") {
            await this.page.locator('.kassette-farbe-container > div > ul').locator(":scope > *").getByText(testcase.kassettenfarbe).first().click();
        }

        // set Aluleiste
        if (typeof testcase.aluleiste_farbe !== "undefined") {
            await this.page.locator('div[options-property="farbeAlumin"]').locator(":scope > *").getByText(testcase.aluleiste_farbe).first().click(); // this command is more specific
        }

        // set Material der Halterung
        if (typeof testcase.halterung !== "undefined") {
            await this.page.locator('div[options-property="halterungMaterial"]').locator(":scope > *").getByText(testcase.halterung).first().click(); // this command is more specific
        }

        // set Farbe der Halterung
        if (typeof testcase.halterung_farbe !== "undefined") {
            await this.page.locator('div[options-property="halterung"]').locator(":scope > *").getByText(testcase.halterung_farbe).first().click(); // this command is more specific
        }

        // set Montagelesite
        if (typeof testcase.montageleiste != "undefined") {
            await this.page.getByText(testcase.montageleiste).first().click();
        }

        // set Pendelsicherung
        if (typeof testcase.pendelsicherung != "undefined") {
            await this.page.locator('#configurator-pendelsicherung > div > ul > :nth-child(2)').click();
        }

        // set Bedienstab
        if (typeof testcase.bedienstab !== "undefined") {
            await this.page.locator('#bedienstab-normal > div > ul > :nth-child(2)').click();
            await this.page.locator('#bedienstabLaenge-normal > div > ul').locator(":scope > *").getByText(testcase.bedienstab).first().click();
        }

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
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, testcase.rabatt_betrag_mwst, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}