import { test, expect } from "./fixtures/base.fixture";
import { search, openLotAt, SEARCH_RESULTS_HEADING } from "./pages/search.page";
import {
  expectLotDetailsVisible,
  getLotDetails,
} from "./pages/lotDetails.page";

test.describe("Task Test", () => {
  test("search for train", async ({ page }) => {
    // Type the keyword train and click magnifier button
    await search(page, "train");

    // Verify that the search results page is opened with the correct title
    const searchResultsPageOpened = page.locator(SEARCH_RESULTS_HEADING);
    await expect(searchResultsPageOpened).toHaveText("train");

    // Open the second lot (index 1) from search results
    await openLotAt(page, 1);

    // Verify lot details page is visible and get lot details
    await expectLotDetailsVisible(page);
    const { lotName, count, currentBid } = await getLotDetails(page);

    // Print lot details to console.
    console.log("Lot name:", lotName);
    console.log("Favorites:", count);
    console.log("Current bid:", currentBid);
  });
});
