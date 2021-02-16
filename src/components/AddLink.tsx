import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUrl } from "../features/urlInput";
import { ApplicationState } from "../app/store";

export const AddLink: () => JSX.Element = () => {
  const dispatch = useDispatch();
  const urlInput = useSelector((state: ApplicationState) => state.urlInput);
  return (
    <input
      type="text"
      autoComplete="off"
      spellCheck="false"
      autoCorrect="off"
      required
      value={urlInput}
      placeholder="https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39"
      onChange={(event) =>
        dispatch(setUrl(event.currentTarget.value.toLowerCase()))
      }
    />
  );
};
