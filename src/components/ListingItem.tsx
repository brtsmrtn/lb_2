import React from "react";
import { ListItem } from "../types/ListItem";
import { ItemType } from "../types/ItemType";

type ListingItemProps = {
  item: ListItem;
  itemChanged?: (listItem: ListItem) => void;
};

export class ListingItem extends React.Component<ListingItemProps & ItemType> {
  render(): JSX.Element {
    return (
      <tr>
        <td>{this.props.item.url}</td>
        <td>{this.props.item.date}</td>
        <td>
          <button onClick={() => this.props.itemChanged?.(this.props.item)}>
            {this.props.title}
          </button>
        </td>
      </tr>
    );
  }
}
