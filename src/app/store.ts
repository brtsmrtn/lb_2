import { configureStore } from "@reduxjs/toolkit";
import {
  knownTagsReducer,
  KnownTagsActions,
  KnownTagsState,
} from "../features/tags";
import { itemsReducer, ItemsActions, ItemsState } from "../features/items";

export type ApplicationState = {
  knownTags: KnownTagsState;
  items: ItemsState;
};
export default configureStore<
  ApplicationState,
  KnownTagsActions & ItemsActions
>({
  reducer: {
    knownTags: knownTagsReducer,
    items: itemsReducer,
  },
});
