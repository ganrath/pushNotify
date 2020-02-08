import React from "react";

import { render, fireEvent } from "test-utils";
import Checkbox from "../components/List/Checkbox";
const dispatch = jest.fn();
test("Text Details ", () => {
  const handleChange = jest.fn();
  const { container, getByText, getByTestId } = render(
    <Checkbox details="testid" name="test" />,
    "",
    dispatch
  );
  expect(getByText(/test/i)).toBeInTheDocument();
  fireEvent.click(getByTestId("input-checkbox-testid"));

  expect(getByTestId("input-checkbox-checking")).toBeChecked();
});
