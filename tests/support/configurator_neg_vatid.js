import { expect } from 'playwright/test'
import jsonLogic from 'json-logic-js'
import { Cart } from './cart'
import { Checkout } from './checkout'

exports.NEGVATID = class NEGVATID {

    constructor(page) {
        this.page = page;
    }

    async startFromConfigurator(testcase) {

        // load configurator
        await this.page.goto('/plissee/plissee-konfigurator')

        // select Stoff
        await this.page.locator('.configurator-button-subsection').click();
        await this.page.locator('#material-collection > ul').locator(":scope > *").getByText(testcase.produkt).first().click();

        // confirm selection
        await this.page.locator('button[type="button"]').getByText(/Auswahl übernehmen/).first().click();
    }

    async startFromProductPage(testcase) {

        // go to PDP
        await this.page.goto(testcase.produkt)

        // check from prices
        await expect(this.page.locator('.old-price')).toContainText(testcase.ab_preis)
        await expect(this.page.locator('.special-price')).toContainText(testcase.ab_preis_red)

        //load configurator
        await this.page.locator("#configurator-button").click()

    }

    async configure_neg_vatid(testcase) {

        //***************************************************** PRICE CALCULATION **************************************************** */
        //*************************************************************************************************************************** */
        //grundpreis
        let grundPreis_red = (jsonLogic.apply({ '*': [testcase.discount, testcase.grundpreis] })).toFixed(2);
        let grundPreis_red_2 = (jsonLogic.apply({ '*': [testcase.discount_2, testcase.grundpreis_2] })).toFixed(2);
        let grundPreis_red_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red, 119] }), testcase.vat] })).toFixed(2);
        let grundPreis_red_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [grundPreis_red_2, 119] }), testcase.vat] })).toFixed(2);
        let grundpreis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.grundpreis, 119] }), testcase.vat] })).toFixed(2);
        let grundpreis_mwst_2 = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.grundpreis_2, 119] }), testcase.vat] })).toFixed(2);

        //zusätze
        let bediengriff_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.bediengriff_preis, 119] }), testcase.vat] })).toFixed(2);
        let bedienstab_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.bedienstab_preis, 119] }), testcase.vat] })).toFixed(2);
        let zusatz_preis_mwst = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [testcase.zusatz_preis, 119] }), testcase.vat] })).toFixed(2);

        //Konfigurator & Warenkorb
        let streichPreis = (jsonLogic.apply({ '+': [testcase.grundpreis, testcase.grundpreis_2, testcase.bediengriff_preis, testcase.bedienstab_preis, testcase.zusatz_preis] })).toFixed(2)
        let streichPreisTotal = (jsonLogic.apply({ '*': [streichPreis, testcase.anzahl] })).toFixed(2)
        let redPreis = (jsonLogic.apply({ '+': [grundPreis_red, grundPreis_red_2, testcase.bediengriff_preis, testcase.bedienstab_preis, testcase.zusatz_preis] })).toFixed(2)
        let redPreisTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let warenkorbTotal = (jsonLogic.apply({ '*': [redPreis, testcase.anzahl] })).toFixed(2)
        let sieSparen = (jsonLogic.apply({ '-': [streichPreisTotal, redPreisTotal] })).toFixed(2)


        //Checkout & Backend
        let versandkosten = testcase.versandkosten.toFixed(2)
        let streichPreis_mwst = (jsonLogic.apply({ '+': [grundpreis_mwst, grundpreis_mwst_2, bediengriff_preis_mwst, bedienstab_preis_mwst, zusatz_preis_mwst] })).toFixed(2)
        let streichPreisTotal_mwst = (jsonLogic.apply({ '*': [streichPreis_mwst, testcase.anzahl] })).toFixed(2)
        let redPreis_mwst = (jsonLogic.apply({ '+': [grundPreis_red_mwst, grundPreis_red_mwst_2, bediengriff_preis_mwst, bedienstab_preis_mwst, zusatz_preis_mwst] })).toFixed(2)
        let redPreisTotal_mwst = (jsonLogic.apply({ '*': [redPreis_mwst, testcase.anzahl] })).toFixed(2)
        let sieSparen_mwst = (jsonLogic.apply({ '-': [streichPreisTotal_mwst, redPreisTotal_mwst] })).toFixed(2)
        let total_mwst = (jsonLogic.apply({ '+': [redPreisTotal_mwst, testcase.versandkosten] })).toFixed(2)

        //ONLY BACKEND (Befestigungen und Zusätze werden in manchen Fällen im Backend getrennt gelistet und berechnet)
        let einzel_backend = redPreis_mwst
        let summe_backend = (jsonLogic.apply({ '*': [einzel_backend, testcase.anzahl] })).toFixed(2)
        let total_backend = total_mwst
        // let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [summe_backend, testcase.vat] }), testcase.mwst_1] })).toFixed(2);
        let steuer_betrag = (jsonLogic.apply({ '*': [jsonLogic.apply({ '/': [redPreisTotal_mwst, testcase.vat] }), testcase.mwst_1] }))//.toFixed(3);
        steuer_betrag = (Math.round(steuer_betrag * 100) / 100).toString()  // needed for correct rounding
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

        streichPreis = streichPreis.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis = redPreis.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal = streichPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal = redPreisTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        warenkorbTotal = warenkorbTotal.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen = sieSparen.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        sieSparen_mwst = sieSparen_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreis_mwst = streichPreis_mwst.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        streichPreisTotal_mwst = streichPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreis_mwst = redPreis_mwst.replace('.', ',').replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        redPreisTotal_mwst = redPreisTotal_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        steuer_betrag = steuer_betrag.replace('.', ',')
        steuer_betrag_gesamt = steuer_betrag_gesamt.replace('.', ',')
        versandkosten = versandkosten.replace('.', ',')
        einzel_backend = einzel_backend.replace('.', ',')
        summe_backend = summe_backend.replace('.', ',')
        total_backend = total_backend.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000
        total_mwst = total_mwst.replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') //needed for separator 1.000


        //-------------------------------------------------------------------------------------------------------------------------------\\
        //********************************************************************************************************************************/

        const emailSuffix = Date.now();
        if (testcase.login != "customer") {
            testcase.email = testcase.email.replace("@", "_" + emailSuffix + "@");
        }

        // check Startpreise
        await expect(this.page.locator("#configurator-navigation div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-navigation div.special-price > span")).toContainText(testcase.ab_preis_red)
        await expect(this.page.locator("#configurator-price-cart div.old-price > span")).toContainText(testcase.ab_preis)
        await expect(this.page.locator("#configurator-price-cart div.special-price > span")).toContainText(testcase.ab_preis_red)

        // set Produktgruppe
        await this.page.locator('.tabs').locator(":scope > *").getByText(testcase.produktgruppe).first().click();

        // set Plisseemodell
        if (testcase.system == "Cosiflor") {
            if (testcase.produkt == "rechteckige Plissees") {
                //Weitere Modelle aufklappen
                await this.page.locator('.btn-group > :nth-child(1)').click();
            }
            await this.page.locator('.type-selector-left > ul').locator(":scope > *").getByText(testcase.modell).first().click();
        }

        // set Ausrichtung
        if (typeof testcase.ausrichtung !== "undefined") {
            await this.page.getByText(new RegExp("^" + testcase.ausrichtung + "\\s*$")).first().click();
        }

        // set Unterer Stoff
        if (typeof testcase.unterer_Stoff !== "undefined") {
            await this.page.locator('button').getByText(/Auswahl ändern/).first().click();
            await this.page.locator('#material-collection > ul').locator(":scope > *").getByText(testcase.unterer_Stoff).first().click();
            await this.page.locator('button[type="button"]').getByText(/Auswahl übernehmen/).first().click();
        }

        // ****************************************** set Maße ******************************************

        // set Höhe
        if (typeof testcase.hoehe != "undefined") {
            await this.page.locator('#hoehe input').fill(testcase.hoehe);
        }

        // set Höhe links
        if (typeof testcase.hoehe_links != "undefined") {
            await this.page.locator('#hoehe_links input').fill(testcase.hoehe_links);
        }

        // set Höhe rechts
        if (typeof testcase.hoehe_rechts != "undefined") {
            await this.page.locator('#hoehe_rechts input').fill(testcase.hoehe_rechts);
        }

        // set Höhe gesamt
        if (typeof testcase.gesamthoehe != "undefined") {
            await this.page.locator('#total_height input').fill(testcase.gesamthoehe);
        }

        // set Höhe teil
        if (typeof testcase.teilhoehe != "undefined") {
            await this.page.locator('#partial_height input').fill(testcase.teilhoehe);
        }

        // set Breite
        if (typeof testcase.breite != "undefined") {
            await this.page.locator('#breite input').fill(testcase.breite);
        }

        // set Breite oben
        if (typeof testcase.breite_oben != "undefined") {
            await this.page.locator('#breite_oben input').fill(testcase.breite_oben);
        }

        // set Breite unten
        if (typeof testcase.breite_unten != "undefined") {
            await this.page.locator('#breite_unten input').fill(testcase.breite_unten);
        }

        // set switscher
        if (testcase.df_switcher != "") {
            if (testcase.df_switcher == "Genormt") {
                await this.page.getByText(/Dachfenster auswählen/).first().click();
            }
            else
                if (testcase.df_switcher == "Ungenormt") {
                    await this.page.getByText(/Maße des Dachfenster manuell eingeben/).first().click();
                }
        }

        // set Hersteller
        if (typeof testcase.df_hersteller != "undefined") {
            await this.page.selectOption(('.dfselect select'), testcase.df_hersteller)
        }

        // set Produkt
        if (typeof testcase.df_produkt != "undefined") {
            await this.page.selectOption(('.dfselect:nth-of-type(2) select'), testcase.df_produkt)
        }

        // set Typ
        if (typeof testcase.df_typ != "undefined") {
            await this.page.selectOption(('.dfselect:nth-of-type(3) select'), testcase.df_typ)
        }

        // set Falztyp
        if (typeof testcase.df_falzart != "undefined") {
            await this.page.getByText(testcase.df_falzart).first().click();
        }

        // set Glasbreite
        if (typeof testcase.df_glasbreite != "undefined") {
            await this.page.locator('#glasbreite input').fill(testcase.df_glasbreite);
        }

        // set Glashöhe
        if (typeof testcase.df_glashoehe != "undefined") {
            await this.page.locator('#glashoehe input').fill(testcase.df_glashoehe);
        }

        // set Falztiefe
        if (typeof testcase.df_falztiefe != "undefined") {
            await this.page.locator('#falztiefe input').fill(testcase.df_falztiefe);
        }

        // set Finnenbreite
        if (typeof testcase.df_fluegelbreite != "undefined") {
            await this.page.locator('#finnenbreite input').fill(testcase.df_fluegelbreite);
        }

        // set Finnenhöhe
        if (typeof testcase.df_fluegelhoehe != "undefined") {
            await this.page.locator('#finnenhoehe input').fill(testcase.df_fluegelhoehe);
        }

        // ****************************************** set other options ******************************************

        // set Befestigung
        if (typeof testcase.befestigung != "undefined") {
            await this.page.waitForTimeout(3000);  // Falzfix selection fails without wait
            await this.page.getByText(new RegExp("^" + testcase.befestigung + "\\s*$")).first().click();
        }

        // set Schienenfarbe
        await this.page.getByText(new RegExp("^" + testcase.schienenfarbe + "\\s*$")).first().click();

        // set Bedienseite
        if (typeof testcase.bedienseite != "undefined") {
            await this.page.locator('#bedienung-normal > ul').locator(":scope > *").getByText(testcase.bedienseite).first().click();
        }

        // set Pendelsicherung
        if (typeof testcase.pendelsicherung != "undefined") {
            await this.page.locator('#pendelsicherung-normal > ul > :nth-child(2)').click();
        }

        // set Bediengriff
        if (typeof testcase.bediengriff !== "undefined") {
            await this.page.getByText(testcase.bediengriff).first().click();
        }

        // set Bedienstab
        if (typeof testcase.bedienstab !== "undefined") {
            await this.page.locator('#bedienstab-normal > :nth-child(1) > ul > :nth-child(2)').click();
            await this.page.getByText(testcase.bedienstab).first().click();
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
        await newCheckout.checkOut_negVATID(testcase.system, testcase.email, testcase.prefix, testcase.company_name, testcase.vatID1_false, testcase.vatID1_correct, testcase.prefix_business, testcase.first_name, testcase.last_name, testcase.street, testcase.postal_code, testcase.city, testcase.state, testcase.phone, testcase.shipping, versandkosten, testcase.prefix2, testcase.company_name2, testcase.vatID2_false, testcase.vatID2_correct, testcase.prefix_business2, testcase.first_name2, testcase.last_name2, testcase.street2, testcase.postal_code2, testcase.city2, testcase.state2, testcase.phone2, testcase.payment)
        await newCheckout.checkFinalPrices(testcase.system, testcase.rabatt_code, testcase.rabatt_betrag_checkout, sieSparen_mwst, versandkosten, streichPreis_mwst, streichPreisTotal_mwst, redPreis_mwst, redPreisTotal_mwst, total_mwst)
        await newCheckout.placeOrder(testcase.system, testcase.payment, testcase.failed_payment, testcase.canceled_payment, versandkosten, testcase.rabatt_code, testcase.rabatt_betrag_backend, testcase.rabatt_betrag_backend2, testcase.mwst_1, testcase.mwst_2, testcase.mwst_3, testcase.vatRateLine_4, testcase.vatRateLine_5, testcase.vatRateLine_6, steuer_betrag, steuer_betrag_2, steuer_betrag_3, testcase.vatAmountLine_4, testcase.vatAmountLine_5, testcase.vatAmountLine_6, steuer_betrag_gesamt, einzel_backend, summe_backend, sideProduct_1, sideProduct_1_total, sideProduct_2, sideProduct_2_total, sideProduct_3, sideProduct_3_total, sideProduct_4, sideProduct_4_total, sideProduct_5, sideProduct_5_total, total_backend)
    }
}