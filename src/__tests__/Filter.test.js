import React from "react";
import { render } from "@testing-library/react";
import Filter from "../components/List/Filter";

test("Text Details ", () => {
  const { container, getByText } = render(<Filter />);
  expect(getByText(/Filter/i)).toBeInTheDocument();
});
