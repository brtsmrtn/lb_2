import React from "react";
import { ListItem } from "../types/ListItem";

type ListingItemProps = {
  item: ListItem;
};

export class ListingItem extends React.Component<ListingItemProps> {
  render() {
    return (
      <tr>
        <td>{this.props.item.url}</td>
        <td>{this.props.item.date}</td>
      </tr>
    );
  }
}
