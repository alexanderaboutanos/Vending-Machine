/** @format */

import { render } from "@testing-library/react";
import VendingMachine from "./VendingMachine";

it("renders without crashing", function () {
  render(<VendingMachine />);
});

it("matches snapshot", function () {
  const { asFragment } = render(<VendingMachine />);
  expect(asFragment()).toMatchSnapshot();
});
