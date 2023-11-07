import { $, browser } from '@wdio/globals';
import { LoginPage} from "../pageobjects/login.page"

export class loginTask extends LoginPage {

    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.btnContinue.click();
        await browser.pause(2000);
        await this.inputPassword.setValue(password);
        await this.btnSingIn.click();
        await browser.pause(9000);
    }

}
export default new loginTask();