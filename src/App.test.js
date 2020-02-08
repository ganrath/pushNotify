import React from "react";
import { render, fireEvent, rerender } from "test-utils";
import { StoreContext } from "./components/Store";
import Filter from "./components/List/Filter";
import ListDetails from "./components/List/ListDetails";
import CustomFilter from "./components/List/CustomFilter";
const dispatch = jest.fn();
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
    },
    {
      id: 3,
      name: "Bharath",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
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
let state1 = {
  sortResult: [
    {
      id: 3,
      name: "Bharath",
      status: "Alive",
      species: "Human",
      type: "",
      gender: "Female",
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
let filterCheck = ["Human", "Mytholog", "Other Species"],
  genderCheck = ["Male", "Female"],
  speciesCheck = [
    "unknown",
    "Post-Apocalyptic Earth",
    "Nuptia 4",
    "Other origins"
  ];
test("test the app ", () => {
  const tree = (
    <div>
      <Filter>
        <CustomFilter head="Species" checkbox={filterCheck} />
        <CustomFilter head="Gender" checkbox={genderCheck} />
        <CustomFilter head="Origin" checkbox={speciesCheck} />
      </Filter>
      <ListDetails />
    </div>
  );

  const { queryByText, getByTestId, getByText, rerender } = render(
    tree,
    state,
    dispatch
  );
  expect(queryByText(/Morty Smith/gi)).toBeInTheDocument();
  fireEvent.click(getByTestId("input-checkbox-Female"));
  rerender(
    <StoreContext.Provider value={state1}>
      <ListDetails />
    </StoreContext.Provider>
  );
  expect(queryByText(/Morty Smith/gi)).not.toBeInTheDocument();
  expect(queryByText(/Bharath/gi)).toBeInTheDocument();
});
