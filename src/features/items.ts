import { configureStore } from "@reduxjs/toolkit";
import { ItemType } from "../types/ListItem";
import { TagType } from "../types/Tag";
import { linkBiscuitPrefix } from "../utils/constants";
let itemsCounter = 0;

export const LOAD_ITEMS = "LOAD_ITEMS";
export type LoadItemsAction = {
  type: typeof LOAD_ITEMS;
};
export const loadItems: () => LoadItemsAction = () => ({ type: LOAD_ITEMS });

export const DELETE_ITEM = "DELETE_ITEM";
export type DeleteItemAction = {
  type: typeof DELETE_ITEM;
  listItem: ItemType;
};

export const deleteItem: (item: ItemType) => DeleteItemAction = (item) => {
  return {
    type: DELETE_ITEM,
    listItem: item,
  };
};
export const ADD_NEW_ITEM = "ADD_NEW_ITEM";
export type AddNewItemAction = {
  type: typeof ADD_NEW_ITEM;
  listItem: ItemType;
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
  item: ItemType;
  tag: TagType;
};
export const assignTagToItem: (
  tag: TagType,
  item: ItemType
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
  tag: TagType;
  item: ItemType;
};
export const unassignTagFromItem: (
  tag: TagType,
  item: ItemType
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
  item: ItemType;
};
export const toggleItemStatus: (item: ItemType) => ToggleItemStatusAction = (
  item
) => {
  return {
    type: TOGGLE_ITEM_STATUS,
    item,
  };
};

export type ItemsState = ItemType[];
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
  | DeleteItemAction
  | AddNewItemAction
  | UnassignTagFromItemAction
  | ToggleItemStatusAction
  | LoadItemsAction;

export function itemsReducer(
  state = initialItemsState,
  action: ItemsActions
): ItemsState {
  switch (action.type) {
    case LOAD_ITEMS: {
      const loadedItems = localStorage.getItem(`${linkBiscuitPrefix}_items`);
      if (loadedItems) {
        const parsedItems: ItemType[] = JSON.parse(loadedItems);
        itemsCounter = Math.max(...parsedItems.map((item) => Number(item.id)));
        return parsedItems;
      } else {
        return [];
      }
    }
    case ADD_NEW_ITEM: {
      return [...state, action.listItem];
    }
    case DELETE_ITEM: {
      const deletedItemIndex = state.findIndex(
        (listItem) => listItem.id === action.listItem.id
      );
      return [...state.slice(0, deletedItemIndex)];
    }
    case ASSIGN_TAG_TO_ITEM:
      const { item, tag } = action;
      const indexOfItem = state.findIndex((it) => it.id === item.id);
      if (item.tags.filter((t) => t.title === tag.title).length) {
        return [...state];
      } else {
        return [
          ...state.slice(0, indexOfItem),
          {
            ...item,
            tags: [...item.tags, tag],
          },
          ...state.slice(indexOfItem + 1),
        ];
      }

    case UNASSIGN_TAG_FROM_ITEM: {
      const { item, tag } = action;
      const tagIndex = item.tags.findIndex((itemTag) => itemTag.id === tag.id);
      const modifiedTags = [
        ...item.tags.slice(0, tagIndex),
        ...item.tags.slice(tagIndex + 1),
      ];
      const modifiedItem = { ...item, tags: modifiedTags };
      const modifiedItemIndex = state.findIndex(
        (listItem) => listItem.id === modifiedItem.id
      );
      return [
        ...state.slice(0, modifiedItemIndex),
        modifiedItem,
        ...state.slice(modifiedItemIndex + 1),
      ];
    }
    case TOGGLE_ITEM_STATUS: {
      const { item } = action;
      const indexOfItem = state.findIndex((it) => it.id === item.id);
      return [
        ...state.slice(0, indexOfItem),
        { ...item, alreadyRead: !item.alreadyRead },
        ...state.slice(indexOfItem + 1),
      ];
    }
    default:
      return state;
  }
}

export const ItemsStore = configureStore({
  reducer: itemsReducer,
});
