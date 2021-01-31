import React from "react";
import { ListItem } from "../types/ListItem";
import { ListingItem } from "../components/ListingItem";

export type ListingProps = {
  items: ListItem[];
  title: "Previously read links" | "Links to read";
  itemChanged: (listItem: ListItem) => void;
};
export class Listing extends React.Component<ListingProps> {
  render(): JSX.Element {
    return (
      <div>
        <h2>
          {this.props.title} ({this.props.items.length})
        </h2>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <ListingItem
                item={item}
                key={item.id}
                itemChanged={this.props.itemChanged}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
