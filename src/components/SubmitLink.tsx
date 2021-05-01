import React from "react";
import { isLinkDuplicate } from "../functions/isLinkDuplicate";
import { isLinkValid } from "../functions/isLinkValid";
import { Button } from "@material-ui/core";
import { maxLinkLength } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../app/store";
import { addItem } from "../features/items";
import { setUrl } from "../features/urlInput";

export const SubmitLink: () => JSX.Element = () => {
  const dispatch = useDispatch();
  const { userData, items, urlInput } = useSelector(
    (state: ApplicationState) => state
  );
  return (
    <Button
      variant="outlined"
      color="primary"
      disabled={
        !isLinkValid(urlInput) ||
        isLinkDuplicate(urlInput, items) ||
        urlInput.length >= maxLinkLength
      }
      onClick={() => {
        dispatch(addItem(userData.user.uid, urlInput));
        dispatch(setUrl(""));
      }}
    >
      Add link
    </Button>
  );
};
