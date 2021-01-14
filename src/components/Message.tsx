import React from "react";
import { UrlType } from "../types/Url";
import { ListItem } from "../types/ListItem";
import { errorMessageGenerator } from "../functions/errorMessageGenerator";

type MessageProps = UrlType & {
  items: ListItem[];
};

export class Message extends React.Component<MessageProps> {
  render() {
    const { url, items } = this.props;
    const errorMessage = errorMessageGenerator(url, items);
    if (errorMessage) {
      return <p>▶ {errorMessage}</p>;
    } else {
      if (items.length) {
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
  }
}
