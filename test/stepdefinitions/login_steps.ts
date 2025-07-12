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
