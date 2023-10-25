import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';


import registerPage from '../pageobjects/register.page';

const pages = {
    login: LoginPage,
    register: registerPage
}

Given(/^I am on the create acount page$/, async () => {
    await LoginPage.open()
    //await page.hover(registerPage.singIn())
    await registerPage.starHere.click();
    
});

When(/^I register with (.*), (.*), (.*), (.*)$/, async (username, useremail, password, passwordCheck) => {
   await registerPage.createAcount(username,useremail,password,passwordCheck);
   await browser.pause(900000)
});


Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
    //await browser.pause(19000);
    await LoginPage.identify.click();
    
});

When(/^I login with (.*), (.*)$/, async (useremail, password) => {
    await LoginPage.login(useremail, password);
    await browser.pause(2000);
 });

 Then(/^I should see a message (.*)$/, async (message) => {
    await expect(LoginPage.message).toHaveText(message);
    await browser.pause(2000);
    await window.close();
 });