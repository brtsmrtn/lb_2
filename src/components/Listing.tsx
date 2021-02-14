import React from "react";
import { ListItem } from "../types/ListItem";
import { ListingItem } from "./ListingItem";

export type ListingProps = {
  items: ListItem[];
  title: "Previously read links" | "Links to read";
};
export const Listing: (props: ListingProps) => JSX.Element = ({
  items,
  title,
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
          <ListingItem item={item} key={item.id} />
        ))}
      </tbody>
    </table>
  </div>
);
