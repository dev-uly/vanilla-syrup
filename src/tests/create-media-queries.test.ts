import { DEFAULT_OPTIONS } from "../defaults";
import { createMediaQueries } from "../utils";

describe("Should return mediaQueries", () => {
  const mediaQueries = createMediaQueries(DEFAULT_OPTIONS);
  it("Default Options", () => {
    expect(mediaQueries).toStrictEqual({
      xs: "all and (min-width: 30rem)",
      sm: "all and (min-width: 48rem)",
      md: "all and (min-width: 62rem)",
      lg: "all and (min-width: 80rem)",
      xl: "all and (min-width: 96rem)",
    });
  });
});
