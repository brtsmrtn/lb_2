import React from "react";
import { isLinkValid } from "../functions/isLinkValid";
import { isLinkDuplicate } from "../functions/isLinkDuplicate";
import { UrlType } from "../types/Url";
import { ListItem } from "../types/ListItem";

type MessageProps = UrlType & {
  items: ListItem[];
};

export class Message extends React.Component<MessageProps> {
  render() {
    if (this.props.url) {
      if (/(http(s?)):\/\//i.test(this.props.url)) {
        if (isLinkValid(this.props.url)) {
          if (isLinkDuplicate(this.props.url, this.props.items)) {
            return <p>This one I've got already!</p>;
          } else {
            return <p>That link looks good.</p>;
          }
        } else {
          return <p>That link still needs some sauce.</p>;
        }
      } else {
        return (
          <p>
            Beginning with <i>http(s)://</i> is a must.
          </p>
        );
      }
    } else {
      return (
        <p>
          Start with adding <i>http(s)</i> link in the field above.
        </p>
      );
    }
  }
}
