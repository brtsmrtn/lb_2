import { combineReducers, createStore } from "@reduxjs/toolkit";
import { knownTagsReducer, KnownTagsState } from "../features/tags";
import { itemsReducer, ItemsState } from "../features/items";
import { urlInputReducer, UrlInputState } from "../features/urlInput";
import { tabsReducer, TabsState } from "../features/tabs";

export type ApplicationState = {
  knownTags: KnownTagsState;
  items: ItemsState;
  urlInput: UrlInputState;
  tabs: TabsState;
};

function saveToLocalStorage(state: ApplicationState) {
  try {
    const serialisedState = JSON.stringify(state);
    localStorage.setItem("LinkBiscuit", serialisedState);
  } catch (e) {
    console.warn(e);
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("LinkBiscuit");
    if (serialisedState === null) return undefined;
    return JSON.parse(serialisedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
}
const rootReducers = combineReducers({
  knownTags: knownTagsReducer,
  items: itemsReducer,
  urlInput: urlInputReducer,
  tabs: tabsReducer,
});
const store = createStore(rootReducers, loadFromLocalStorage());
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
