import { inventoryPage } from "./../pages/inventoryPage.page";
import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage.page";

test.describe("Inventory page tests", () => {
  const username = "standard_user";
  const password = "secret_sauce";

  test.beforeEach(async ({ page }) => {
    let home = new homePage(page);
    await home.goto();
    await page.waitForLoadState();
    await home.doLogin(username, password);
  });

  test("Check backpack name", async ({ page }) => {
    let inventory = new inventoryPage(page);

    await inventory.checkPageUrl();
    expect(await inventory.backpackTitle).toBeVisible();
    expect(await inventory.backpackTitle).toContainText("Sauce Labs Backpack");
    expect(await inventory.backpackDescription).toContainText(
      "carry.allTheThings()"
    );
  });

  test("User adds backpack to the cart", async ({ page }) => {
    let inventory = new inventoryPage(page);

    await inventory.checkPageUrl();
    expect(await inventory.backpackTitle).toBeVisible();
    await inventory.backpackAddToCartBtn.click();
    expect(await inventory.backpackRemoveFromCartBtn).toBeVisible();
    expect(await inventory.cartCounter).toContainText("1");
  });
});
