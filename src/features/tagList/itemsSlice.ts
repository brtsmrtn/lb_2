import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListItem } from "../../types/ListItem";
import { Tag } from "../../types/Tag";

const itemsInitialState = [
  {
    id: 1,
    url: "https://redux.js.org/recipes/usage-with-typescript",
    date: "now",
    alreadyRead: false,
    tags: [],
  },
  {
    id: 2,
    url: "https://redux-toolkit.js.org/tutorials/intermediate-tutorial",
    date: "before",
    alreadyRead: true,
    tags: [
      {
        id: 2,
        title: "zkusebni2",
        color: "#ec0b39",
      },
    ],
  },
] as ListItem[];

const items = createSlice({
  name: "items",
  initialState: itemsInitialState,
  reducers: {
    getItems(state) {
      return { ...state, alreadyRead: true };
    },
    getItem(state, { payload }: PayloadAction<ListItem>) {
      return { ...state, item: payload };
    },
    assignTagToItem(
      state,
      { payload }: PayloadAction<{ item: ListItem; tag: Tag }>
    ) {
      state[payload.item.id].tags.push(payload.tag);
      const tagsToUpdate = state[payload.item.id].tags.push(payload.tag);
      console.log(tagsToUpdate);
      //state[payload.item.id].tags = ;
      console.log(state);
      return { ...state, tags: tagsToUpdate };
    },
  },
});

export const { getItems, getItem, assignTagToItem } = items.actions;
export default items.reducer;
