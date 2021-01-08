import React from "react";
import { validateLink } from "../functions/validateLink";
import { UrlType } from "../types/Url";

type MessageProps = UrlType & {};

export class Message extends React.Component<MessageProps> {
  render() {
    const isValid = validateLink(this.props.url);
    if (isValid) {
      return <p>v pho</p>;
    } else {
      return <p>not v pho</p>;
    }
  }
}
