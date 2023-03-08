import {
  ComplexStyleRule,
  style as vanillaExtractStyle,
} from "@vanilla-extract/css";
import Default from "../defaults";
import {
  CreateSyrupParams,
  MediaQueries,
  MediaQueryStyleRule,
  ResponsiveStyleRule,
} from "../types";

export const createSyrup = ({
  breakpoints = Default.BREAKPOINTS,
  mobileFirst = Default.MOBILE_FIRST,
  mediaType = Default.MEDIA_TYPE,
}: CreateSyrupParams) => {
  const mediaQueries: MediaQueries = {};
  for (const breakpoint in breakpoints) {
    mediaQueries[breakpoint] = `${mediaType} and (${
      mobileFirst ? "min-width" : "max-width"
    }: ${breakpoints[breakpoint]})`;
  }

  const style = (rule: ResponsiveStyleRule) => {
    const media: MediaQueryStyleRule = {};
    for (const breakpoint in rule) {
      if (breakpoint !== "base" && mediaQueries[breakpoint]) {
        media[mediaQueries[breakpoint]] = rule[breakpoint];
      }
    }
    const base = rule.base;
    const isStyleRule = !Array.isArray(base);
    const vanillaExtractStyleRule: ComplexStyleRule = isStyleRule
      ? {
          ...base,
          "@media": { ...base["@media"], ...media },
        }
      : [...base, { "@media": media }];
    return vanillaExtractStyle(vanillaExtractStyleRule);
  };

  return { style, mediaQueries };
};
