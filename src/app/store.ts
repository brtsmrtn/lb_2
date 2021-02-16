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

export type ApplicationState = {
  knownTags: KnownTagsState;
  items: ItemsState;
  urlInput: UrlInputState;
};
export default configureStore<
  ApplicationState,
  KnownTagsActions & ItemsActions & UrlInputActions
>({
  reducer: {
    knownTags: knownTagsReducer,
    items: itemsReducer,
    urlInput: urlInputReducer,
  },
});
