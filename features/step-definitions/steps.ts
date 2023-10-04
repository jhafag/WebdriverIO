import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: LoginPage
}

When(/^El usuario inicia con los datos$/, async () => {
    await LoginPage.loginFacebook("prueba@gmail.com","prueba123")
});
Given(/^El usuario ingresa a la pagina$/, async () => {
    await LoginPage.open()
});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

