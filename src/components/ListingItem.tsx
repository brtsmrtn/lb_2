import React from "react";
import { ListItem } from "../types/ListItem";
import { Button } from "@material-ui/core";
import TagButton from "./TagButton";

type ListingItemProps = {
  item: ListItem;
  itemChanged: (listItem: ListItem) => void;
};

export class ListingItem extends React.Component<ListingItemProps> {
  render(): JSX.Element {
    return (
      <tr>
        <td>{this.props.item.url}</td>
        <td>{this.props.item.date}</td>
        <td>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.props.itemChanged(this.props.item)}
          >
            {!!this.props.item.alreadyRead ? "Unread" : "Read"}
          </Button>
        </td>
        <td>
          <TagButton />
        </td>
      </tr>
    );
  }
}
