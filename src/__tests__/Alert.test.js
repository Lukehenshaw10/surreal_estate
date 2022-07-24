import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  test("displays an error message", () => {
    const { getByText, asFragment } = render(<Alert message="Error!" />);

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Error/).textContent).toBe("Error!");
  });

  test("displays a successful message", () => {
    const { getByText, asFragment } = render(
      <Alert message="Success!!!" success />
    );

    expect(asFragment()).toMatchSnapshot();
    expect(getByText(/Success/).textContent).toBe("Success!!!");
  });

  test("does not render an error or a success message if message props is empty", () => {
    const { asFragment } = render(<Alert message="" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
