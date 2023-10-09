import { $, browser } from '@wdio/globals';
import Page from './page';

class RegisterPage extends Page {

    public get singIn(){
        return $('#nav-link-accountList-nav-line-1');
        }
    
    public get starHere(){
        return $('//*[@id="nav-signin-tooltip"]/div/a');
    }

    public get inputUsername () {
        return $('#ap_customer_name');
    }

    public get inputEmail () {
        return $('#ap_email');
    }

    public get inputPassword () {
        return $("//input[@id='ap_password']");
    }
    public get inputPasswordCheck () {
        return $("//input[@id='ap_password_check']");
    }

    public get btnSubmit () {
        return $("//input[@id='continue']");
    }

    public get btninicio () {
        return $('//*[@name="login"]');
    }
    public async createAcount (name: string, email: string, password: string, passwordCheck: string) {
        await browser.pause(2000);
        await this.inputUsername.setValue(name);
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.inputPasswordCheck.setValue(passwordCheck);
        await browser.pause(2000);
        await this.btnSubmit.click();
    }
}
export default new RegisterPage();