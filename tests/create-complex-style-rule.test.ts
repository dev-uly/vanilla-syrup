import { ComplexStyleRule } from "@vanilla-extract/css";
import { ResponsiveStyleRule } from "../src/types";
import { createSyrup, createComplexStyleRule } from "../src/utils";

describe("Should return ComplexStyleRule", () => {
  const { mediaQueries } = createSyrup();

  it("Base Rule is a StyleRule", () => {
    const rule: ResponsiveStyleRule = {
      base: {
        backgroundColor: "red",
      },
      "@md": {
        backgroundColor: "green",
      },
    };
    const result = createComplexStyleRule(rule, mediaQueries);
    const expected: ComplexStyleRule = {
      backgroundColor: "red",
      "@media": {
        "all and (min-width: 62rem)": {
          backgroundColor: "green",
        },
      },
    };
    expect(result).toStrictEqual(expected);
  });

  it("Base Rule is an Array", () => {
    const rule: ResponsiveStyleRule = {
      base: [{ backgroundColor: "red" }, { fontWeight: "bold" }],
      "@md": {
        backgroundColor: "green",
      },
    };
    const result = createComplexStyleRule(rule, mediaQueries);
    const expected: ComplexStyleRule = [
      { backgroundColor: "red" },
      { fontWeight: "bold" },
      {
        "@media": {
          "all and (min-width: 62rem)": {
            backgroundColor: "green",
          },
        },
      },
    ];
    expect(result).toStrictEqual(expected);
  });
});
