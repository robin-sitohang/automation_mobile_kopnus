import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../pageobjects/login.page';

Given(/^I tap Allow on permission$/, async function() {
    await LoginPage.open();
    await LoginPage.tapAllowButton();
});

When(/^I tap Ayo Mulai on welcome$/, async function() {
    await LoginPage.tapAyoMulaiButton();
});

When(/^I tap Login on welcome screen$/, async function() {
    await LoginPage.tapLoginButton();
});

Then(/^I should see login form$/, async function() {
    await LoginPage.verifyLoginPage();
});

When(/^I input phone number$/, async function() {
    await LoginPage.enterPhoneNumber('085921823399');
});

When(/^I input password$/, async function() {
    await LoginPage.enterPassword('123123Aa,');
});

When(/^I tap Login button on login form$/, async function() {
    await LoginPage.tapLoginFormSubmit();
});

When(/^I should be redirected to otp screen$/, async function() {
    await LoginPage.verifyOTPScreen();
});

When(/^I input otp number$/, async function() {
    await LoginPage.enterOTP1();
    await LoginPage.enterOTP2();
    await LoginPage.enterOTP3();
    await LoginPage.enterOTP1();
    await LoginPage.enterOTP2();
    await LoginPage.enterOTP3();
});

When(/^I should be redirected to home screen$/, async function() {
   await LoginPage.verifyHomeScreen();
});
