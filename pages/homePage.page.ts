// playwright-dev-page.ts

//in ts page object pattern looks like this

import { expect, Locator, Page } from "@playwright/test";

export class homePage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('[id="user-name"]');
    this.passwordInput = page.locator('[id="password"]');
    this.loginBtn = page.locator('[id="login-button"]');
  }

  async checkPageUrl() {
    await expect(this.page).toHaveURL("");
  }

  async goto() {
    await this.page.goto("");
  }

  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  async doLogin(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.loginBtn.click();
  }
}
