import { Tag } from "./Tag";
export type Item = {
  id: string;
  url: string;
  date: string;
  alreadyRead: boolean;
  tags: Tag[];
  itemBeingAdded?: boolean;
  itemBeingSaved?: boolean;
  itemSaved?: boolean;
};
