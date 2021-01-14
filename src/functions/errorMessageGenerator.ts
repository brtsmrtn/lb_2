import { ListItem } from "../types/ListItem";
import { isLinkProvided } from "./isLinkProvided";
import { linkStartsWithHttps } from "./linkStartsWithHttps";
import { isLinkValid } from "./isLinkValid";
import { isLinkDuplicate } from "./isLinkDuplicate";
import { errorMessages } from "./errorMessages";

export function errorMessageGenerator(
  url: string,
  items: ListItem[]
): string | undefined {
  if (isLinkProvided(url)) {
    if (linkStartsWithHttps(url)) {
      if (isLinkValid(url)) {
        if (isLinkDuplicate(url, items)) {
          return errorMessages.find((t) => t.state == "duplicate")!.message;
        } else {
          return errorMessages.find((t) => t.state == "good")!.message;
        }
      } else {
        return errorMessages.find((t) => t.state == "invalid")!.message;
      }
    } else {
      return errorMessages.find((t) => t.state == "missing_prefix")!.message;
    }
  }
}
