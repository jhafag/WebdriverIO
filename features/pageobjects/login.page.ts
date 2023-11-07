import { $, browser } from '@wdio/globals';
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
export class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get identify(){
        return $("//a[@id='nav-link-accountList']");
        }

    public get inputEmail () {
        return $('#ap_email');
    }

    public get inputPassword () {
        return $("//input[@id='ap_password']");
    }
    public get btnContinue () {
        return $('//span[@id="continue"]');
    }

    public get btnSingIn(){
        return $('#signInSubmit');
        }

    public get message(){
        return $('//*[@id="nav-link-accountList-nav-line-1"]')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

  

   

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new LoginPage();

