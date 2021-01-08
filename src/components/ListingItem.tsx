import React from "react";
import { ListItem } from "../types/ListItem";

type ListingItemProps = {
  item: ListItem;
};
//const x: ListingProps = [{items:[{id:1,url:"",date:""}]}]
//x.items.date

export class ListingItem extends React.Component<ListingItemProps> {
  render() {
    return (
      <li>
        <label>
          {this.props.item.id}
          {this.props.item.url}
          {this.props.item.date}
        </label>
      </li>
    );
  }
}
