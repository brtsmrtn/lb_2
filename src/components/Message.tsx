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
    const unreadItems = items.filter((item) => !item.alreadyRead);
    if (unreadItems.length) {
      return (
        <p>
          ▶ Wanna read something? You've got {unreadItems.length} link{""}
          {unreadItems.length === 1 ? "" : "s"} here.
        </p>
      );
    } else {
      if (items.length) {
        return <p>▶ You read everything. Great!</p>;
      } else {
        return (
          <p>
            ▶ Start with adding <i>http(s)</i> link in the field above.
          </p>
        );
      }
    }
  }
};
