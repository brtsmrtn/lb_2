import React from "react";
import { UrlType } from "../types/Url";

type LinkProps = UrlType & {
  onChange: (event: string) => void;
};

export class AddLink extends React.Component<LinkProps> {
  render() {
    return (
      <input
        type="text"
        autoComplete="off"
        spellCheck="false"
        autoCorrect="off"
        required
        placeholder="https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39"
        value={this.props.url}
        onChange={(event) => this.props.onChange(event.currentTarget.value)}
      />
    );
  }
}
