import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { logger } from '../../utils/logger';

let loginPage: LoginPage;

Given('you are on the login page', async function () {
  // ✅ Initialize here
  loginPage = new LoginPage(this.page);
  await loginPage.goto();
  logger.info('Navigated to login page');
});

When('the username field is displayed', async function () {
  await expect(loginPage.usernameField).toBeVisible();
  await expect(loginPage.usernameField).toBeEnabled();
  logger.info('Username field is visible and ready for actions');
});

When('the password field is displayed', async function () {
  await expect(loginPage.passwordField).toBeVisible();
  await expect(loginPage.passwordField).toBeEnabled();
  logger.info('Password field is visible and ready for actions');
});

When('the login button is displayed', async function () {
  await expect(loginPage.loginButton).toBeVisible();
  await expect(loginPage.loginButton).toBeEnabled();
  logger.info('Login button is visible and ready for actions');
});

Then('all login elements should be ready for user actions', async function () {
  await expect(loginPage.usernameField).toBeEnabled();
  await expect(loginPage.passwordField).toBeEnabled();
  await expect(loginPage.loginButton).toBeEnabled();
  logger.info('🎯 All login elements are enabled and ready for user actions');
});
