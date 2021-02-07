import React from "react";
import { ListItem } from "../types/ListItem";
import { ListingItem } from "../components/ListingItem";
import { Tag } from "../types/Tag";

export type ListingProps = {
  items: ListItem[];
  knownTags: Tag[];
  title: "Previously read links" | "Links to read";
  itemChanged: (listItem: ListItem) => void;
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
  updateKnownTags: (title: string) => Tag | undefined;
};
export const Listing: (props: ListingProps) => JSX.Element = ({
  items,
  knownTags,
  title,
  itemChanged,
  tagAdded,
  tagDeleted,
  updateKnownTags,
}: ListingProps) => (
  <div>
    <h2>
      {title} ({items.length})
    </h2>
    <table>
      <thead>
        <tr>
          <th>URL</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <ListingItem
            item={item}
            key={item.id}
            knownTags={knownTags}
            itemChanged={itemChanged}
            tagAdded={tagAdded}
            tagDeleted={tagDeleted}
            updateKnownTags={updateKnownTags}
          />
        ))}
      </tbody>
    </table>
  </div>
);
