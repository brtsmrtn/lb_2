import { Tag } from "./Tag";
export type ListItem = {
  id: number;
  url: string;
  date: string;
  alreadyRead: boolean;
  tags: Tag[];
};
