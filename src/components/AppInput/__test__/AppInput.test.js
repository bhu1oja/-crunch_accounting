import { render, screen } from "@testing-library/react";

import AppInput from "../AppInput";

describe("Input Component", () => {
  it("render input", () => {
    render(<AppInput />);
    const input = screen.getByTestId("app-input");
    expect(input).toBeTruthy();
  });

  it("Should have error class", () => {
    render(<AppInput errors={"error"} />);
    const input = screen.getByTestId("app-input");
    expect(input.className).toEqual(expect.stringContaining("is-invalid"));
  });

  it("Should change to textArea with props", () => {
    render(<AppInput textArea={true} />);
    const input = screen.getByTestId("app-input");
    expect(input.style.height).toEqual(expect.stringContaining("250px"));
  });
});
