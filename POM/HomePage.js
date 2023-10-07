const { test, expect } = require("@playwright/test");

class Home {
  constructor(page) {
    this.page = page;

    this.buttonHome = page.getByText("Home");

    this.buttonProducts = page.getByRole("link", { name: " Products" });
    this.buttonSignupLogin = page.getByRole("link", {
      name: " Signup / Login",
    });
    this.buttonTestCases = page.getByRole("link", { name: " Test Cases" });
    this.buttonApiTesting = page.getByRole("link", { name: " API Testing" });
    this.buttonContactUs = page.getByRole("link", { name: " Contact us" });
  }

  async goTo(urlBase) {
    await this.page.goto(urlBase);
  }
  async navigateToHome() {
    await this.buttonHome.click();
  }

  async navigateToProducts() {
    await this.buttonProducts.click();
  }

  async navigateToSignUpLogin() {
    await this.buttonSignupLogin.click();
  }
  async navigateTotestCases() {
    await this.buttonTestCases.click();
  }
  async navigateToApiTesting() {
    await this.buttonApiTesting.click();
  }

  async navigateToContactUs() {
    await this.buttonContactUs.click();
  }
}

module.exports = { Home };
