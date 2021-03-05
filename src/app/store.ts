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
export type ApplicationState = {
  knownTags: KnownTagsState;
  items: ItemsState;
  urlInput: UrlInputState;
  tabs: TabsState;
};

const localStorages = ["knownTags", "items", "urlInput", "tabs"];

function saveToLocalStorage(state: ApplicationState) {
  try {
    localStorages.map((storage) => {
      const storePart = storage as keyof typeof state;
      const serialisedState = JSON.stringify(state[storePart]);
      localStorage.setItem("LinkBiscuit_" + storage, serialisedState);
    });
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    let loadedState = "";
    localStorages.map((storage) => {
      const unserializedState = localStorage.getItem("LinkBiscuit_" + storage);
      if (unserializedState !== null) {
        loadedState += '"' + storage + '":' + unserializedState + ",";
      }
      // else {
      //   if (storage === "urlInput") {
      //     loadedState += '"' + storage + '":"",';
      //   } else {
      //     loadedState += '"' + storage + '":[],';
      //   }
      // }
    });
    return loadedState
      ? JSON.parse("{" + loadedState.replace(/,$/, "") + "}")
      : undefined;
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
