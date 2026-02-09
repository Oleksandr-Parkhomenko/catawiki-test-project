import { expect } from "@playwright/test";

// Selectors
export const SEARCH_INPUT = 'input[type="search"]';
export const SEARCH_BUTTON =
  '[data-testid="text-field-prefix"] button[aria-label="Search"]';
export const SEARCH_RESULTS_HEADING = '[data-testid="SearchResults"] h1';
export const CATEGORIES_BUTTON = '[aria-label="Categories"]';
export const RESULTS_CONTAINER = "main";
export const NO_RESULTS_MESSAGE = "text=No matches for";

// Actions
export async function search(page, text) {
  const searchInput = page.locator(SEARCH_INPUT).first();
  const searchBtn = page.locator(SEARCH_BUTTON).first();

  await expect(searchInput).toBeVisible({ timeout: 5000 });
  await searchInput.fill(text);
  await expect(searchBtn).toBeVisible({ timeout: 5000 });
  await searchBtn.click();
}

export async function openLotAt(page, index) {
  const lotSelector = `[data-sentry-component="LotList"] > div:nth-child(${index + 1})`;
  await page.locator(lotSelector).click();
}

export default {
  SEARCH_INPUT,
  SEARCH_BUTTON,
  SEARCH_RESULTS_HEADING,
  CATEGORIES_BUTTON,
  RESULTS_CONTAINER,
  NO_RESULTS_MESSAGE,
  search,
  openLotAt,
};
