import { render, screen } from "@testing-library/react";

import { AppHeading } from "../AppTypography";

describe("AppHeading Component", () => {
  it("Should display title from props", () => {
    render(<AppHeading title={"Test title"} />);
    const heading = screen.getByTestId("app-heading");
    expect(heading).toBeTruthy();
  });
});
