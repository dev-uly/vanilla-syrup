import { Breakpoints, MediaType } from "../types";

namespace Default {
  export const BREAKPOINTS: Breakpoints = {
    xs: "30rem",
    sm: "48rem",
    md: "62rem",
    lg: "80rem",
    xl: "96rem",
  };

  export const MOBILE_FIRST: boolean = true;

  export const MEDIA_TYPE: MediaType = "all";
}

export default Default;
