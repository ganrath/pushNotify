import React from "react";

import { render, fireEvent } from "test-utils";
import ListDetails from "../components/List/ListDetails";
let state = {
  sortResult: [
    {
      id: 2,
      name: "Morty Smith",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (C-137)",
        url: "https://rickandmortyapi.com/api/location/1"
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20"
      },
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    }
  ]
};

test("StoreContext & DispatchContext shows value from provider'", () => {
  const { queryByText, getByTestId, debug } = render(<ListDetails />, state);

  expect(getByTestId("name-h1")).toHaveTextContent("Morty Smith");
});
