import React from "react";
import Chip from "@material-ui/core/Chip";
import { Tag } from "../types/Tag";
import { ListItem } from "../types/ListItem";
export type TagListProps = {
  editable: boolean;
  item: ListItem;
  tagDeleted: (item: ListItem, tag: Tag) => void;
};
const TagList: (props: TagListProps) => JSX.Element = ({
  editable,
  item,
  tagDeleted,
}: TagListProps) => {
  return (
    <div>
      {item.tags.map((tag: Tag, index: number) => (
        <Chip
          key={tag.id}
          label={tag.title}
          style={{
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            backgroundColor: tag.color!,
          }}
          {...{
            "data-tag-index": index,
          }}
          {...(editable && {
            onDelete: () => tagDeleted(item, tag),
          })}
        />
      ))}
    </div>
  );
};
export default TagList;
