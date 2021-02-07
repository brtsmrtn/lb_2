import React from "react";
import { isLinkDuplicate } from "../functions/isLinkDuplicate";
import { isLinkValid } from "../functions/isLinkValid";
import { ListItem } from "../types/ListItem";
import { UrlType } from "../types/Url";
import { Button } from "@material-ui/core";
import { maxLinkLength } from "../utils/constants";
type SubmitProps = UrlType & {
  items: ListItem[];
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
};

export const SubmitLink: (props: SubmitProps) => JSX.Element = ({
  items,
  onClick,
  url,
}: SubmitProps) => (
  <Button
    variant="outlined"
    color="primary"
    disabled={
      !isLinkValid(url) ||
      isLinkDuplicate(url, items) ||
      url.length >= maxLinkLength
    }
    onClick={onClick}
  >
    Add link
  </Button>
);
