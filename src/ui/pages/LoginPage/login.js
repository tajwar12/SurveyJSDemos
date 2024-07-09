import { test, expect } from "@playwright/test";

exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.getByLabel("Email address");
    this.password_textbox = page.getByLabel("Password");
    this.menuoptions = page.getByRole("button", { name: "Symptoms" });
    this.login_button = page.getByRole("button", { name: "Sign in" });
  }

  async gotoLoginPage() {
    await this.page.goto("http://localhost:3000/");
    this.page.pause();
    await this.page.getByRole("button", { name: "Playwright" }).click();
    this.page.pause();
    /* await page.getByLabel("Email address").click();
     await page.getByLabel("Email address").fill("Tajwar");
     await page.getByLabel("Password").click();
     await page.getByLabel("Password").fill("Vickey");
     await page.getByRole("button", { name: "Sign in" }).click(); */
    await this.page.getByRole("button", { name: "Symptoms" }).click();
  }

  async selectOption(option) {
    await this.page.getByLabel("Email address").fill(option);

    if (await this.page.$("text = Heart")) {
      await test.fail("This is a failed test");
      // await test.skip();
    }
  }

  async login(username, password) {
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
};
