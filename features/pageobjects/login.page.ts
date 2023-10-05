import { $ } from '@wdio/globals'
import Page from './page';

export class LoginPage extends Page {

    GENDER_RADIO_BUTTON = (fileName: string) => `(//input[@type='radio'])[${fileName}]`

    public get genderButton(){return $("//*[contains(text(),'Hombre')]")}
    public get inputContraseña(){ return $("#pass")}
    public get inputEmail(){return $("#email")}
    public get buttonLogin(){return $("(//*[contains (text(), 'Iniciar sesión')])[1]")}
    public get createAccountButton(){return $("//a[@data-testid='open-registration-form-button']")}
    public get firstName(){return $("//input[@name='firstname']")}
    public get lastName(){return $("//input[@name='lastname']")}
    public get contactInformation(){return $("//input[@name='reg_email__']")}
    public get newPassword(){return $("#password_step_input")}
    public get daySelector(){return $("#day")}
    public get monthSelector(){return $("#month")}
    public get yearSelector(){return $("#year")}
    public get registrarte(){return $("(//button[contains (text(), 'Registrarte')])[1]")}
    
    public open() {
        return super.open();
    }
}
export default new LoginPage();
