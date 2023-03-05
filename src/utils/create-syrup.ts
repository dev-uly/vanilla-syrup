import {
  ComplexStyleRule,
  style as vanillaExtractStyle,
} from "@vanilla-extract/css";
import { DEFAULT_BREAKPOINTS } from "../constants";
import { CreateSyrupParams, Breakpoints, ResponsiveStyleRule } from "../types";

export const createSyrup = ({
  breakpoints = DEFAULT_BREAKPOINTS,
  mobileFirst = true,
  mediaType = "all",
}: CreateSyrupParams) => {
  const screens: Breakpoints = Object.create(breakpoints);
  for (const breakpoint in breakpoints) {
    screens[breakpoint] = `${mediaType} and (${
      mobileFirst ? "min-width" : "max-width"
    }: ${breakpoints[breakpoint]})`;
  }

  const style = (rule: ResponsiveStyleRule) => {
    const media: any = {};
    for (const screen in rule) {
      if (screen !== "base" && screens[screen]) {
        media[screens[screen]] = rule[screen];
      }
    }
    const result: ComplexStyleRule = {
      ...rule["base"],
      "@media": media,
    };
    return vanillaExtractStyle(result);
  };

  return { style, screens };
};
