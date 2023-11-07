import { $, browser } from '@wdio/globals';
import { ComparePricePage} from "../pageobjects/comparePrice.page"

export class ComparePriceTask extends ComparePricePage {


    price: Array<string> = [];

    public async addShoppingCart () {
        //await this.btnBuyAgain.click();
        await browser.scroll(0, 200)
        await this.btnBuyProductTwo.click();
        await this.price.push(this.txtGetPriceTwo.getText());
        await this.price.push(this.txtGetPriceOne.getText());
        await this.btnBuyProductOne.click();
        await this.btnGoToCart.click();
        await this.price.push(this.txtGetCartPriceTwo.getText());
        await browser.pause(2000);
        await this.price.push(this.txtGetCartPriceOne.getText());
        await browser.pause(2000);
        
    }

    public async comparePrice() {
        let prices2: string = this.price[2];
        let prices0: string = this.price[0];
        console.log(prices2, "hola2", prices0);
        console.log(this.price[3], "hola1", this.price[1]);

        if (prices2 == prices0) {
            console.log("hola2 prcio producto correct");
            if (this.price[1] == this.price[3]) {
                console.log("hola1 prcio producto correct");
                return "true";
            } else {
                return "Producto 1 no coinciden";
            }
        } else {
            return "Producto 1 no coinciden";
        }

    }
}

export default new ComparePriceTask();