/** @type {import('jest').Config} */

const config = {
  collectCoverage: false,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  errorOnDeprecated: true,
};

module.exports = config;
