// @ts-check
const { test, expect } = require('@playwright/test');
const {Home} = require('../POM/HomePage');
const {LoginSignupPage} = require('../POM/LoginSignupPage');

test.only('zsdasdasd', async ({ page }) => {
  
const home = new Home(page);
const login = new LoginSignupPage(page);


await home.goTo('https://automationexercise.com/login');
await home.navigateToSignUpLogin();
await login.login('test@gmail.com', 'passwortest');

await page.waitForTimeout(5000);




});