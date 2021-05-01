/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import { ref } from "../FirebaseContext";
import { ItemType } from "../types/ListItem";
import { TagType } from "../types/Tag";
import { reload } from "./loading";
import { popSnack } from "./snack";

export const LOAD_ITEMS = "LOAD_ITEMS";
export type LoadItemsAction = {
  type: typeof LOAD_ITEMS;
  items: ItemType[];
};
export const loadItems: (items: ItemType[]) => LoadItemsAction = (items) => ({
  type: LOAD_ITEMS,
  items,
});

export const ITEM_DELETED = "ITEM_DELETED";
export type ItemDeletedAction = {
  type: typeof ITEM_DELETED;
  item: ItemType;
};

export const itemDeleted: (item: ItemType) => ItemDeletedAction = (item) => {
  return {
    type: ITEM_DELETED,
    item,
  };
};

export const ITEM_ADDED = "ITEM_ADDED";
export type ItemAddedAction = {
  type: typeof ITEM_ADDED;
  item: ItemType;
};
export const itemAdded: (item: ItemType) => ItemAddedAction = (item) => {
  return {
    type: ITEM_ADDED,
    item,
  };
};

export const TAG_ASSIGNED = "TAG_ASSIGNED";
export type TagAssignedAction = {
  type: typeof TAG_ASSIGNED;
  item: ItemType;
};
export const tagAssigned: (item: ItemType) => TagAssignedAction = (item) => {
  return {
    type: TAG_ASSIGNED,
    item,
  };
};

export const TAG_UNASSIGNED = "TAG_UNASSIGNED";
export type TagUnassignedAction = {
  type: typeof TAG_UNASSIGNED;
  item: ItemType;
};
export const tagUnassigned: (item: ItemType) => TagUnassignedAction = (
  item
) => {
  return {
    type: TAG_UNASSIGNED,
    item,
  };
};

export const ITEM_TOGGLED = "ITEM_TOGGLED";
export type ItemToggledAction = {
  type: typeof ITEM_TOGGLED;
  item: ItemType;
};
export const toggleSaved: (item: ItemType) => ItemToggledAction = (item) => {
  return {
    type: ITEM_TOGGLED,
    item,
  };
};

export type ItemsState = ItemType[];
export const initialItemsState: ItemsState = [];

export type ItemsActions =
  | TagAssignedAction
  | ItemDeletedAction
  | TagUnassignedAction
  | ItemToggledAction
  | LoadItemsAction
  | ItemAddedAction;

export function itemsReducer(
  state = initialItemsState,
  action: ItemsActions
): ItemsState {
  switch (action.type) {
    case LOAD_ITEMS: {
      const loadedItems = [...action.items].map((e) => ({
        ...e,
        tags: e.tags ? e.tags : [],
        itemBeingAdded: false,
        itemBeingSaved: false,
        itemSaved: true,
      }));
      return loadedItems;
    }
    case ITEM_ADDED: {
      return [...state, action.item];
    }
    case ITEM_DELETED: {
      const deletedItemIndex = state.findIndex(
        (it) => it.id === action.item.id
      );
      return [...state.slice(0, deletedItemIndex)];
    }
    case TAG_ASSIGNED: {
      const indexOfItem = state.findIndex((it) => it.id === action.item.id);
      return [
        ...state.slice(0, indexOfItem),
        action.item,
        ...state.slice(indexOfItem + 1),
      ];
    }
    case TAG_UNASSIGNED: {
      const indexOfItem = state.findIndex((it) => it.id === action.item.id);
      return [
        ...state.slice(0, indexOfItem),
        action.item,
        ...state.slice(indexOfItem + 1),
      ];
    }
    case ITEM_TOGGLED: {
      const indexOfItem = state.findIndex((it) => it.id === action.item.id);
      return [
        ...state.slice(0, indexOfItem),
        action.item,
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

export const addItem = (uid: string, url: string) => (dispatch: any) => {
  dispatch(reload(true));
  const currentDate = new Date().getTime().toString();
  const itemsRef = ref.child(`users/${uid}/items`);
  const newItemRef = itemsRef.push();
  const firebaseItem: any = {
    url,
    date: currentDate,
    alreadyRead: false,
  };
  newItemRef.set(firebaseItem, (error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      const storeItem = {
        id: newItemRef.key,
        tags: [],
        itemBeingAdded: true,
        itemBeingSaved: false,
        itemSaved: false,
        ...firebaseItem,
      };
      dispatch(itemAdded(storeItem));
      dispatch(popSnack(true, "success"));
    }
    dispatch(reload(false));
  });
};

export const toggleItem = (uid: string, item: ItemType) => (dispatch: any) => {
  const itemsRef = ref.child(`users/${uid}/items/${item.id}/alreadyRead/`);
  const storeItem = { ...item, alreadyRead: !item.alreadyRead };
  itemsRef.set(!item.alreadyRead, (error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      dispatch(toggleSaved(storeItem));
      dispatch(popSnack(true, "success"));
    }
  });
};

export const deleteItem = (uid: string, item: ItemType) => (dispatch: any) => {
  dispatch(reload(true));
  const itemsRef = ref.child(`users/${uid}/items/${item.id}`);
  itemsRef.remove((error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      dispatch(itemDeleted(item));
      dispatch(popSnack(true, "success"));
    }
    dispatch(reload(false));
  });
};

export const assignTag = (tag: TagType, item: ItemType, uid: string) => (
  dispatch: any
) => {
  const itemsRef = ref.child(`users/${uid}/items/${item.id}/tags/${tag.id}`);
  const storeItem = { ...item, tags: [...item.tags, tag] };
  itemsRef.set({ title: tag.title, color: tag.color }, (error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      dispatch(tagAssigned(storeItem));
      dispatch(popSnack(true, "success"));
    }
  });
};

export const unassignTag = (tag: TagType, item: ItemType, uid: string) => (
  dispatch: any
) => {
  const itemsRef = ref.child(`users/${uid}/items/${item.id}/tags/${tag.id}`);
  const tagIndex = item.tags.findIndex((itemTag) => itemTag.id === tag.id);
  const storeItem = {
    ...item,
    tags: [...item.tags.slice(0, tagIndex), ...item.tags.slice(tagIndex + 1)],
  };

  itemsRef.remove((error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      dispatch(tagUnassigned(storeItem));
      dispatch(popSnack(true, "success"));
    }
  });
};
