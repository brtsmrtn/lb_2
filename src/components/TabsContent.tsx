import React from "react";
import { ListingItem } from "./ListingItem";
import { useSelector } from "react-redux";
import { ApplicationState } from "../app/store";
import { TabType } from "../types/Tab";
import { toReadTitle, unreadTitle } from "../utils/constants";
import LoaderRibbon from "./LoaderRibbon";

export type TabsContentProps = {
  displayTabs: TabType[];
  selectedTabIndex: string;
};
export const TabsContent: (props: TabsContentProps) => JSX.Element = ({
  displayTabs,
  selectedTabIndex,
}: TabsContentProps) => {
  const { items, loading } = useSelector((state: ApplicationState) => state);
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
    <div style={{ width: "100%" }}>
      {loading.load && <LoaderRibbon />}
      {displayTabs.map((tab) => {
        const itemsToDisplay = whichItemsToDisplay(tab);
        return (
          <div
            role="tabpanel"
            hidden={selectedTabIndex !== tab.id}
            id={`vertical-tabpanel-${tab.id}`}
            aria-labelledby={`vertical-tab-${tab.id}`}
            key={tab.id}
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
                <tbody>
                  <tr>
                    <th>URL</th>
                    <th>Date</th>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        );
      })}
    </div>
  );
};
