import React from "react";
import { isLinkValid } from "../functions/isLinkValid";
import { UrlType } from "../types/Url";

type MessageProps = UrlType & {};

export class Message extends React.Component<MessageProps> {
  render() {
    const isValid = isLinkValid(this.props.url);
    if (isValid) {
      return <p>v pho</p>;
    } else {
      return <p>not v poho</p>;
    }
  }
}
