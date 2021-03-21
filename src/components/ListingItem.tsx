import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { ItemType } from "../types/ListItem";
import { TagButton } from "./TagButton";
import TagList from "./TagList";
import { toggleItemStatus, deleteItem } from "../features/items";

type ListingItemProps = {
  item: ItemType;
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
          onClick={() => {
            dispatch(toggleItemStatus(item));
          }}
        >
          {item.alreadyRead ? "Unread" : "Read"}
        </Button>
      </td>
      <td>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            dispatch(deleteItem(item));
          }}
        >
          Delete
        </Button>
      </td>
      <td>
        <TagButton item={item} key={item.id} />
      </td>
      <td>
        <TagList editable={false} item={item} key={item.id} />
      </td>
    </tr>
  );
};
