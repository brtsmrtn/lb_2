import React from "react";
import { ListItem } from "../types/ListItem";
import { ListingItem } from "../components/ListingItem";
import { Tag } from "../types/Tag";

export type ListingProps = {
  items: ListItem[];
  tags: Tag[];
  title: "Previously read links" | "Links to read";
  itemChanged: (listItem: ListItem) => void;
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
  updateAvailableTags: (title: string) => Promise<any>;
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
                availableTags={this.props.tags}
                itemChanged={this.props.itemChanged}
                tagAdded={this.props.tagAdded}
                tagDeleted={this.props.tagDeleted}
                updateAvailableTags={this.props.updateAvailableTags}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
