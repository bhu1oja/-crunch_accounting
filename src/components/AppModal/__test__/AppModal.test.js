import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import AppModal from "../AppModal";

const inputs = {
  nameTitle: "Mr",
  firstName: "Bhupendra",
  lastName: "Ojha",
  accountName: "Bhupendra Ojha",
  companyName: "Before You Bid",
  email: "bhu1.oja@gmail.com",
  emailOpt: true,
  phone: "04351907106",
  fax: "",
  title: "Software Engineer",
  street: "38 Churchill Avenue",
  city: "Strathfield",
  state: "New South Wales",
  postCode: "2135",
  description: "Hi i am Bhupendra ojha.",
};

describe("Test App Modal", () => {
  it("render success message", () => {
    render(<AppModal inputs={inputs} show={true} />);
    const successMesssage = screen.getByText("Saved");
    expect(successMesssage).toBeInTheDocument();
  });

  it("render dynamic data component", () => {
    render(<AppModal inputs={inputs} show={true} />);
    const email = screen.getByText("bhu1.oja@gmail.com");
    expect(email).toBeTruthy();
  });

  it("close modal on close button pressed", async () => {
    render(<AppModal inputs={inputs} show={true} />);
    userEvent.click(screen.getByLabelText(/Close/i));

    await waitFor(() => {
      screen.getByLabelText(/Close/i);
    });

    expect(screen.queryByText("show")).toBeFalsy();
  });
});
