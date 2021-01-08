import React from "react";
import { ListItem } from "../types/ListItem";
import { ListingItem } from "../components/ListingItem";

export type ListingProps = {
  items: ListItem[];
  //onChange: (event: any) => void;
};
export const Listing: React.FC<ListingProps> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <ListingItem item={item} key={item.id} />
      ))}
    </ul>
  );
};