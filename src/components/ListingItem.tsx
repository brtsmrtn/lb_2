import React from "react";
import { ListItem } from "../types/ListItem";

export type ListingProps = {
  items: ListItem;
};
//const x: ListingProps = [{items:[{id:1,url:"",date:""}]}]
//const x: ListingProps = []
//x.items.
export class ListingItem extends React.Component<ListingProps> {
  render() {
    return (
      <li>
        <label>
          {this.items.id}
          {this.items.url}
          {this.items.date}
        </label>
      </li>
    );
  }
}
