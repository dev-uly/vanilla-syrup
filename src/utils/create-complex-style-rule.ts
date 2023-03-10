import { ComplexStyleRule, StyleRule } from "@vanilla-extract/css";
import { MediaQueries, MediaQuery, ResponsiveStyleRule } from "../types";

export const createComplexStyleRule = (
  rule: ResponsiveStyleRule,
  mediaQueries: MediaQueries
) => {
  const { base, ...breakpoints } = rule;
  const media: Record<MediaQuery, StyleRule> = {};

  for (const breakpoint in breakpoints) {
    const key = mediaQueries[breakpoint.substring(1)];
    const value = breakpoints[`@${breakpoint.substring(1)}`];
    if (key && value) {
      media[key] = value;
    }
  }

  const isStyleRule = !Array.isArray(base);
  const complexStyleRule: ComplexStyleRule = isStyleRule
    ? {
        ...base,
        "@media": { ...base["@media"], ...media },
      }
    : [...base, { "@media": media }];

  return complexStyleRule;
};
