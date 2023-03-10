import { style as vanillaExtractStyle } from "@vanilla-extract/css";
import { DEFAULT_OPTIONS } from "../defaults";
import {
  CreateSyrupOptions,
  MediaQueries,
  ResponsiveStyleRule,
} from "../types";
import { createComplexStyleRule } from "./create-complex-style-rule";
import { createMediaQueries } from "./create-media-queries";

export const createSyrup = (options?: CreateSyrupOptions) => {
  const { breakpoints, mediaType, mobileFirst } = {
    ...DEFAULT_OPTIONS,
    ...options,
  };

  const mediaQueries: MediaQueries = createMediaQueries({
    breakpoints: breakpoints,
    mediaType: mediaType,
    mobileFirst: mobileFirst,
  });

  const style = (rule: ResponsiveStyleRule) => {
    const complexStyleRule = createComplexStyleRule(rule, mediaQueries);
    return vanillaExtractStyle(complexStyleRule);
  };

  return { style, mediaQueries };
};
