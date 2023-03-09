import { screen } from "@testing-library/dom";
import { box } from "./style.css";

describe("Should attach css to node", () => {
  it("CSS is applied", () => {
    window.document.body.innerHTML = `
        <div data-testid="box" class="${box}">SAMPLE RESPONSIVE BOX</div>`;
    expect(screen.queryByTestId("box")).toHaveStyle({
      "background-color": "red",
    });
  });
});

// Media queries are not yet supported in jest-dom as of the moment
// See https://github.com/testing-library/jest-dom/issues/113#issuecomment-497233026
