import { combineReducers } from "@reduxjs/toolkit";

import tagsReducer from "features/tagList/tagsSlice";
import itemsReducer from "features/tagList/itemsSlice";
const rootReducer = combineReducers({
  knownTags: tagsReducer,
  items: itemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
