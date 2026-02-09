import { expect } from "@playwright/test";

// Selectors
export const OBJECT_AMOUNT = '[data-testid="object-amount"]';
export const CATEGORY_FILTER_BUTTON =
  '[data-testid="sticky-filters"] button:has-text("Category")';
export const FIRST_FILTER_ITEM =
  '[data-sentry-component="FilterItemsSection"] >> nth=0 >> ul > li >> nth=0';
export const SHOW_RESULTS_BUTTON =
  '[data-sentry-component="FilterSectionFooter"] button';

// Actions
export async function applyFirstCategoryFilter(page) {
  await page.locator(CATEGORY_FILTER_BUTTON).click();
  await page.locator(FIRST_FILTER_ITEM).click();
  const showButton = page.locator(SHOW_RESULTS_BUTTON);
  await expect(showButton).toBeVisible();
  await showButton.click();
}

export async function getSearchResultsCount(page) {
  await page.waitForLoadState("networkidle");
  const objectAmount = page.locator(OBJECT_AMOUNT);
  await expect(objectAmount).toBeVisible({ timeout: 5000 });
  const text = await objectAmount.textContent();
  return Number(text.replace(/\D/g, ""));
}

export default {
  OBJECT_AMOUNT,
  CATEGORY_FILTER_BUTTON,
  FIRST_FILTER_ITEM,
  SHOW_RESULTS_BUTTON,
  applyFirstCategoryFilter,
  getSearchResultsCount,
};
