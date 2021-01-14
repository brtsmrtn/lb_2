import { ListItem } from "../types/ListItem";
import { isLinkProvided } from "./isLinkProvided";
import { linkStartsWithHttps } from "./linkStartsWithHttps";
import { isLinkValid } from "./isLinkValid";
import { isLinkDuplicate } from "./isLinkDuplicate";

export function errorMessageGenerator(
  url: string,
  items: ListItem[]
): string | undefined {
  if (isLinkProvided(url)) {
    if (linkStartsWithHttps(url)) {
      if (isLinkValid(url)) {
        if (isLinkDuplicate(url, items)) {
          return "This one I've got already!";
        } else {
          return "That link looks good.";
        }
      } else {
        return "That link still needs some sauce.";
      }
    } else {
      return "Beginning with http(s):// is a must.";
    }
  }
}
