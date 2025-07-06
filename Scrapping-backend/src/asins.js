/**
 * Retrieves competitor ASINs for a given keyword, excluding a specific ASIN
 * @param {Object} page - Playwright page object
 * @param {string} keyword - Search keyword
 * @param {string} excludeAsin - ASIN to exclude from results
 * @returns {Promise<string[]>} Array of competitor ASINs
 */
const { getSearchUrl } = require('./utils');

async function getCompetitorAsins(page, keyword, excludeAsin) {
    // Construct the search URL with sorting by popularity rank
    const searchUrl = getSearchUrl(keyword) + '&s=exact-aware-popularity-rank';

    // Navigate to the search page
    await page.goto(searchUrl);

    // Wait for search results to load
    await page.waitForSelector('[data-asin]');

    // Extract ASINs from the search results
    const asins = await page.$$eval('[data-asin]', (elements, excludeAsin) => {
        return elements
            .map(el => el.getAttribute('data-asin'))
            .filter(asin => asin && asin.length > 0 && asin !== excludeAsin)
            .slice(0, 6); // Get 6 in case one matches the excluded ASIN
    }, excludeAsin);

    // Return the first 5 unique ASINs that aren't the excluded one
    return [...new Set(asins)].slice(0, 5);
}

/**
 * Extracts product description and details from an Amazon product page
 * @param {Object} page - Playwright page object
 * @param {string} asin - Amazon Standard Identification Number
 * @returns {Promise<Object>} Product description data
 */
async function getDescription(page, asin) {
    // Navigate to the product page
    await page.goto(`https://www.amazon.com/dp/${asin}`);

    // Wait for the product page to load
    await page.waitForSelector('#title, #productTitle', { timeout: 10000 });

    try {
        // Extract the product title
        const title = await page.$eval('#title, #productTitle', el => el.textContent.trim());

        // Extract bullet points from "About this item" section
        const bulletPoints = await page.$$eval('#feature-bullets .a-list-item', items =>
            items.map(item => item.textContent.trim())
        ).catch(() => []);

        // Extract product specifications
        const specs = {};
        const specRows = await page.$$('table.a-normal tr.a-spacing-small').catch(() => []);

        for (const row of specRows) {
            const [key, value] = await row.$$eval('td span.a-text-bold, td span.a-size-base:not(.a-text-bold)',
                elements => [elements[0].textContent.trim(), elements[1].textContent.trim()]);
            specs[key] = value;
        }

        // Extract ratings
        const rating = await page.$eval('#acrPopover .a-size-small', el =>
            el.textContent.trim()
        ).catch(() => 'N/A');

        const reviewCount = await page.$eval('#acrCustomerReviewText', el => {
            const text = el.textContent.trim();
            return text.replace(/[()]/g, '');
        }).catch(() => '0');

        // Fix: Get the actual high-resolution image URL from the data-old-hires attribute
        const imageUrl = await page.$eval('#landingImage', img => {
            // First try data-old-hires which contains the high-res image
            if (img.getAttribute('data-old-hires')) {
                return img.getAttribute('data-old-hires');
            }

            // If not found, try extracting from data-a-dynamic-image (contains JSON of image URLs)
            const dynamicImages = img.getAttribute('data-a-dynamic-image');
            if (dynamicImages) {
                try {
                    const imageJson = JSON.parse(dynamicImages);
                    // Get the first URL key from the object, which is typically the highest resolution
                    return Object.keys(imageJson)[0];
                } catch (e) {}
            }

            // Last resort, use src (though this might be a placeholder image)
            return img.src;
        }).catch(() => null);

        console.log(`Image URL for ASIN ${asin}: ${imageUrl}`);

        return {
            title,
            asin,
            rating,
            reviewCount,
            bulletPoints,
            specifications: specs,
            imageUrl
        };
    } catch (error) {
        console.error(`Error getting description for ASIN ${asin}:`, error);
        return {
            error: `Failed to extract product details: ${error.message}`,
            asin
        };
    }
}

module.exports = {
    getCompetitorAsins,
    getDescription
};