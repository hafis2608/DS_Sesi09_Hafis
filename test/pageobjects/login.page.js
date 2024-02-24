const { $ } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {

    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get buttonLogin () { return $('#login-button'); }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login () {
        await this.fieldUsername.setValue('standard_user');
        await this.fieldPassword.setValue('secret_sauce');
        await this.buttonLogin.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();
