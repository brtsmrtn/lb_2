import { configureStore } from "@reduxjs/toolkit";

export const LOADING = "LOADING";
export type LoadingAction = {
  type: typeof LOADING;
};
export const reload: () => LoadingAction = () => ({
  type: LOADING,
});

export type LoadingState = { isVisible: boolean };
const initialLoadingState: LoadingState = { isVisible: true };

export type LoadingActions = LoadingAction;

export function loadingReducer(
  state = initialLoadingState,
  action: LoadingActions
): LoadingState {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isVisible: !state.isVisible,
      };
    default:
      return state;
  }
}

export const LoadingStore = configureStore({ reducer: loadingReducer });
