import { $, browser } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class comparePricePage extends Page {

    public get btnBuyAgain () {
        return $('//*[@id="nav-xshop"]/a[3]');
    }

    public get btnBuyProductOne(){
        return $('(//input[@name="submit.addToCart"])[1]')
    }
    public get btnBuyProductTwo(){
        return $('(//input[@name="submit.addToCart"])[2]')
    }

    public get btnGoToCart(){
        return $('//*[@id="nav-cart-text-container"]/span[2]')
    }

    public get txtGetPriceOne(){
        return $('(//span[@class="_YnV5L_singlePriceToPay_1QbWS"])[1]')
    }

    public get txtGetPriceTwo(){
        return $('(//span[@class="_YnV5L_singlePriceToPay_1QbWS"])[2]')
    }
    public async addShoppingCart () {
        //await this.btnBuyAgain.click();
        await this.btnBuyProductTwo.click();
        await this.btnBuyProductOne.click();
        await this.btnGoToCart.click();
        await browser.pause(2000);
    }

}
export default new comparePricePage();