import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';
import comparePricePage from '../pageobjects/comparePrice.page';
import ComparePriceTask from '../tasks/comparePriceTask';
import LoginTask from '../tasks/loginTask';

const pages = {
    login: LoginPage,
    register: registerPage,
    comparePrice: comparePricePage
}

Given(/^I am on the products page$/, async () => {
    await LoginPage.open()
    await LoginPage.identify.click();
    await LoginTask.login("miboxa5375@klanze.com", "12345Jose");
    await browser.pause(2000);
    await comparePricePage.btnBuyAgain.click();
    
});

When(/^I add two products to shopping cart$/, async () => {
    await ComparePriceTask.addShoppingCart();
    await browser.pause(2000);
 });

 Then(/^I should see the same price between total price and shopping cart$/, async () => {
    
    await expect(ComparePriceTask.comparePrice()).toHaveTextContaining("US$5.99");
    
 });