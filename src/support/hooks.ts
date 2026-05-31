// src/support/hooks.ts
import { Before, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext({ viewport: { width: 1920, height: 1080 } });
  this.page = await this.context.newPage();
});

After(async function () {
  try {
    if (this.page) {
      const screenshot = await this.page.screenshot({ fullPage: true });
      await this.attach(screenshot, 'image/png');   // ✅ now works
    }
  } finally {
    if (this.page) await this.page.close();
    if (this.context) await this.context.close();
    if (this.browser) await this.browser.close();
  }
});
