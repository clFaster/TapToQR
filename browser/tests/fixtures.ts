import { test as base, chromium, type BrowserContext } from "@playwright/test";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const test = base.extend<{
  context: BrowserContext;
  extensionId: string;
}>({
  // eslint-disable-next-line no-empty-pattern
  context: async ({}, use) => {
    const pathToExtension = path.join(__dirname, "../build");

    const context = await chromium.launchPersistentContext("", {
      channel: "chromium",
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`,
      ],
    });

    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(context);

    await context.close();
  },

  extensionId: async ({ context }, use) => {
    // Create a new page and navigate to the extensions page
    const page = await context.newPage();
    
    // Enable developer mode and take a screenshot to debug
    await page.goto("chrome://extensions/");
    await page.waitForTimeout(2000); // Wait for extensions to fully load
    
    // Try to extract extension ID using JavaScript
    let extensionId: string | null = null;
    
    try {
      extensionId = await page.evaluate(() => {
        // Try to find the extensions-manager element
        const manager = document.querySelector("extensions-manager");
        if (!manager) return null;
        
        // Access the shadow root
        const shadowRoot = manager.shadowRoot;
        if (!shadowRoot) return null;
        
        // Find the extensions-item-list
        const itemList = shadowRoot.querySelector("extensions-item-list");
        if (!itemList || !itemList.shadowRoot) return null;
        
        // Find all extension items
        const items = itemList.shadowRoot.querySelectorAll("extensions-item");
        if (!items || items.length === 0) return null;
        
        // Get the first extension's ID
        const firstItem = items[0];
        if (!firstItem) return null;
        
        return firstItem.getAttribute("id");
      });
    } catch (error) {
      console.error("Failed to extract extension ID from chrome://extensions:", error);
    }

    if (!extensionId) {
      throw new Error("Could not find extension ID");
    }
    
    await page.close();

    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(extensionId);
  },
});

export const expect = test.expect;
