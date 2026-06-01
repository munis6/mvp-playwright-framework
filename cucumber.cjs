module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      './src/support/world.ts',
      './src/support/hooks.ts',
      './src/steps/**/*.ts'   // glob: loads all step definitions
    ],
    format: [
      'progress',
      'json:reports/cucumber-report.json',
      'allure-cucumberjs/reporter'   // keep this entry point
    ],
    paths: ['src/features/**/*.feature'],
    publishQuiet: true
  }
};
