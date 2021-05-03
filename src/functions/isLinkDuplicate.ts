import { Item } from "../types/ListItem";

export function isLinkDuplicate(url: string, items: Item[]): boolean {
  return !!items.find((item) => item.url === url);
}
