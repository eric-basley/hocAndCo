module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.js', 'server/**/*.js', '!app/**/*.test.js'],
  coverageThreshold: {
    global: {
      statements: 70,
      branches: 70,
      functions: 70,
      lines: 70,
    },
  },
  setupTestFrameworkScriptFile: '<rootDir>/test-env.js',
  testRegex: 'tests/.*\\.test\\.js$',
  moduleNameMapper: {
    '.*\\.(css|less|styl|scss|sass)$': '<rootDir>/mocks/cssModule.js',
    '.*\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/image.js',
  },
}
