import React, { useState, useContext } from "react";
import CustomFilter from "./CustomFilter";
import { DispatchContext } from "../Store/index";
function Checkbox(props) {
  const dispatch = useContext(DispatchContext);
  const handleChange = e => {
    if (e.target.checked) {
      dispatch({ type: "CHECKBOX_SELECT", payload: e.target.id });
    } else {
      dispatch({ type: "CHECKBOX_REMOVE", payload: e.target.id });
    }
    dispatch({ type: "FETCH_SEARCH_RESULT" });
  };
  return (
    <React.Fragment>
      <label
        className="container"
        role="checkbox"
        data-testid={`input-checkbox-${props.details}`}
        aria-checked="false"
      >
        {props.details}
        <input
          type="checkbox"
          id={props.details}
          name={props.name}
          onChange={handleChange}
          data-testid="input-checkbox-checking"
        />
        <span className="checkmark"></span>
      </label>
    </React.Fragment>
  );
}

export default Checkbox;
