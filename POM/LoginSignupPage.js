class LoginSignupPage {
  constructor(page) {
    this.page = page;

    this.fieldLoginEmail = page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address");
    this.fieldLoginPassword = page.getByPlaceholder("Password");
    this.buttonLogin = page.getByRole("button", { name: "Login" });
    this.fieldSignupName = page.getByPlaceholder("Name");
    this.fieldSignupEmail = page
      .locator("form")
      .filter({ hasText: "Signup" })
      .getByPlaceholder("Email Address");
    this.buttonSignUp = page.getByRole("button", { name: "Signup" });
  }

  async login(Email, Password) {
    await this.fieldLoginEmail.fill(Email);
    await this.fieldLoginPassword.fill(Password);
    await this.buttonLogin.click();
  }

  async signup(SignuName, SignupEmail) {
    await this.fieldSignupName.fill(SignuName);
    await this.fieldSignupEmail.fill(SignupEmail);
    await this.buttonSignUp.click();
  }
}
module.exports = {LoginSignupPage};
