import { screen } from "@testing-library/dom";
import { responsiveStyle, responsiveStyleRule } from "./data";
import { mediaQueries } from "./data/vanilla-syrup.config";

describe("Should attach css to node", () => {
  window.document.body.innerHTML = `
        <div data-testid="responsive" class="${responsiveStyle}">SAMPLE RESPONSIVE BOX</div>`;

  it("CSS base style is applied", () => {
    expect(screen.queryByTestId("responsive")).toHaveStyle({
      "background-color": "red",
    });
  });

  it("CSS At Media Rule is applied", () => {
    const cssRules = window.document.styleSheets[0].cssRules;
    const cssTexts = Object.values(cssRules).map((rule) => rule.cssText);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { base, ...breakpoints } = responsiveStyleRule;
    for (const breakpoint in breakpoints) {
      const mediaQuery = mediaQueries[breakpoint.substring(1)];
      const included = cssTexts.find((item) => item.includes(mediaQuery));
      expect(included).toBeTruthy();
    }
  });
});

// Media queries are not yet supported in jest-dom as of the moment
// See https://github.com/testing-library/jest-dom/issues/113#issuecomment-497233026
