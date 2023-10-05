import { LoginPage } from '../pageobjects/login.page';
import { browser } from '@wdio/globals'

export class RegistroTask extends LoginPage{

    clickRegistrarse() {
        this.createAccountButton.click();
    }

    public async crearCuenta() {
        await this.firstName.setValue("Andres")
        await this.lastName.setValue("Caro")
        await this.contactInformation.setValue("3194092899")
        await browser.pause(3000)
        await this.newPassword.setValue("Prueba123")
        await browser.pause(3000)
        await this.daySelector.selectByAttribute("value", "27")
        await browser.pause(3000)
        await this.monthSelector.selectByAttribute("value", "6")
        await browser.pause(3000)
        await this.yearSelector.selectByAttribute("value", "1997")
        await browser.pause(3000)
        await browser.$(this.GENDER_RADIO_BUTTON("2")).click()
        await this.registrarte.click()
    }
}