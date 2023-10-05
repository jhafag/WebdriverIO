import { $, browser } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#pass');
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
    }

    public get inputEmail () {
        return $('#email');
    }

    public get btninicio () {
        return $('//*[@name="login"]');
    }

    

    

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async loginFacebook (email: string, password: string) {
        await browser.pause(2000);
        await this.inputEmail.setValue(email);
        await browser.pause(2000);
        await this.inputPassword.setValue(password);
        await browser.pause(2000);
        await this.btninicio.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new LoginPage();
