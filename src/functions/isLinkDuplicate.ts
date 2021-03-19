import { ItemType } from "../types/ListItem";

export function isLinkDuplicate(url: string, items: ItemType[]): boolean {
  return !!items.find((item) => item.url === url);
}
