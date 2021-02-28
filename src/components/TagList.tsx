import React from "react";
import { useDispatch } from "react-redux";
import Chip from "@material-ui/core/Chip";
import { ListItem } from "../types/ListItem";
import { Tag } from "../types/Tag";
import { unassignTagFromItem } from "../features/items";
export type TagListProps = {
  editable: boolean;
  item: ListItem;
};
const TagList: (props: TagListProps) => JSX.Element = ({
  editable,
  item,
}: TagListProps) => {
  const dispatch = useDispatch();
  return (
    <div>
      {item.tags.map((tag: Tag, index: number) => (
        <Chip
          key={tag.id}
          label={tag.title}
          style={{
            backgroundColor: tag.color,
          }}
          {...{
            "data-tag-index": index,
          }}
          {...(editable && {
            onDelete: () => {
              const tagAssigned = item.tags.find((t) => t.id === tag.id);
              console.log(tagAssigned);
              if (tagAssigned) {
                dispatch(unassignTagFromItem(tag, item));
              }
            },
          })}
        />
      ))}
    </div>
  );
};
export default TagList;
