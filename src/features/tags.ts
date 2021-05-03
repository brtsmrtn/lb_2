/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import { ref } from "../FirebaseContext";
import { Tag } from "../types/Tag";
import { COLORS } from "../utils/constants";
import { reload } from "./loading";
import { popSnack } from "./snack";
import { Item } from "../types/ListItem";
import { assignTag } from "./items";
import { addTab } from "./tabs";

export const LOAD_KNOWN_TAGS = "LOAD_KNOWN_TAGS";
export type LoadKnownTagsAction = {
  type: typeof LOAD_KNOWN_TAGS;
  tags: Tag[];
};
export const loadKnownTags: (tags: Tag[]) => LoadKnownTagsAction = (tags) => ({
  type: LOAD_KNOWN_TAGS,
  tags,
});

export const KNOWN_TAG_ADDED = "KNOWN_TAG_ADDED";
export type KnownTagAddedAction = {
  type: typeof KNOWN_TAG_ADDED;
  tag: Tag;
};
export const knownTagAdded: (tag: Tag) => KnownTagAddedAction = (tag) => {
  return {
    type: KNOWN_TAG_ADDED,
    tag,
  };
};

export type KnownTagsState = Tag[];
const initialKnownTagsState: KnownTagsState = [];

export type KnownTagsActions = KnownTagAddedAction | LoadKnownTagsAction;

export function knownTagsReducer(
  state = initialKnownTagsState,
  action: KnownTagsActions
): KnownTagsState {
  switch (action.type) {
    case LOAD_KNOWN_TAGS: {
      const loadedTags = [...action.tags];
      return loadedTags;
    }
    case KNOWN_TAG_ADDED: {
      return [...state, action.tag];
    }
    default:
      return state;
  }
}

export const TagsStore = configureStore({ reducer: knownTagsReducer });

export const addKnownTag = (
  tagTitle: string,
  uid: string,
  item: Item,
  knownTagsLength: number
) => (dispatch: any) => {
  dispatch(reload());
  const itemsRef = ref.child(`users/${uid}/knownTags`);
  const newTagRef = itemsRef.push();
  const firebaseTag: any = {
    title: tagTitle,
    color:
      COLORS[
        knownTagsLength + 1 >= COLORS.length
          ? COLORS.length - 1
          : knownTagsLength
      ],
  };
  newTagRef.set(firebaseTag, (error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      const storeKnownTag = {
        id: newTagRef.key,
        ...firebaseTag,
      };
      dispatch(knownTagAdded(storeKnownTag));
      dispatch(assignTag(storeKnownTag, item, uid));
      dispatch(addTab(storeKnownTag, uid));
      dispatch(popSnack(true, "success"));
    }
    dispatch(reload());
  });
};
