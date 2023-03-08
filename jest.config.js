/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  transform: {
    "\\.css\\.ts$": "@vanilla-extract/jest-transform",
  },
};
