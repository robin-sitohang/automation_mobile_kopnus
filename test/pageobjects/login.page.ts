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

    private get inputPhoneNumber() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)');
        //android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[1]/android.widget.EditText
    }

    private get inputPassword() {
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)');
    }

    private get btnLoginFormSubmit() {
        return $('android=new UiSelector().description("Login").instance(1)');
    }

    private get otpTitle() {
        return $('~Masukkan Kode OTP');
    }

    private get otpInput1() {
        return $('~1');
    }

    private get otpInput2() {
        return $('~2');
    }

    private get otpInput3() {
        return $('~3');
    }

    private get homeTitle() {
        return $('~Homepage');
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

    async enterPhoneNumber(username: string) {
        await this.inputPhoneNumber.click();
        await this.inputPhoneNumber.setValue(username);
    }

    async enterPassword(password: string) {
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
    }

    async tapLoginFormSubmit() {
        await this.btnLoginFormSubmit.click();
    }

    async verifyOTPScreen() {
        await expect(this.otpTitle).toBeDisplayed();
    }

    async enterOTP1() {
        await this.otpInput1.click();
    }

    async enterOTP2() {
        await this.otpInput2.click();
    }

    async enterOTP3() {
        await this.otpInput3.click();
    }

    async verifyHomeScreen() {
        await expect(this.homeTitle).toBeDisplayed();
    }
}

export default new LoginPage();