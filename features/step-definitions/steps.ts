import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import LoginPage from '../pageobjects/login.page';


import registerPage from '../pageobjects/register.page';

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.open()
});
Given(/^El usuario ingresa a la pagina$/, async () => {
    await LoginPage.open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

When(/^El usuario inicia con lo datos$/, async () => {
    await LoginPage.loginFacebook("prueba@gmail.com", "prueba1234");
});

When(/^El usuario registra los datos (.*), (.*), (.*), (.*), (.*)$/, async (nombre,apellido,correo,correoconf,contra) => {
    await RegistroTask.llenarDatos(nombre,apellido,correo,correoconf,contra);
    await registerPage.registrarse();
});

Then(/^El usuario ve el mensaje de error (.*)$/, async (message) => {
    await expect(registerPage.textMsmFail).toBeExisting();
    await expect(registerPage.textMsmFail).toHaveTextContaining(message);
});




