import React from "react";
import { ListItem } from "../types/ListItem";
import { ListingItem } from "../components/ListingItem";
import { ItemType } from "../types/ItemType";

export type ListingProps = {
  items: ListItem[];
  itemChanged?: (listItem: ListItem) => void;
  //onChange: (event: any) => void;
};
export const Listing: React.FC<ListingProps & ItemType> = ({
  title,
  items,
  itemChanged,
}) => {
  return (
    <>
      <h2>{`${title} items`}</h2>
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
              title={title}
              itemChanged={itemChanged}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};
