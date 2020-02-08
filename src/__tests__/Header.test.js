import React from "react";
import { render } from "@testing-library/react";
import Header from "../components/header";

test("Header logo ", () => {
  const { getByTestId } = render(<Header />);
  expect(getByTestId("img-id")).toBeInTheDocument();
  expect(getByTestId("img-id")).toHaveAttribute("src");
});
