import { configureStore } from "@reduxjs/toolkit";
import { ListItem } from "../types/ListItem";
import { Tag } from "../types/Tag";
let itemsCounter = 0;

export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export type AddNewItemAction = {
  type: typeof ADD_NEW_ITEM;
  listItem: ListItem;
};
export const addNewItem: (url: string) => AddNewItemAction = (url) => {
  itemsCounter++;
  return {
    type: ADD_NEW_ITEM,
    listItem: {
      id: itemsCounter.toString(),
      url,
      date: new Date().getTime().toString(),
      alreadyRead: false,
      tags: [],
    },
  };
};

export const ASSIGN_TAG_TO_ITEM = "ASSIGN_TAG_TO_ITEM";
export type AssignTagToItemAction = {
  type: typeof ASSIGN_TAG_TO_ITEM;
  item: ListItem;
  tag: Tag;
};
export const assignTagToItem: (
  tag: Tag,
  item: ListItem
) => AssignTagToItemAction = (tag, item) => {
  return {
    type: ASSIGN_TAG_TO_ITEM,
    item,
    tag,
  };
};

export const UNASSIGN_TAG_FROM_ITEM = "UNASSIGN_TAG_FROM_ITEM";
export type UnassignTagFromItemAction = {
  type: typeof UNASSIGN_TAG_FROM_ITEM;
  tag: Tag;
  item: ListItem;
};
export const unassignTagFromItem: (
  tag: Tag,
  item: ListItem
) => UnassignTagFromItemAction = (tag, item) => {
  return {
    type: UNASSIGN_TAG_FROM_ITEM,
    tag,
    item,
  };
};

export const TOGGLE_ITEM_STATUS = "TOGGLE_ITEM_STATUS";
export type ToggleItemStatusAction = {
  type: typeof TOGGLE_ITEM_STATUS;
  item: ListItem;
};
export const toggleItemStatus: (item: ListItem) => ToggleItemStatusAction = (
  item
) => {
  return {
    type: TOGGLE_ITEM_STATUS,
    item,
  };
};

export type ItemsState = ListItem[];
// const initialItem = {
//   id: "1",
//   url: "url",
//   date: "ted",
//   alreadyRead: false,
//   tags: [],
// };
export const initialItemsState: ItemsState = [];

export type ItemsActions =
  | AssignTagToItemAction
  | AddNewItemAction
  | UnassignTagFromItemAction
  | ToggleItemStatusAction;

export function itemsReducer(
  state = initialItemsState,
  action: ItemsActions
): ItemsState {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      return [...state, action.listItem];
    }
    case ASSIGN_TAG_TO_ITEM:
      const indexOfItem = state.findIndex((item) => item.id === action.item.id);
      if (
        action.item.tags.filter((tag) => tag.title === action.tag.title).length
      ) {
        return [...state];
      } else {
        return [
          ...state.slice(0, indexOfItem),
          {
            ...action.item,
            tags: [...action.item.tags, action.tag],
          },
          ...state.slice(indexOfItem + 1),
        ];
      }

    case UNASSIGN_TAG_FROM_ITEM: {
      if (
        action.item.tags.filter((tag) => tag.title === action.tag.title).length
      ) {
        const indexOfItem = state.findIndex(
          (item) => item.id === action.item.id
        );
        const indexOfTag = action.item.tags.findIndex(
          (tag) => tag.id === action.tag.id
        );
        return [
          ...state.slice(0, indexOfItem),
          {
            ...action.item,
            tags: [
              ...action.item.tags.slice(0, indexOfTag),
              ...action.item.tags.slice(indexOfTag + 1),
            ],
          },
          ...state.slice(indexOfItem + 1),
        ];
      } else {
        return [...state];
      }
    }
    case TOGGLE_ITEM_STATUS: {
      return [
        Object.assign({}, action.item, {
          alreadyRead: !action.item.alreadyRead,
        }),
      ];
    }
    default:
      return state;
  }
}

export const ItemsStore = configureStore({ reducer: itemsReducer });