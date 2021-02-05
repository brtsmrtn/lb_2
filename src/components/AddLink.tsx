import React from "react";
import { UrlType } from "../types/Url";

type LinkProps = UrlType & {
  onChange: (event: string) => void;
};

export const AddLink: (props: LinkProps) => JSX.Element = ({
  onChange,
  url,
}: LinkProps) => {
  return (
    <input
      type="text"
      autoComplete="off"
      spellCheck="false"
      autoCorrect="off"
      required
      placeholder="https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39"
      value={url}
      onChange={(event) => onChange(event.currentTarget.value)}
    />
  );
};
