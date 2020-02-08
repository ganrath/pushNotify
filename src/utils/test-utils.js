// test-utils.js
import React from "react";
import { render } from "@testing-library/react";
import {
  StoreContext,
  DispatchContext,
  StoreProvider
} from "../components/Store";

let state1 = {
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

function customRender(child, state, dispatch) {
  return render(
    <StoreContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {child}
      </DispatchContext.Provider>
    </StoreContext.Provider>
  );
}
// function customReRender(child, state, dispatch) {
//   const { rerender } = render(
//     <StoreContext.Provider value={state}>
//       <DispatchContext.Provider value={dispatch}>
//         {child}
//       </DispatchContext.Provider>
//     </StoreContext.Provider>
//   );
//   return rerender;
// }
// const AllTheProviders = ({ children }) => {
//   return (
//     <StoreContext.Provider value={state}>
//       <DispatchContext.Provider value={dispatch}>
//         {children}
//       </DispatchContext.Provider>
//     </StoreContext.Provider>
//   );
// };

// const customRender = (ui, options) => {
//   render(ui, { wrapper: AllTheProviders, ...options });
// };
// function customRender(node, { value, ...options }) {
//   return render(
//     <StoreContext.Provider value={value}>
//       <DispatchContext.Provider value={dispatch}>
//         {node}
//       </DispatchContext.Provider>
//     </StoreContext.Provider>,
//     options
//   );
// }
// function customRender(ui, { value, ...options } = {}) {
//   function Wrapper(props) {
//     return (
//       <StoreContext.Provider value={value}>
//         <DispatchContext.Provider value={dispatch}>
//           {props}
//         </DispatchContext.Provider>
//       </StoreContext.Provider>
//     );
//   }
//   return render(ui, { wrapper: Wrapper, ...options });
// }
// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };
