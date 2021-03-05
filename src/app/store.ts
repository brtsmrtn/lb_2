import { configureStore } from "@reduxjs/toolkit";
import {
  knownTagsReducer,
  KnownTagsActions,
  KnownTagsState,
} from "../features/tags";
import { itemsReducer, ItemsActions, ItemsState } from "../features/items";
import {
  urlInputReducer,
  UrlInputActions,
  UrlInputState,
} from "../features/urlInput";
import { TabsActions, tabsReducer, TabsState } from "../features/tabs";
import { linkBiscuitPrefix } from "../utils/constants";
export type ApplicationState = {
  knownTags: KnownTagsState;
  items: ItemsState;
  urlInput: UrlInputState;
  tabs: TabsState;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const localStorageArrays: { [key: string]: any[] } = {
  knownTags: [],
  items: [],
  tabs: [],
};

function saveToLocalStorage(state: ApplicationState) {
  try {
    for (const [key] of Object.entries(localStorageArrays)) {
      const storageState = JSON.stringify(state[key as keyof typeof state]);
      localStorage.setItem(`${linkBiscuitPrefix}_${key}`, storageState);
    }
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    for (const [key] of Object.entries(localStorageArrays)) {
      const storageState = localStorage.getItem(`${linkBiscuitPrefix}_${key}`);
      if (storageState !== null) {
        localStorageArrays[key] = JSON.parse(storageState);
      }
    }
    return localStorageArrays ? localStorageArrays : undefined;
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}

const preloadedState = loadFromLocalStorage();
const store = configureStore<
  ApplicationState,
  KnownTagsActions & ItemsActions & UrlInputActions & TabsActions
>({
  reducer: {
    knownTags: knownTagsReducer,
    items: itemsReducer,
    urlInput: urlInputReducer,
    tabs: tabsReducer,
  },
  preloadedState,
});
store.dispatch({ type: "LOAD_ITEMS" });
store.dispatch({ type: "LOAD_KNOWN_TAGS" });
store.dispatch({ type: "LOAD_TABS" });
store.subscribe(() => saveToLocalStorage(store.getState()));
export default store;
