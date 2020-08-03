module.exports = {
  // rootDir: "tests",
  // testMatch: ["**/__tests__/**/*.test.(ts|tsx|js|jsx)"],
  // preset: "@babel/preset-env",
  testEnvironment: 'node',
  // setupFilesAfterEnv: ['<rootDir>/src/tests/setUp-teardown.ts'],
  // setupFiles: ["<rootDir>/src/tests/setup-dotenv.ts"],
  testTimeout: 50000,
  verbose: false,
  clearMocks: true,
  resetModules: true,
  coveragePathIgnorePatterns: [
    '/node_modules/',
    '/__fixtures__/',
    '/__tests__/',
    '/(__)?mock(s__)?/',
    '/__jest__/',
    '.?.min.js',
  ],
  moduleDirectories: ['node_modules', 'src'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
      diagnostics: true,
    },
  },
};
