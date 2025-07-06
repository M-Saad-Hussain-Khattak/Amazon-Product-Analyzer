const { chromium } = require("playwright");
const fs = require("fs").promises;
const path = require("path");

// Path for storing cookies
const COOKIES_FILE = path.join(__dirname, "amazon-cookies.json");

/**
 * Gets an authenticated Playwright browser instance
 * @param {Object} options - Browser options like headless mode
 * @returns {Promise<Object>} Object with browser, page and other utilities
 */
async function get_driver(options = {}) {
  // Default options - change default to headless: true
  const browserOptions = {
    headless: false,
    ...options,
  };

  // Launch browser
  const browser = await chromium.launch(browserOptions);
  const context = await browser.newContext();

  try {
    // Check if cookies file exists and load if it does
    try {
      const cookiesString = await fs.readFile(COOKIES_FILE, "utf8");
      const cookies = JSON.parse(cookiesString);
      await context.addCookies(cookies);
      console.log(`Loaded ${cookies.length} cookies from file`);
    } catch (error) {
      console.log("No saved cookies found or error loading cookies");
      // Continue without cookies - will require manual login
    }

    // Create page
    const page = await context.newPage();

    // Add helper method to save cookies
    const save_cookies = async () => {
      const cookies = await context.cookies();
      await fs.writeFile(COOKIES_FILE, JSON.stringify(cookies, null, 2));
      console.log(`Saved ${cookies.length} cookies to file`);
      return cookies.length;
    };

    // Add helper method to check login status
    const is_logged_in = async () => {
      return page.evaluate(() => {
        return (
          document.body.textContent.includes("Hello,") ||
          document
            .querySelector("#nav-link-accountList-nav-line-1")
            ?.textContent.includes("Hello,")
        );
      });
    };

    return {
      browser,
      context,
      page,
      save_cookies,
      is_logged_in,
    };
  } catch (error) {
    await browser.close();
    throw error;
  }
}

module.exports = {
  get_driver,
};
