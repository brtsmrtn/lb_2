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
export default configureStore<
  ApplicationState,
  KnownTagsActions & ItemsActions & UrlInputActions & TabsActions
>({
  reducer: {
    knownTags: knownTagsReducer,
    items: itemsReducer,
    urlInput: urlInputReducer,
    tabs: tabsReducer,
  },
});
