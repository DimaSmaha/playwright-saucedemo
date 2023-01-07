import { topHeader } from "./header.page";
import { expect, Locator, Page } from "@playwright/test";

export class inventoryPage extends topHeader {
  readonly page: Page;
  readonly backpackTitle: Locator;
  readonly backpackDescription: Locator;
  readonly backpackAddToCartBtn: Locator;
  readonly backpackRemoveFromCartBtn: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
    this.backpackTitle = page.locator('[id="item_4_title_link"]');
    this.backpackDescription = page.locator(
      'a[id="item_4_title_link"]~[class="inventory_item_desc"]'
    );
    this.backpackAddToCartBtn = page.locator(
      '[id="add-to-cart-sauce-labs-backpack"]'
    );
    this.backpackRemoveFromCartBtn = page.locator(
      '[id="remove-sauce-labs-backpack"]'
    );
  }

  async checkPageUrl() {
    await expect(this.page).toHaveURL(
      "https://www.saucedemo.com/inventory.html"
    );
  }

  async goto() {
    await this.page.goto("");
  }
}
