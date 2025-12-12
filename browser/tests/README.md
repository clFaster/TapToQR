# TapToQR Browser Extension Tests

This directory contains Playwright tests for the TapToQR browser extension.

## Test Structure

- **example.spec.ts** - Basic smoke tests to verify test environment
- **qr-data-formatters.spec.ts** - Unit tests for QR data formatting functions (WiFi, Contact, Email, etc.)
- **qr-generation.spec.ts** - Integration tests for QR code generation library
- **extension.spec.ts** - End-to-end UI tests for the extension (requires build)
- **fixtures.ts** - Custom Playwright fixtures for extension testing

## Running Tests

### All Tests (Unit + Integration, excluding extension tests)
```bash
pnpm test --grep-invert extension
```

### All Tests Including Extension Tests
```bash
# Build the extension first
pnpm build

# Run all tests
pnpm test --workers=1
```

### Specific Test File
```bash
pnpm exec playwright test qr-data-formatters.spec.ts
```

### With UI Mode (Interactive)
```bash
pnpm exec playwright test --ui
```

### Extension Tests Only
```bash
# Build the extension first
pnpm build

# Run extension tests
pnpm test extension.spec.ts --workers=1
```

**Note:** Extension tests require:
1. The extension to be built first (`pnpm build`)
2. Single worker mode (`--workers=1`) to avoid conflicts with browser contexts
3. A background service worker in the manifest to get the extension ID

## Setup

Install Playwright browsers (one-time setup):
```bash
pnpm exec playwright install
```

## Test Categories

### Unit Tests
Tests that don't require a browser or extension context:
- Data formatters (19 tests)
- Utility functions

### Integration Tests
Tests that use the browser but not the extension:
- QR code generation (7 tests)
- Library integration

### E2E/UI Tests
Tests that require the built extension (17 tests per project):
- Extension popup UI (buttons, QR code display, navigation)
- Extension options page (settings, sliders, checkboxes, save/revert)
- Custom QR page loading
- Extension manifest validation

## CI/CD

Tests run automatically on:
- Pull requests to main/master
- Pushes to main/master

The CI workflow excludes extension tests that require the built extension.

See `.github/workflows/playwright.yml` for CI configuration.

## Writing Tests

### For Unit Tests
Use standard Playwright test syntax:
```typescript
import { test, expect } from '@playwright/test';

test('my test', () => {
  // test code
});
```

### For Extension Tests
Use the custom fixtures that provide the extension context:
```typescript
import { test, expect } from './fixtures';

test('extension test', async ({ page, extensionId }) => {
  await page.goto(`chrome-extension://${extensionId}/pages/popup.html`);
  await page.waitForLoadState('networkidle');
  
  // Test interactions with the extension UI
  await expect(page.locator('#some-element')).toBeVisible();
});
```

## Extension Testing Approach

Based on [Playwright's Chrome Extensions documentation](https://playwright.dev/docs/chrome-extensions), our tests:

1. Launch a persistent browser context with the extension loaded
2. Use a background service worker to get the extension ID
3. Navigate to extension pages using `chrome-extension://<id>/pages/...` URLs
4. Test UI interactions, form submissions, and navigation
5. Verify manifest properties and extension configuration

The extension must have a background service worker defined in the manifest for the tests to work properly.
