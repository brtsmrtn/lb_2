import { ListItem } from "../types/ListItem";

export function isLinkDuplicate(url: string, items: ListItem[]) {
  //const foundx = items.map((x) => x.url).find(item => item === url);
  return !!items.find((item) => item.url === url);
}
