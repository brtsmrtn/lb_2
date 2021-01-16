import isURL from "validator/lib/isURL";

export function isLinkValid(url: string): boolean {
  return isURL(url);
}
