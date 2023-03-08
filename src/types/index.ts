import { ComplexStyleRule, StyleRule } from "@vanilla-extract/css";

export type MediaQueryStyleRule = Record<string, StyleRule>;

export type ResponsiveStyleRule = {
  base: ComplexStyleRule;
} & MediaQueryStyleRule;

export type Breakpoint = `${number}${string}`;

export type Breakpoints = Record<string, Breakpoint>;

export type MediaQuery = `${MediaType} and (${
  | "min-width"
  | "max-width"}: ${string})`;

export type MediaQueries = Record<string, MediaQuery>;

export type MediaType = "all" | "screen" | "print";

export type CreateSyrupOptions = {
  breakpoints: Breakpoints;
  mobileFirst: boolean;
  mediaType: MediaType;
};

export type CreateSyrupParams = Partial<CreateSyrupOptions>;
