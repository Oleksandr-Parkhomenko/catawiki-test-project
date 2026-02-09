import { test as base } from "@playwright/test";

export const test = base.extend({
  page: async ({ page, context }, use) => {
    // Navigate to the homepage
    await page.goto("/", { timeout: 5000, waitUntil: "domcontentloaded" });

    // Accept cookies if the banner appears
    const acceptButton = page.locator('button[id="cookie_bar_agree_button"]');
    if (await acceptButton.isVisible({ timeout: 5000 })) {
      await acceptButton.click();
    }

    // Use the page in tests
    await use(page);

    // Cleanup after each test
    await page.close().catch(() => {});
    await context.close().catch(() => {});
  },
});

export { expect } from "@playwright/test";
