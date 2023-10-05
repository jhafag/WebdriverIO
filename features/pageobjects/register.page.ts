import { $, browser } from '@wdio/globals';
import Page from './page';

class RegisterPage extends Page {

    public get btnregistro() {
        return $('//*[@data-testid="open-registration-form-button"]');
    }

    public get inputNombre() {
        return $('//*[@name="firstname"]');
    }

    public get inputApellido() {
        return $('//*[@name="lastname"]');
    }
    public get inputCorreo() {
        return $('//*[@name="reg_email__"]');
    }
    public get inputCorreoConfir() {
        return $('//*[@name="reg_email_confirmation__"]');
    }
    public get inputContra() {
        return $('//*[@name="reg_passwd__"]');
    }

    public get inputSex() {
        return $('(//*[@name="sex"])[2]');
    }

    public get inputRegistro() {
        return $('//*[@name="websubmit"]');
    }

    public get inputYear() {
        return $('//*[@id="year"]');
    }
    public get inputMonth() {
        return $('//*[@id="month"]');
    }
    public get inputDay() {
        return $('//*[@id="day"]');
    }

    public get textMsmFail() {
        return $("//div[contains(text(),'direcci')]");
    }

    

}
export default new RegisterPage();