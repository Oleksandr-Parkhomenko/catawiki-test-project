import { test, expect } from "./fixtures/base.fixture";
import {
  search,
  CATEGORIES_BUTTON,
  RESULTS_CONTAINER,
  NO_RESULTS_MESSAGE,
  SEARCH_RESULTS_HEADING,
} from "./pages/search.page";
import {
  getCategoriesHeading,
  getCategoryLink,
  getCategoryPageHeading,
} from "./pages/categories.page";
import {
  applyFirstCategoryFilter,
  getSearchResultsCount,
} from "./pages/filters.page";
import { attemptLogin, expectLoginError } from "./pages/auth.page";

test.describe("Catawiki E2E Tests without Sign in", () => {
  test("Browse categories", async ({ page }) => {
    // Click on a Categories button/dropdown
    const categoriesButton = page.locator(CATEGORIES_BUTTON);
    await categoriesButton.click();

    // Verify the Categories modal is visible
    await expect(getCategoriesHeading(page)).toBeVisible();

    // Open Archaeology & Natural History category
    const categoryCard = getCategoryLink(page, "Archaeology & Natural History");
    await categoryCard.click();

    // Verify the category page is opened
    await expect(
      getCategoryPageHeading(page, "Archaeology & Natural History"),
    ).toBeVisible();
  });

  test("Search with no results and shows proper message", async ({ page }) => {
    // Type the keyword '        ' (8 spaces) and click magnifier button
    await search(page, "        ");

    // Wait for results page to load
    const resultsContainer = page.locator(RESULTS_CONTAINER);
    await expect(resultsContainer).toBeVisible();

    // Verify "No matches for" message appears
    const noResultsMessage = page.locator(NO_RESULTS_MESSAGE);
    await expect(noResultsMessage).toBeVisible();
  });

  test("Filter and sort search results", async ({ page }) => {
    // Type the keyword 'car' and click magnifier button
    await search(page, "car");

    // Verify search results page is loaded
    const searchResultsHeading = page.locator(SEARCH_RESULTS_HEADING);
    await expect(searchResultsHeading).toHaveText("car", { timeout: 5000 });

    // Check quantity of search results before applying filters
    const countBeforeFilters = await getSearchResultsCount(page);

    // Apply first category filter
    await applyFirstCategoryFilter(page);

    // Check quantity of search results after applying filters
    const countAfterFilters = await getSearchResultsCount(page);

    // Assert that the count of search results after applying filters is less than before applying filters
    expect(countBeforeFilters).toBeGreaterThan(countAfterFilters);
  });

  test("Unsuccessful login with invalid credentials", async ({ page }) => {
    // Fill invalid credentials and Submit login form
    await attemptLogin(page, "invalid.user@test.com", "wrongPassword123");

    // Assert error message is shown
    await expectLoginError(page);
  });
});
