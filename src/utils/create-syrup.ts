import {
  ComplexStyleRule,
  style as vanillaExtractStyle,
} from "@vanilla-extract/css";
import { DEFAULT_OPTIONS } from "../defaults";
import {
  CreateSyrupOptions,
  MediaQueries,
  MediaQueryStyleRule,
  ResponsiveStyleRule,
} from "../types";

export const createSyrup = (options?: Partial<CreateSyrupOptions>) => {
  const breakpoints = options?.breakpoints ?? DEFAULT_OPTIONS.breakpoints;
  const mediaType = options?.mediaType ?? DEFAULT_OPTIONS.mediaType;
  const mobileFirst = options?.mobileFirst ?? DEFAULT_OPTIONS.mobileFirst;
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
