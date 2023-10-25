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
        return $('(//span[contains(text(),"Agregar al carrito")])[1]')
    }
    public get btnBuyProductTwo(){
        return $('(//span[contains(text(),"Agregar al carrito")])[2]')
    }

    public get btnGoToCart(){
        return $('//*[@id="nav-cart-text-container"]/span[2]')
    }
    public async addShoppingCart () {
        await this.btnBuyAgain.click();
        await this.btnBuyProductTwo.click();
        await this.btnBuyProductOne.click();
        await this.btnGoToCart.click();
        await browser.pause(2000);
    }

}
export default new comparePricePage();