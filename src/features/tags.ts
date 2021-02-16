import { configureStore } from "@reduxjs/toolkit";
import { Tag } from "../types/Tag";
import { COLORS } from "../utils/constants";
let tagsCounter = 0;
export const ADD_KNOWN_TAG = "ADD_KNOWN_TAG";
export type AddKnownTagAction = {
  type: typeof ADD_KNOWN_TAG;
  tag: Tag;
};
export const addKnownTag: (title: string) => AddKnownTagAction = (title) => {
  tagsCounter++;
  return {
    type: ADD_KNOWN_TAG,
    tag: {
      id: tagsCounter.toString(),
      title,
      color:
        COLORS[
          tagsCounter >= COLORS.length ? COLORS.length - 1 : tagsCounter - 1
        ],
    },
  };
};

export type KnownTagsState = Tag[];
const initialKnownTagsState: KnownTagsState = [];

export type KnownTagsActions = AddKnownTagAction;

export function knownTagsReducer(
  state = initialKnownTagsState,
  action: KnownTagsActions
): KnownTagsState {
  switch (action.type) {
    case ADD_KNOWN_TAG: {
      return [...state, action.tag];
    }
    default:
      return state;
  }
}

export const TagsStore = configureStore({ reducer: knownTagsReducer });
