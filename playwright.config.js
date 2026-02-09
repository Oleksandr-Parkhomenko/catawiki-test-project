module.exports = {
  testDir: "./tests",
  timeout: 30 * 1000,
  retries: 1,
  reporter: [["html"], ["allure-playwright"]],
  use: {
    browserName: "chromium",
    channel: "chrome",
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) " +
      "AppleWebKit/537.36 (KHTML, like Gecko) " +
      "Chrome/120.0.0.0 Safari/537.36",
    headless: true,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "on-first-retry",
    baseURL: "https://www.catawiki.com/en",
  },
};
