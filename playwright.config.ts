import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  retries: 2,
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure'
  }
});
