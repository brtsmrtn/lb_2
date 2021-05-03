/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import { ref } from "../FirebaseContext";
import { Tab } from "../types/Tab";
import { Tag } from "../types/Tag";
import { toReadTitle, unreadTitle } from "../utils/constants";
import { reload } from "./loading";
import { popSnack } from "./snack";

export const TABS_SET = "TABS_SET";
export type TabsSetAction = {
  type: typeof TABS_SET;
  tabs: Tab[];
};
export const tabsSet: (tabs: Tab[]) => TabsSetAction = (tabs) => {
  return {
    type: TABS_SET,
    tabs,
  };
};

export const LOAD_TABS = "LOAD_TABS";
export type LoadTabsAction = {
  type: typeof LOAD_TABS;
  tabs: Tab[];
};
export const loadTabs: (tabs: Tab[]) => LoadTabsAction = (tabs) => ({
  type: LOAD_TABS,
  tabs,
});

export const TAB_ADDED = "TAB_ADDED";
export type TabAddedAction = {
  type: typeof TAB_ADDED;
  tab: Tab;
};
export const tabAdded: (tab: Tab) => TabAddedAction = (tab) => {
  return {
    type: TAB_ADDED,
    tab,
  };
};

export type TabsState = Tab[];
export const initialTabs = [
  {
    id: "0",
    title: toReadTitle,
    url: "/" + toReadTitle.replace(" ", "_"),
    predefined: true,
    color: "",
  },
  {
    id: "1",
    title: unreadTitle,
    url: "/" + unreadTitle.replace(" ", "_"),
    predefined: true,
    color: "",
  },
];
export const initialTabsState: TabsState = [];
export type TabsActions = TabAddedAction | LoadTabsAction | TabsSetAction;

export function tabsReducer(
  state = initialTabsState,
  action: TabsActions
): TabsState {
  switch (action.type) {
    case TABS_SET:
      return action.tabs;
    case LOAD_TABS: {
      const loadedTabs = [...action.tabs];
      if (loadedTabs.length) {
        return loadedTabs;
      } else {
        return initialTabs;
      }
    }
    case TAB_ADDED: {
      return [...state, action.tab];
    }
    default:
      return state;
  }
}

export const TabsStore = configureStore({ reducer: tabsReducer });

export const addTab = (tag: Tag, uid: string) => (dispatch: any) => {
  dispatch(reload());
  const itemsRef = ref.child(`users/${uid}/tabs/`);
  const newTabRef = itemsRef.push();
  const firebaseTab: any = {
    title: tag.title,
    url: "/" + tag.title.replace(" ", "_"),
    predefined: false,
    color: tag.color,
  };
  newTabRef.set(firebaseTab, (error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      const storeTab = {
        id: newTabRef.key,
        ...firebaseTab,
      };
      dispatch(tabAdded(storeTab));
      dispatch(popSnack(true, "success"));
    }
    dispatch(reload());
  });
};
