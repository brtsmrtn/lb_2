import { configureStore } from "@reduxjs/toolkit";
import { Tag } from "../types/Tag";
import { COLORS, linkBiscuitPrefix } from "../utils/constants";
let tagsCounter = 0;

export const LOAD_KNOWN_TAGS = "LOAD_KNOWN_TAGS";
export type LoadKnownTagsAction = {
  type: typeof LOAD_KNOWN_TAGS;
};
export const loadKnownTags: () => LoadKnownTagsAction = () => ({
  type: LOAD_KNOWN_TAGS,
});

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

export type KnownTagsActions = AddKnownTagAction | LoadKnownTagsAction;

export function knownTagsReducer(
  state = initialKnownTagsState,
  action: KnownTagsActions
): KnownTagsState {
  switch (action.type) {
    case LOAD_KNOWN_TAGS: {
      const loadedTags = localStorage.getItem(`${linkBiscuitPrefix}_knownTags`);
      if (loadedTags) {
        const parsedTags: Tag[] = JSON.parse(loadedTags);
        tagsCounter = Math.max(...parsedTags.map((tag) => Number(tag.id)));
        return parsedTags;
      } else {
        return [];
      }
    }
    case ADD_KNOWN_TAG: {
      return [...state, action.tag];
    }
    default:
      return state;
  }
}

export const TagsStore = configureStore({ reducer: knownTagsReducer });
