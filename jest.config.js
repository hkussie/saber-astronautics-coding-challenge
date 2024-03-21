module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    roots: ['<rootDir>/tests'],
    testMatch: ['**/*.test.ts'], // Only run files that end with .test.ts
    transform: {
      '^.+\\.ts$': 'ts-jest',
    },
};