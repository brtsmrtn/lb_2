import validator from "validator";
import isURL from "validator/es/lib/isURL";

export function isLinkValid(url: string): boolean {
  return isURL(url);
}
