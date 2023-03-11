/* istanbul ignore file */

import { ResponsiveStyleRule } from "../../src/types";

export const responsiveStyleRule: ResponsiveStyleRule = {
  base: {
    backgroundColor: "red",
  },
  "@xs": {
    backgroundColor: "orange",
  },
  "@sm": {
    backgroundColor: "yellow",
  },
  "@md": {
    backgroundColor: "green",
  },
  "@lg": {
    backgroundColor: "blue",
  },
  "@xl": {
    backgroundColor: "violet",
  },
};
