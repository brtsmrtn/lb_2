import React from "react";
import { isLinkDuplicate } from "../functions/isLinkDuplicate";
import { isLinkValid } from "../functions/isLinkValid";
import { ListItem } from "../types/ListItem";
import { UrlType } from "../types/Url";
import { Button } from "@material-ui/core";
type SubmitProps = UrlType & {
  items: ListItem[];
  onClick: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void | undefined;
};

export class SubmitLink extends React.Component<SubmitProps> {
  render(): JSX.Element {
    return (
      <Button
        variant="outlined"
        color="primary"
        disabled={
          !isLinkValid(this.props.url) ||
          isLinkDuplicate(this.props.url, this.props.items) ||
          this.props.url.length >= 2083
        }
        onClick={this.props.onClick}
      >
        Add link
      </Button>
    );
  }
}
