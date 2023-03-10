import { Breakpoints, CreateMediaQueriesOptions, MediaType } from "../types";

const BREAKPOINTS: Breakpoints = {
  xs: "30rem",
  sm: "48rem",
  md: "62rem",
  lg: "80rem",
  xl: "96rem",
};

const MOBILE_FIRST = true;

const MEDIA_TYPE: MediaType = "all";

export const DEFAULT_OPTIONS: CreateMediaQueriesOptions = {
  breakpoints: BREAKPOINTS,
  mobileFirst: MOBILE_FIRST,
  mediaType: MEDIA_TYPE,
};
