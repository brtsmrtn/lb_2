import { configureStore } from "@reduxjs/toolkit";
export const SET_URL = "SET_URL";
export type SetUrlAction = {
  type: typeof SET_URL;
  url: string;
};
export const setUrl: (url: string) => SetUrlAction = (url) => {
  return {
    type: SET_URL,
    url,
  };
};

export type UrlInputState = string;
const initialUrlState: UrlInputState = "";

export type UrlInputActions = SetUrlAction;

export function urlInputReducer(
  state = initialUrlState,
  action: UrlInputActions
): UrlInputState {
  switch (action.type) {
    case SET_URL: {
      return action.url;
    }
    default:
      return state;
  }
}

export const UrlInputStore = configureStore({ reducer: urlInputReducer });
