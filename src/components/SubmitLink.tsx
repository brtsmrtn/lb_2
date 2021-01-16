import React from "react";
import { isLinkDuplicate } from "../functions/isLinkDuplicate";
import { isLinkValid } from "../functions/isLinkValid";
import { ListItem } from "../types/ListItem";
import { UrlType } from "../types/Url";

type SubmitProps = UrlType & {
  items: ListItem[];
  onClick: (event: React.FormEvent<HTMLInputElement>) => void;
};

export class SubmitLink extends React.Component<SubmitProps> {
  render(): JSX.Element {
    return (
      <input
        type="submit"
        value="Add link"
        disabled={
          !isLinkValid(this.props.url) ||
          isLinkDuplicate(this.props.url, this.props.items)
        }
        onClick={this.props.onClick}
      />
    );
  }
}
