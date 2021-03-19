import { configureStore } from "@reduxjs/toolkit";
import { TabType } from "../types/Tab";
import { TagType } from "../types/Tag";
import {
  linkBiscuitPrefix,
  toReadTitle,
  unreadTitle,
} from "../utils/constants";

export const LOAD_TABS = "LOAD_TABS";
export type LoadTabsAction = {
  type: typeof LOAD_TABS;
};
export const loadTabs: () => LoadTabsAction = () => ({ type: LOAD_TABS });

export const ADD_NEW_TAB = "ADD_NEW_TAB";
export type AddNewTabAction = {
  type: typeof ADD_NEW_TAB;
  tab: TabType;
};
export const addNewTab: (tag: TagType) => AddNewTabAction = (tag) => {
  tabsCounter++;
  return {
    type: ADD_NEW_TAB,
    tab: {
      index: tabsCounter,
      title: tag.title,
      predefined: false,
      coloredWith: tag.color,
    },
  };
};

export type TabsState = TabType[];
const initialTabs = [
  {
    index: 0,
    title: toReadTitle,
    predefined: true,
    coloredWith: "",
  },
  {
    index: 1,
    title: unreadTitle,
    predefined: true,
    coloredWith: "",
  },
];
export const initialTabsState: TabsState = initialTabs;
let tabsCounter = Math.max(...initialTabs.map((tab) => tab.index));
export type TabsActions = AddNewTabAction | LoadTabsAction;

export function tabsReducer(
  state = initialTabsState,
  action: TabsActions
): TabsState {
  switch (action.type) {
    case LOAD_TABS: {
      const loadedTabs = localStorage.getItem(`${linkBiscuitPrefix}_tabs`);
      if (loadedTabs) {
        const parsedTabs: TabType[] = JSON.parse(loadedTabs);
        tabsCounter = Math.max(...parsedTabs.map((tab) => tab.index));
        return parsedTabs;
      } else {
        return initialTabs;
      }
    }
    case ADD_NEW_TAB: {
      return [...state, action.tab];
    }
    default:
      return state;
  }
}

export const TabsStore = configureStore({ reducer: tabsReducer });
