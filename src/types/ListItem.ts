import { TagType } from "./Tag";
export type ItemType = {
  id: string;
  url: string;
  date: string;
  alreadyRead: boolean;
  tags: TagType[];
};
