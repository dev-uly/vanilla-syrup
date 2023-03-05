import { ComplexStyleRule } from "@vanilla-extract/css";

export type ResponsiveStyle = Partial<{ [key: string]: ComplexStyleRule }>;

export type ResponsiveStyleRule = {
  base: ComplexStyleRule;
} & ResponsiveStyle;

export type Breakpoints = { [key: string]: string };

export type CreateSyrupParams = Partial<{
  breakpoints: Breakpoints;
  mobileFirst: boolean;
  mediaType: "all" | "screen" | "print";
}>;
