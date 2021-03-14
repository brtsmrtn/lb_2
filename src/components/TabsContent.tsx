import React from "react";
import { ListingItem } from "./ListingItem";
import { useSelector } from "react-redux";
import { ApplicationState } from "../app/store";
import { ListItem } from "../types/ListItem";
import { Tab } from "../types/Tab";

export type TabsContentProps = {
  displayTabs: Tab[];
  selectedTabIndex: number;
};
export const TabsContent: (props: TabsContentProps) => JSX.Element = ({
  displayTabs,
  selectedTabIndex,
}: TabsContentProps) => {
  const { items } = useSelector((state: ApplicationState) => state);
  return (
    <div>
      {displayTabs.map((tab) => {
        let itemsToDisplay: ListItem[] = [];
        if (tab.title === "to read") {
          itemsToDisplay = items.filter((item) => !item.alreadyRead);
        } else if (tab.title === "already read") {
          itemsToDisplay = items.filter((item) => item.alreadyRead);
        } else {
          itemsToDisplay = items.filter((item) =>
            item.tags.find((tag) => tag.title === tab.title)
          );
        }
        return (
          <div
            role="tabpanel"
            hidden={selectedTabIndex !== tab.index}
            id={`vertical-tabpanel-${tab.index}`}
            aria-labelledby={`vertical-tab-${tab.index}`}
            key={tab.index}
          >
            <table>
              <thead>
                {itemsToDisplay.length ? (
                  <tr>
                    <th>URL</th>
                    <th>Date</th>
                  </tr>
                ) : (
                  <tr></tr>
                )}
              </thead>
              <tbody>
                {itemsToDisplay.map((item) => (
                  <ListingItem item={item} key={item.id} />
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};
