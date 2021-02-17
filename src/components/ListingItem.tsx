import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { ListItem } from "../types/ListItem";
import { TagButton } from "./TagButton";
import TagList from "./TagList";
import { toggleItemStatus } from "../features/items";

type ListingItemProps = {
  item: ListItem;
};

export const ListingItem: (props: ListingItemProps) => JSX.Element = ({
  item,
}: ListingItemProps) => {
  const dispatch = useDispatch();
  return (
    <tr>
      <td>{item.url}</td>
      <td>{item.date}</td>
      <td>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => dispatch(toggleItemStatus(item))}
        >
          {item.alreadyRead ? "Unread" : "Read"}
        </Button>
      </td>
      <td>
        <TagButton item={item} />
      </td>
      <td>
        <TagList editable={false} item={item} />
      </td>
    </tr>
  );
};
