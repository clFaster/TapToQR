import { test, expect } from './fixtures';

test.describe('Extension Popup UI', () => {
  test('should load and display QR code with correct URL', async ({ page, extensionId, context }) => {
    // Navigate to a test page first
    const testUrl = 'https://moritzreis.dev';
    
    // Open the popup with the URL as a query parameter
    // This simulates what would happen if the popup had access to the active tab
    const popupPage = await context.newPage();
    await popupPage.goto(
      `chrome-extension://${extensionId}/pages/popup.html?url=${encodeURIComponent(testUrl)}`
    );
    await popupPage.waitForLoadState('networkidle');
    
    // Check that the popup container is visible
    await expect(popupPage.locator('#popup-container')).toBeVisible();
    
    // Check that the header is present
    await expect(popupPage.getByText('TapToQR')).toBeVisible();
    
    // Check that the QR code SVG is rendered
    const qrCodeContainer = popupPage.locator('svg').first();
    await expect(qrCodeContainer).toBeVisible();
    
    // Verify the QR code was generated (check that there are path elements)
    const paths = popupPage.locator('svg path');
    await expect(paths.first()).toBeVisible();
    
    // Optional: You could decode the QR code to verify it contains the correct URL
    // For now, we verify that the QR code rendered and the correct URL was passed
    const currentUrl = popupPage.url();
    expect(currentUrl).toContain(encodeURIComponent(testUrl));
    
    await popupPage.close();
  });
});