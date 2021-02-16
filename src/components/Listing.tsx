import React from "react";
import { ListingItem } from "./ListingItem";
import { useSelector } from "react-redux";
import { ApplicationState } from "../app/store";
export const Listing: () => JSX.Element = () => {
  const items = useSelector((state: ApplicationState) => state.items);
  const tabs = [
    {
      title: "Links to read",
      items: [...items.filter((item) => !item.alreadyRead)],
      visible: true,
    },
    {
      title: "Previously read links",
      items: [...items.filter((item) => item.alreadyRead)],
      visible: false,
    },
  ];
  const resultingTabs = [];
  for (const tab of tabs) {
    if (tab.visible || (tab.items.length && !tab.visible))
      resultingTabs.push(
        <div key={tab.title}>
          <h2>
            {tab.title} ({tab.items.length})
          </h2>
          <table>
            <thead>
              {tab.items.length ? (
                <tr>
                  <th>URL</th>
                  <th>Date</th>
                </tr>
              ) : (
                <tr></tr>
              )}
            </thead>
            <tbody>
              {tab.items.map((item) => (
                <ListingItem item={item} key={item.id} />
              ))}
            </tbody>
          </table>
        </div>
      );
  }

  return <div>{resultingTabs}</div>;
};
