import React from "react";
import { ListItem } from "../types/ListItem";
import { ListingItem } from "../components/ListingItem";
import { Tag } from "../types/Tag";
import { PromiseTag } from "../types/PromiseTag";

export type ListingProps = {
  items: ListItem[];
  knownTags: Tag[];
  title: "Previously read links" | "Links to read";
  itemChanged: (listItem: ListItem) => void;
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
  updateKnownTags: (title: string) => Promise<PromiseTag>;
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
                knownTags={this.props.knownTags}
                itemChanged={this.props.itemChanged}
                tagAdded={this.props.tagAdded}
                tagDeleted={this.props.tagDeleted}
                updateKnownTags={this.props.updateKnownTags}
              />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
