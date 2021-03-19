import React from "react";
import { ListingItem } from "./ListingItem";
import { useSelector } from "react-redux";
import { ApplicationState } from "../app/store";
import { TabType } from "../types/Tab";
import { toReadTitle, unreadTitle } from "../utils/constants";

export type TabsContentProps = {
  displayTabs: TabType[];
  selectedTabIndex: number;
};
export const TabsContent: (props: TabsContentProps) => JSX.Element = ({
  displayTabs,
  selectedTabIndex,
}: TabsContentProps) => {
  const { items } = useSelector((state: ApplicationState) => state);
  const whichItemsToDisplay = (tab: TabType) => {
    if (tab.title === toReadTitle) {
      return items.filter((item) => !item.alreadyRead);
    } else if (tab.title === unreadTitle) {
      return items.filter((item) => item.alreadyRead);
    } else {
      return items.filter((item) =>
        item.tags.find((tag) => tag.title === tab.title)
      );
    }
  };
  return (
    <div>
      {displayTabs.map((tab) => {
        const itemsToDisplay = whichItemsToDisplay(tab);
        return (
          <div
            role="tabpanel"
            hidden={selectedTabIndex !== tab.index}
            id={`vertical-tabpanel-${tab.index}`}
            aria-labelledby={`vertical-tab-${tab.index}`}
            key={tab.index}
          >
            {itemsToDisplay.length ? (
              <table>
                <thead>
                  <tr>
                    <th>URL</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {itemsToDisplay.map((item) => (
                    <ListingItem item={item} key={item.id} />
                  ))}
                </tbody>
              </table>
            ) : (
              <table>
                <thead>
                  <tr></tr>
                </thead>
                <tbody>empty</tbody>
              </table>
            )}
          </div>
        );
      })}
    </div>
  );
};
