import { ComplexStyleRule, StyleRule } from "@vanilla-extract/css";

export type MediaQueryStyleRule = Record<string, StyleRule>;

export type ResponsiveStyleRule = {
  base: ComplexStyleRule;
} & MediaQueryStyleRule;

export type Breakpoints = Record<string, string>;

export type CreateSyrupParams = Partial<{
  breakpoints: Breakpoints;
  mobileFirst: boolean;
  mediaType: "all" | "screen" | "print";
}>;
