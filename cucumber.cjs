// Single Responsibility: This file is contacted by cucumber-js (the CLI engine).
// Based on predefined configuration, cucumber.cjs tells cucumber-js how to run:
// - Load TypeScript support
// - Where to find step definitions
// - Where to find support files (world.ts + hooks.ts)
// - Where to find feature files
// - Which reporters to use
// - Whether to publish results

module.exports = {
  default: {
    // Load TypeScript support via ts-node/register
    requireModule: ['ts-node/register'],

    // Where to find step definitions and support files
    require: [
      './src/support/world.ts',   // world.ts loaded
      './src/support/hooks.ts',   // hooks.ts loaded
      './src/steps/**/*.ts'       // glob: loads all step definitions
    ],

    // Reporters: console logs, JSON report, Allure reporter
    format: [
      'progress',                                 // console logs
      'json:reports/cucumber-report.json',        // JSON report
      'allure-cucumberjs/reporter'                // ✅ correct Allure reporter entry point
    ],

    // Where to find feature files
    paths: ['src/features/**/*.feature'],

    // Suppress publishing results to Cucumber Reports service
    publishQuiet: true
  }
};

// After cucumber-js learns from cucumber.cjs, it wires up TypeScript, loads support + steps, finds features,
// configures reporters, suppresses publishing, and then executes your scenarios with Playwright.
// It then runs scenarios by matching Gherkin steps to your step definitions, which drive
// Playwright actions in the browser.
