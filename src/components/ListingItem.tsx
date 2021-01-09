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
      <tr>
        <td>{this.props.item.id}</td>
        <td>{this.props.item.url}</td>
        <td>{this.props.item.date}</td>
      </tr>
    );
  }
}
