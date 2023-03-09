import { createSyrup } from "../utils";

describe("Should return mediaQueries", () => {
  it("Undefined Options", () => {
    const { mediaQueries } = createSyrup();
    expect(mediaQueries).toBeDefined();
    expect(mediaQueries).toStrictEqual({
      xs: "all and (min-width: 30rem)",
      sm: "all and (min-width: 48rem)",
      md: "all and (min-width: 62rem)",
      lg: "all and (min-width: 80rem)",
      xl: "all and (min-width: 96rem)",
    });
  });

  it("Mobile First", () => {
    const { mediaQueries } = createSyrup({
      mobileFirst: true,
    });
    for (const mediaQuery in mediaQueries) {
      expect(mediaQueries[mediaQuery]).not.toContain("max-width");
      expect(mediaQueries[mediaQuery]).toContain("min-width");
    }
  });

  it("Not Mobile First", () => {
    const { mediaQueries } = createSyrup({
      mobileFirst: false,
    });
    for (const mediaQuery in mediaQueries) {
      expect(mediaQueries[mediaQuery]).not.toContain("min-width");
      expect(mediaQueries[mediaQuery]).toContain("max-width");
    }
  });

  it("All Media Type", () => {
    const { mediaQueries } = createSyrup({
      mediaType: "all",
    });
    for (const mediaQuery in mediaQueries) {
      expect(mediaQueries[mediaQuery]).not.toContain("screen");
      expect(mediaQueries[mediaQuery]).not.toContain("print");
      expect(mediaQueries[mediaQuery]).toContain("all");
    }
  });

  it("Screen Media Type", () => {
    const { mediaQueries } = createSyrup({
      mediaType: "screen",
    });
    for (const mediaQuery in mediaQueries) {
      expect(mediaQueries[mediaQuery]).not.toContain("all");
      expect(mediaQueries[mediaQuery]).not.toContain("print");
      expect(mediaQueries[mediaQuery]).toContain("screen");
    }
  });

  it("Print Media Type", () => {
    const { mediaQueries } = createSyrup({
      mediaType: "print",
    });
    for (const mediaQuery in mediaQueries) {
      expect(mediaQueries[mediaQuery]).not.toContain("all");
      expect(mediaQueries[mediaQuery]).not.toContain("screen");
      expect(mediaQueries[mediaQuery]).toContain("print");
    }
  });
});
