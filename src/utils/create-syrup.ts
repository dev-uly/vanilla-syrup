import {
  ComplexStyleRule,
  style as vanillaExtractStyle,
} from "@vanilla-extract/css";
import { DEFAULT_BREAKPOINTS } from "../constants";
import {
  Breakpoints,
  CreateSyrupParams,
  MediaQueryStyleRule,
  ResponsiveStyleRule,
} from "../types";

export const createSyrup = ({
  breakpoints = DEFAULT_BREAKPOINTS,
  mobileFirst = true,
  mediaType = "all",
}: CreateSyrupParams) => {
  const mediaQueries: Breakpoints = {};
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
    const vanillaExtractStyleRule: ComplexStyleRule = {
      ...rule["base"],
      "@media": media,
    };
    return vanillaExtractStyle(vanillaExtractStyleRule);
  };

  return { style, mediaQueries };
};
