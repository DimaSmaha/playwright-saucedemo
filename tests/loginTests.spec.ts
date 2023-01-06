import { test, expect } from "@playwright/test";
import { homePage } from "../pages/homePage.page";

test.describe("Login page tests", () => {
  test.beforeEach(async ({ page }) => {
    let home = new homePage(page);
    await home.goto();
    await page.waitForLoadState();
  });

  test("Should sing in to created account", async ({ page }) => {
    let home = new homePage(page);

    expect(await home.loginBtn).toBeVisible();
    await home.fillUsername("standard_user");
    await home.fillPassword("secret_sauce");
    await home.loginBtn.click();
    await page.waitForURL("https://www.saucedemo.com/inventory.html");
  });
});
