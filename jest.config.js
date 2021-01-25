module.exports = {
    displayName: 'fitfab design system',
    verbose: true,
    cacheDirectory: '.jest-cache',
    coverageDirectory: '.jest-coverage',
    coveragePathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/'],
    coverageReporters: ['html', 'text'],
    coverageThreshold: {
      global: {
        branches: 50,
        functions: 70,
        lines: 70,
        statements: 70
      }
    },
    testPathIgnorePatterns: ['<rootDir>/packages/(?:.+?)/lib/']
  };