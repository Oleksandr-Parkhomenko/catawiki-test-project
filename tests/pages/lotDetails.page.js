import { expect } from "@playwright/test";

// Selectors
export const LOT_DETAILS_PAGE =
  '[data-sentry-component="OpenObjectDetailsPage"]';
export const LOT_TITLE = '[data-sentry-component="DesktopLotTitle"] h1';
export const FAVORITE_BUTTON = '[title="favourite"]';
export const AMOUNT = '[data-sentry-component="Amount"]';

// Actions
export async function expectLotDetailsVisible(page, timeout = 5000) {
  await expect(page.locator(LOT_DETAILS_PAGE)).toBeVisible({ timeout });
}

export async function getLotDetails(page) {
  const lotName = await page.locator(LOT_TITLE).textContent();

  const favButton = page.locator('[data-sentry-component="OpenObjectDetailsPage"] [title="favourite"]').first();
  const count = await favButton.getAttribute("count");

  const amountTxt = await page.locator(AMOUNT).first().innerText();
  const currentBid = Number(amountTxt.replace(/[^\d]/g, ""));

  return { lotName, count, currentBid };
}

export default {
  LOT_DETAILS_PAGE,
  LOT_TITLE,
  FAVORITE_BUTTON,
  AMOUNT,
  expectLotDetailsVisible,
  getLotDetails,
};
