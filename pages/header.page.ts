import { expect, Locator, Page } from "@playwright/test";

export class topHeader {
  readonly page: Page;
  readonly cartCounter: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cartCounter = page.locator('[class="shopping_cart_badge"]');
  }
}
