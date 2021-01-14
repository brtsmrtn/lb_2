import { ListItem } from "../types/ListItem";

export function isLinkDuplicate(url: string, items: ListItem[]): boolean {
  return !!items.find((item) => item.url === url);
}
