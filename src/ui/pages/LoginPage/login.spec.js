import { test, expect } from "@playwright/test";
import { LoginPage } from "./login";

test("LoginTest", async ({ page }) => {
  const Login = new LoginPage(page);

  await Login.gotoLoginPage();
  await Login.page.pause();

  await Login.selectOption("Cancer");

  /* if (await page.$("text = The kitchen")) {
    // returns null if not found like true or false
    await page.locator("text = The kitchen").click();
  } */

  await Login.page.pause();

  await Login.login("tomsmith", "SuperSecretPassword!");
});
