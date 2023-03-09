/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
  },
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
  testEnvironment: "jsdom",
};
