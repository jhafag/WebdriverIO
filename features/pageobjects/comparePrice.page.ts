import { $, browser } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class ComparePricePage extends Page {

    public get btnBuyAgain () {
        return $('//*[@id="nav-xshop"]/a[2]');
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

    public get txtGetCartPriceOne(){
        return $("(//p[@class='a-spacing-mini'])[1]");
    }
    public get txtGetCartPriceTwo(){
        return $("(//p[@class='a-spacing-mini'])[2]");
    }
    
    
}
export default new ComparePricePage();