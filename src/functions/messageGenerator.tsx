import React from "react";

import { ListItem } from "../types/ListItem";
import { isLinkProvided } from "./isLinkProvided";
import { linkStartsWithHttps } from "./linkStartsWithHttps";
import { isLinkValid } from "./isLinkValid";
import { isLinkDuplicate } from "./isLinkDuplicate";

export function messageGenerator(url: string, items: ListItem[]) {
  if (isLinkProvided(url)) {
    if (linkStartsWithHttps(url)) {
      if (isLinkValid(url)) {
        if (isLinkDuplicate(url, items)) {
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
