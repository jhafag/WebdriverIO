import RegisterPage




export class RegistroTask extends RegisterPage{

    public async llenarDatos(nombre: string, apellido: string, correo: string, correoconf: string, contra: string) {
        await this.btnregistro.click();
        await browser.pause(3000);
        await this.inputNombre.setValue(nombre);
        await this.inputApellido.setValue(apellido);
        await this.inputCorreo.setValue(correo);
        await this.inputCorreoConfir.setValue(correoconf);
        await this.inputContra.setValue(contra);
        await this.inputSex.click();
        await browser.pause(2000);
        //  await this.inputAno.click();
        await this.inputYear.selectByAttribute("value", "1994");
        await this.inputMonth.selectByAttribute("value", "12");
        await this.inputDay.selectByAttribute("value", "29");
        await browser.pause(2000);


    }

    public async registrarse() {
        await this.inputRegistro.click();
        await browser.pause(9000);
    }
}