import { configureStore } from "@reduxjs/toolkit";
import { Tab } from "../types/Tab";
import { Tag } from "../types/Tag";
let tabsCounter = 1;

export const ADD_NEW_TAB = "ADD_NEW_TAB";
export type AddNewTabAction = {
  type: typeof ADD_NEW_TAB;
  tab: Tab;
};
export const addNewTab: (tag: Tag) => AddNewTabAction = (tag) => {
  tabsCounter++;
  return {
    type: ADD_NEW_TAB,
    tab: {
      index: tabsCounter,
      title: tag.title,
      alwaysVisible: false,
      selected: false,
      coloredWith: tag.color,
    },
  };
};

export const SELECT_TAB = "SELECT_TAB";
export type SelectTabAction = {
  type: typeof SELECT_TAB;
  index: number;
};
export const selectTab: (index: number) => SelectTabAction = (index) => {
  return {
    type: SELECT_TAB,
    index,
  };
};

export type TabsState = Tab[];
const initialTabs = [
  {
    index: 0,
    title: "to read",
    alwaysVisible: true,
    selected: true,
    coloredWith: "",
  },
  {
    index: 1,
    title: "already read",
    alwaysVisible: true,
    selected: false,
    coloredWith: "",
  },
];
export const initialTabsState: TabsState = initialTabs;
export type TabsActions = AddNewTabAction | SelectTabAction;

export function tabsReducer(
  state = initialTabsState,
  action: TabsActions
): TabsState {
  switch (action.type) {
    case ADD_NEW_TAB: {
      return [...state, action.tab];
    }
    case SELECT_TAB: {
      const unselectedTabs = [
        ...state.map((o) => {
          return Object.assign({}, o, {
            selected: false,
          });
        }),
      ];
      const selectedTab = unselectedTabs[action.index];
      const reselectedTabs = [
        ...unselectedTabs.slice(0, selectedTab.index),
        {
          ...selectedTab,
          selected: true,
        },
        ...unselectedTabs.slice(selectedTab.index + 1),
      ];
      console.log(reselectedTabs);
      return [...reselectedTabs.sort((a, b) => a.index - b.index)];
    }
    default:
      return state;
  }
}

export const TabsStore = configureStore({ reducer: tabsReducer });
