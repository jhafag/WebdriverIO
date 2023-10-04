import { $ } from '@wdio/globals'
import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    public get campoNombre(){
        return $("//input[(contains(@name,'firstname'))]")
    }

    public get campoApellido(){
        return $("//input[(contains(@name,'lastname'))]")
    }

    public get campoCelular(){
        return $("//input[(contains(@name,'reg_email__'))]")
    }

    public get campoContraseñaNueva(){
        return $("//input[(contains(@name,'reg_email__'))]")
    }
    public get Fecha(){
        return 
    }
    public get checkBoxSexo(){
        return $("")
    }

    public async registerFacebook(email:string, password:string){
        await browser.pause(2000)
        await this.campoEmail.setValue(email)
        await browser.pause(2000)
        await this.campoEmail.setValue(password)
        await browser.pause(2000)
        await this.BotonInicio.click()
    }
    public get RegisBoton(){
        return
    }

    public get btnCrearCuenta(){
        return $('//a[contains(@class,"_42")]')
    }


    public get campoEmail(){
        return $("#email")
    }
    public get campoPass(){
        return $("#pass")
    }
    public async loginFacebook(email:string, password:string){
        await browser.pause(2000)
        await this.campoEmail.setValue(email)
        await browser.pause(2000)
        await this.campoEmail.setValue(password)
        await browser.pause(2000)
        await this.BotonInicio.click()
    }
    //public async registrarFacebook()
    /**
     * define selectors using getter methods
     */
    public get inputUsername () {
        return $('#username');
    }

    public get inputPassword () {
        return $('#password');
    }

    public get BotonInicio () {
        return $("(//*[contains (text (),'Iniciar Sesion')])[1]")
    }

    public get btnSubmit () {
        return $('button[type="submit"]');
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

    /**
     * overwrite specific options to adapt it to page object
     */
    public open () {
        return super.open();
    }
}

export default new LoginPage();
