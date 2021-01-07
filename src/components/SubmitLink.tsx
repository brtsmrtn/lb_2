import React from "react";
import { validateLink } from "../functions/validateLink";
import { UrlType } from "../types/Url";

type SubmitProps = UrlType & {
  onClick: (event: React.FormEvent<HTMLInputElement>) => void;
};

export class SubmitLink extends React.Component<SubmitProps> {
  render() {
    return (
      <input
        type="submit"
        value="Add link"
        disabled={!validateLink(this.props.url)}
        onClick={this.props.onClick}
      />
    );
  }
}
