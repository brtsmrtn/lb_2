import React from "react";
import { UrlType } from "../types/Url";
import { ListItem } from "../types/ListItem";
import { messageGenerator } from "../functions/messageGenerator";

type MessageProps = UrlType & {
  items: ListItem[];
};

export class Message extends React.Component<MessageProps> {
  render() {
    return messageGenerator(this.props.url, this.props.items);
  }
}
