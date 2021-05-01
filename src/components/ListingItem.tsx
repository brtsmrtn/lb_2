import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@material-ui/core";
import { ItemType } from "../types/ListItem";
import { TagButton } from "./TagButton";
import TagList from "./TagList";
import { deleteItem, toggleItem } from "../features/items";
import { ApplicationState } from "../app/store";

type ListingItemProps = {
  item: ItemType;
};

export const ListingItem: (props: ListingItemProps) => JSX.Element = ({
  item,
}: ListingItemProps) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: ApplicationState) => state);
  return (
    <tr>
      <td>{item.url}</td>
      <td>{item.date}</td>
      <td>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            dispatch(toggleItem(userData.user.uid, item));
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
            dispatch(deleteItem(userData.user.uid, item));
          }}
        >
          DELETE
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
