import { configureStore } from "@reduxjs/toolkit";

export const SNACK = "SNACK";
export type SnackAction = {
  type: typeof SNACK;
  snack: boolean;
  severity: "success" | "error";
};
export const popSnack: (
  snack: boolean,
  severity: "success" | "error"
) => SnackAction = (snack, severity) => ({
  type: SNACK,
  snack,
  severity,
});

export type SnackState = { snack: boolean; severity: "success" | "error" };
const initialSnackState: SnackState = { snack: false, severity: "success" };

export type SnackActions = SnackAction;

export function snackReducer(
  state = initialSnackState,
  action: SnackActions
): SnackState {
  switch (action.type) {
    case SNACK:
      return { snack: action.snack, severity: action.severity };
    default:
      return state;
  }
}

export const SnackStore = configureStore({ reducer: snackReducer });
