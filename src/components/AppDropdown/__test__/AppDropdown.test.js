import { render, screen } from "@testing-library/react";

import { NameTitleDropDown, StateDropdown } from "../AppDropdown";

const inputs = { nameTitle: "None" };

describe("Test App Drop down", () => {
  it("render State drop down", () => {
    render(<StateDropdown />);
    expect(screen.getByTestId("app-select-state")).toBeInTheDocument();
  });

  it("render State drop  on default", async () => {
    render(<StateDropdown />);
    expect(screen.getByTestId("app-select-state")).toHaveTextContent(
      "Select..."
    );
  });

  it("render nameTitle drop down", async () => {
    render(<NameTitleDropDown inputs={inputs} />);
    expect(screen.getByTestId("app-select-nameTitle")).toBeInTheDocument();
  });
});
