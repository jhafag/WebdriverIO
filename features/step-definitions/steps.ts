import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';
import { RegistroTask } from '../tasks/RegistroTask';

const registroTask = new RegistroTask();

const pages = {
    login: LoginPage
}

Given(/^el usuario ingresa a la pagina$/, async () => {
    await LoginPage.open()
});

When(/^el usuario se registra con los datos$/, async () => {
    await registroTask.clickRegistrarse()
    await registroTask.crearCuenta()
});

