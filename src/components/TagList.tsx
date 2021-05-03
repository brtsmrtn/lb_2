import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Chip from "@material-ui/core/Chip";
import { Item } from "../types/ListItem";
import { Tag } from "../types/Tag";
import { unassignTag } from "../features/items";
import { ApplicationState } from "../app/store";
export type TagListProps = {
  editable: boolean;
  item: Item;
};
const TagList: (props: TagListProps) => JSX.Element = ({
  editable,
  item,
}: TagListProps) => {
  const dispatch = useDispatch();
  const uid = useSelector((state: ApplicationState) => state.userData.user.uid);
  return (
    <div>
      {item.tags &&
        item.tags.map((tag: Tag, index: number) => (
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
                if (tagAssigned) {
                  dispatch(unassignTag(tag, item, uid));
                }
              },
            })}
          />
        ))}
    </div>
  );
};
export default TagList;
