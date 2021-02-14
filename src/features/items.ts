import { configureStore } from "@reduxjs/toolkit";
import { ListItem } from "../types/ListItem";
import { Tag } from "../types/Tag";

export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export type AddNewItemActionType = {
  type: typeof ADD_NEW_ITEM;
  payload: ListItem;
};
export const addNewItem: (url: string) => AddNewItemActionType = (url) => {
  return {
    type: ADD_NEW_ITEM,
    payload: {
      id: (ItemsStore.getState().length + 1).toString(),
      url: url,
      date: new Date().getTime().toString(),
      alreadyRead: false,
      tags: [],
    },
  };
};

export const ASSIGN_TAG_TO_ITEM = "ASSIGN_TAG_TO_ITEM";
export type AssignTagToItemActionType = {
  type: typeof ASSIGN_TAG_TO_ITEM;
  payload: ListItem;
};
export const assignTagToItem: (
  tag: Tag,
  item: ListItem
) => AssignTagToItemActionType = (tag, item) => {
  return {
    type: ASSIGN_TAG_TO_ITEM,
    payload: {
      ...item,
      tags: [...item.tags, tag],
    },
  };
};

export const UNASSIGN_TAG_FROM_ITEM = "UNASSIGN_TAG_FROM_ITEM";
export type UnassignTagFromItemActionType = {
  type: typeof UNASSIGN_TAG_FROM_ITEM;
  payload: { tag: Tag; item: ListItem };
};
export const unassignTagFromItem: (
  tag: Tag,
  item: ListItem
) => UnassignTagFromItemActionType = (tag, item) => {
  return {
    type: UNASSIGN_TAG_FROM_ITEM,
    payload: { tag: tag, item: item },
  };
};

export const CHANGE_ITEM_STATUS = "CHANGE_ITEM_STATUS";
export type ChangeItemStatusActionType = {
  type: typeof CHANGE_ITEM_STATUS;
  payload: ListItem;
};
export const changeItemStatus: (
  item: ListItem
) => ChangeItemStatusActionType = (item) => {
  return {
    type: CHANGE_ITEM_STATUS,
    payload: item,
  };
};

export type ItemsState = ListItem[];
const initialItemsState: ItemsState = [
  { id: "1", url: "url", date: "ted", alreadyRead: false, tags: [] },
];

export type ItemsActions =
  | AssignTagToItemActionType
  | AddNewItemActionType
  | UnassignTagFromItemActionType
  | ChangeItemStatusActionType;

export function itemsReducer(
  state = initialItemsState,
  action: ItemsActions
): ItemsState {
  switch (action.type) {
    case ADD_NEW_ITEM: {
      return [...state, action.payload];
    }
    case ASSIGN_TAG_TO_ITEM: {
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return Object.assign({}, item, {
            tags: action.payload.tags,
          });
        }
        return item;
      });
    }
    case UNASSIGN_TAG_FROM_ITEM: {
      const newItems = [...state];
      const newListItem = {
        ...action.payload.item,
        tags: [...action.payload.item.tags],
      };
      newListItem.tags.splice(
        newListItem.tags.findIndex((tag) => tag.id === action.payload.tag.id),
        1
      );
      newItems.splice(
        newItems.findIndex((item) => item.id === newListItem.id),
        1,
        newListItem
      );
      return newItems;
    }
    case CHANGE_ITEM_STATUS: {
      const newItems = [...state];
      const newListItem = {
        ...action.payload,
        alreadyRead: !action.payload.alreadyRead,
      };
      newItems.splice(
        newItems.findIndex((item) => item.id === action.payload.id),
        1,
        newListItem
      );
      return newItems;
    }
    default:
      return state;
  }
}

export const ItemsStore = configureStore({ reducer: itemsReducer });
