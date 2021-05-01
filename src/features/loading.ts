import { configureStore } from "@reduxjs/toolkit";

export const LOADING = "LOADING";
export type LoadingAction = {
  type: typeof LOADING;
  load: boolean;
};
export const reload: (load: boolean) => LoadingAction = (load) => ({
  type: LOADING,
  load,
});

export type LoadingState = { load: boolean };
const initialLoadingState: LoadingState = { load: true };

export type LoadingActions = LoadingAction;

export function loadingReducer(
  state = initialLoadingState,
  action: LoadingActions
): LoadingState {
  switch (action.type) {
    case LOADING:
      return { load: action.load };
    default:
      return state;
  }
}

export const LoadingStore = configureStore({ reducer: loadingReducer });
