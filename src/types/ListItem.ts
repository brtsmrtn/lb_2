import { Tag } from "./Tag";
export type ListItem = {
  id: string;
  url: string;
  date: string;
  alreadyRead: boolean;
  tags: Tag[];
};
