import { configureStore } from "@reduxjs/toolkit";
import { Tag } from "../types/Tag";
import { COLORS } from "../utils/constants";

export const ADD_KNOWN_TAG = "ADD_KNOWN_TAG";
export type UpdateKnownTagsActionType = {
  type: typeof ADD_KNOWN_TAG;
  payload: string;
};
export const updateKnownTags: (
  tagTitle: string
) => UpdateKnownTagsActionType = (tagTitle) => {
  return {
    type: ADD_KNOWN_TAG,
    payload: tagTitle,
  };
};

export type KnownTagsState = Tag[];
const initialKnownTagsState: KnownTagsState = [];

export type KnownTagsActions = UpdateKnownTagsActionType;

export function knownTagsReducer(
  state = initialKnownTagsState,
  action: KnownTagsActions
): KnownTagsState {
  switch (action.type) {
    case ADD_KNOWN_TAG: {
      const tagId = state.length + 1;
      const tagColor =
        COLORS[tagId >= COLORS.length ? COLORS.length - 1 : tagId - 1];
      const newTag = {
        id: tagId.toString(),
        title: action.payload,
        color: tagColor,
      };
      return [...state, newTag];
    }
    default:
      return state;
  }
}

export const TagsStore = configureStore({ reducer: knownTagsReducer });
