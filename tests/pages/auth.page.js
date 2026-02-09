import { expect } from "@playwright/test";

// Selectors
export const EMAIL_FIELD = "#field_r_l_";
export const PASSWORD_FIELD = "#field_r_m_";
export const SIGN_IN_SUBMIT_BUTTON = "button.js-register-signin-submit-button";
export const ERROR_MESSAGE =
  "text=Something went wrong, please try again later.";

// Actions
export function getSignInButton(page) {
  return page
    .locator(".c-header__links__user-not-logged-in")
    .getByRole("button", { name: "Sign in" });
}

export async function attemptLogin(page, email, password) {
  await getSignInButton(page).click();
  await page.locator(EMAIL_FIELD).fill(email);
  await page.locator(PASSWORD_FIELD).fill(password);
  await page.locator(SIGN_IN_SUBMIT_BUTTON).click();
}

export async function expectLoginError(page) {
  await expect(page.locator(ERROR_MESSAGE)).toBeVisible();
}

export default {
  EMAIL_FIELD,
  PASSWORD_FIELD,
  SIGN_IN_SUBMIT_BUTTON,
  ERROR_MESSAGE,
  getSignInButton,
  attemptLogin,
  expectLoginError,
};
