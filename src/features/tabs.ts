/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import { ref } from "../FirebaseContext";
import { FirebaseTabType, TabType } from "../types/Tab";
import { TagType } from "../types/Tag";
import { toReadTitle, unreadTitle } from "../utils/constants";
import { reload } from "./loading";
import { popSnack } from "./snack";

export const TABS_SET = "TABS_SET";
export type TabsSetAction = {
  type: typeof TABS_SET;
  tabs: TabType[];
};
export const tabsSet: (tabs: TabType[]) => TabsSetAction = (tabs) => {
  return {
    type: TABS_SET,
    tabs,
  };
};

export const LOAD_TABS = "LOAD_TABS";
export type LoadTabsAction = {
  type: typeof LOAD_TABS;
  tabs: TabType[];
};
export const loadTabs: (tabs: TabType[]) => LoadTabsAction = (tabs) => ({
  type: LOAD_TABS,
  tabs,
});

export const TAB_ADDED = "TAB_ADDED";
export type TabAddedAction = {
  type: typeof TAB_ADDED;
  tab: TabType;
};
export const tabAdded: (tab: TabType) => TabAddedAction = (tab) => {
  return {
    type: TAB_ADDED,
    tab,
  };
};

export type TabsState = TabType[];
export const initialTabs = [
  {
    id: "0",
    title: toReadTitle,
    predefined: true,
    color: "",
  },
  {
    id: "",
    title: unreadTitle,
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

export const addTab = (tag: TagType, uid: string) => (dispatch: any) => {
  dispatch(reload(true));
  const itemsRef = ref.child(`users/${uid}/tabs/`);
  const newTabRef = itemsRef.push();
  const firebaseTab: any = {
    title: tag.title,
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
    dispatch(reload(false));
  });
};

export const setUser = (uid: string) => (dispatch: any) => {
  dispatch(reload(true));
  const itemsRef = ref.child(`users/${uid}/tabs/`);
  const firebaseTabs: FirebaseTabType[] = [];
  initialTabs.map((item) => {
    const newPostKey: any = itemsRef.push().key;
    firebaseTabs[newPostKey] = {
      title: item.title,
      predefined: item.predefined,
      color: item.color,
    };
  });
  itemsRef.set(firebaseTabs, (error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      const storeTabs: TabType[] = [];
      Object.keys(firebaseTabs).forEach((k: any) => {
        storeTabs.push({
          id: k,
          ...firebaseTabs[k],
        });
      });
      dispatch(tabsSet(storeTabs));
      dispatch(popSnack(true, "success"));
    }
    dispatch(reload(false));
  });
};
