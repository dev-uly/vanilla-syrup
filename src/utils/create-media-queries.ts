import { CreateMediaQueriesOptions, MediaQueries } from "../types";

export const createMediaQueries = (options: CreateMediaQueriesOptions) => {
  const { breakpoints, mediaType, mobileFirst } = options;
  const mediaQueries: MediaQueries = {};

  for (const breakpoint in breakpoints) {
    mediaQueries[breakpoint] = `${mediaType} and (${
      mobileFirst ? "min-width" : "max-width"
    }: ${breakpoints[breakpoint]})`;
  }

  return mediaQueries;
};
