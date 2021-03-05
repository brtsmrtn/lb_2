import React from "react";
import { errorMessageGenerator } from "../functions/errorMessageGenerator";
import { useSelector } from "react-redux";
import { ApplicationState } from "../app/store";

export const Message: () => JSX.Element = () => {
  const { items, urlInput } = useSelector((state: ApplicationState) => state);
  const errorMessage = errorMessageGenerator(urlInput, items);
  if (errorMessage) {
    return <p>▶ {errorMessage}</p>;
  } else {
    if (items) {
      return (
        <p>
          ▶ Wanna read something? You've got {items.length} link{""}
          {items.length === 1 ? "" : "s"} here.
        </p>
      );
    } else {
      return (
        <p>
          ▶ Start with adding <i>http(s)</i> link in the field above.
        </p>
      );
    }
  }
};
