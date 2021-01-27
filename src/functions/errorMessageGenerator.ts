import { ListItem } from "../types/ListItem";
import { isLinkProvided } from "./isLinkProvided";
import { linkStartsWithHttps } from "./linkStartsWithHttps";
import { isLinkValid } from "./isLinkValid";
import { isLinkDuplicate } from "./isLinkDuplicate";
import { errorMessages, ErrorMessageMessage } from "./errorMessages";

export function errorMessageGenerator(
  url: string,
  items: ListItem[]
): ErrorMessageMessage {
  if (isLinkProvided(url)) {
    if (linkStartsWithHttps(url)) {
      if (url.length >= 2083) {
        return errorMessages.too_long;
      } else {
        if (isLinkValid(url)) {
          if (isLinkDuplicate(url, items)) {
            return errorMessages.duplicate;
          } else {
            return errorMessages.good;
          }
        } else {
          return errorMessages.invalid;
        }
      }
    } else {
      return errorMessages.missing_prefix;
    }
  } else {
    return undefined;
  }
}
