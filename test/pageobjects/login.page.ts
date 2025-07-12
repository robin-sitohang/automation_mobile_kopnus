import { $ } from '@wdio/globals'
import Page from './page';

class LoginPage extends Page {
    private get btnAllow() {
        return $('id:com.android.permissioncontroller:id/permission_allow_button');
    }

    private get btnAyoMulai() {
        return $('~Ayo Mulai');
    }

    private get btnLogin() {
        return $('~Login');
    }

    private get txtTitleLogin() {
        return $('//*[@content-desc="Login"]');
    }
    
    async tapAllowButton() {
        await this.btnAllow.click();
    }

    async tapAyoMulaiButton() {
        await this.btnAyoMulai.click();
    }

    async tapLoginButton() {
        await this.btnLogin.click();
    }

    async verifyLoginPage() {
        await expect(this.txtTitleLogin).toBeDisplayed();
    }
}

export default new LoginPage();