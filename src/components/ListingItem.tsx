import React from "react";
import { ListItem } from "../types/ListItem";
import { Button } from "@material-ui/core";
import { TagButton } from "./TagButton";
import { Tag } from "../types/Tag";
import TagList from "./TagList";

type ListingItemProps = {
  item: ListItem;
  itemChanged: (listItem: ListItem) => void;
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
  // updateKnownTags: (title: string) => Tag | undefined;
};

export const ListingItem: (props: ListingItemProps) => JSX.Element = ({
  item,
  itemChanged,
  tagAdded,
  tagDeleted,
}: ListingItemProps) => (
  <tr>
    <td>{item.url}</td>
    <td>{item.date}</td>
    <td>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => itemChanged(item)}
      >
        {!!item.alreadyRead ? "Unread" : "Read"}
      </Button>
    </td>
    <td>
      <TagButton item={item} tagAdded={tagAdded} tagDeleted={tagDeleted} />
    </td>
    <td>
      <TagList editable={false} item={item} tagDeleted={tagDeleted} />
    </td>
  </tr>
);
