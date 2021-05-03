/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { configureStore } from "@reduxjs/toolkit";
import firebase, { provider, ref } from "../FirebaseContext";
import { Item } from "../types/ListItem";
import { FirebaseTab, Tab } from "../types/Tab";
import { Tag } from "../types/Tag";
import { UserData, User } from "../types/User";
import { loadItems } from "./items";
import { reload } from "./loading";
import { popSnack } from "./snack";
import { initialTabs, loadTabs, tabsSet } from "./tabs";
import { loadKnownTags } from "./tags";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export type LoginRequestAction = {
  type: typeof LOGIN_REQUEST;
};
export const loginRequest: () => LoginRequestAction = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS;
  user: User;
};
export const loginSuccess: (user: User) => LoginSuccessAction = (user) => {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
};

export const LOGIN_FAILURE = "LOGIN_FAILURE";
export type LoginFailureAction = {
  type: typeof LOGIN_FAILURE;
};
export const loginFailure: () => LoginFailureAction = () => {
  return {
    type: LOGIN_FAILURE,
  };
};

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export type LogoutRequestAction = {
  type: typeof LOGOUT_REQUEST;
};
export const logoutRequest: () => LogoutRequestAction = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export type LogoutSuccessAction = {
  type: typeof LOGOUT_SUCCESS;
};
export const logoutSuccess: () => LogoutSuccessAction = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export type LogoutFailureAction = {
  type: typeof LOGOUT_FAILURE;
};
export const logoutFailure: () => LogoutFailureAction = () => {
  return {
    type: LOGOUT_FAILURE,
  };
};

export const VERIFY_REQUEST = "VERIFY_REQUEST";
export type VerifyRequestAction = {
  type: typeof VERIFY_REQUEST;
};
export const verifyRequest: () => VerifyRequestAction = () => {
  return {
    type: VERIFY_REQUEST,
  };
};

export const VERIFY_SUCCESS = "VERIFY_SUCCESS";
export type VerifySuccessAction = {
  type: typeof VERIFY_SUCCESS;
};
export const verifySuccess: () => VerifySuccessAction = () => {
  return {
    type: VERIFY_SUCCESS,
  };
};

export type UserState = UserData;
const initialUserState: UserState = {
  isLoggingIn: false,
  isLoggingOut: false,
  isVerifying: false,
  loginError: false,
  logoutError: false,
  isAuthenticated: false,
  verifyingError: false,
  user: {
    uid: "",
    name: "",
  },
};
export type UserActions =
  | LoginRequestAction
  | LoginSuccessAction
  | LoginFailureAction
  | LogoutRequestAction
  | LogoutSuccessAction
  | LogoutFailureAction
  | VerifyRequestAction
  | VerifySuccessAction;

export function userReducer(
  state = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoggingIn: true,
        loginError: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: true,
        user: action.user,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        isAuthenticated: false,
        loginError: true,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoggingOut: true,
        logoutError: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isLoggingOut: false,
        isAuthenticated: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoggingOut: false,
        logoutError: true,
      };
    case VERIFY_REQUEST:
      return {
        ...state,
        isVerifying: true,
        verifyingError: false,
      };
    case VERIFY_SUCCESS:
      return {
        ...state,
        isVerifying: false,
      };
    default:
      return state;
  }
}

export const UserStore = configureStore({ reducer: userReducer });

export const loginUser = () => (dispatch: any) => {
  dispatch(loginRequest());
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((user: any) => {
      //console.log(user.additionalUserInfo);
      dispatch(loginSuccess({ name: user.displayName, uid: user.uid }));
    })
    .catch(() => {
      dispatch(loginFailure());
    });
};

export const logoutUser = () => (dispatch: any) => {
  dispatch(logoutRequest());
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch(reload());
      dispatch(logoutSuccess());
    })
    .catch(() => {
      dispatch(logoutFailure());
    });
};

export const verifyAuth = () => (dispatch: any) => {
  dispatch(verifyRequest());
  firebase.auth().onAuthStateChanged((user: any) => {
    if (user !== null) {
      dispatch(loginSuccess({ name: user.displayName, uid: user.uid }));
      dispatch(loadData(user));
    }
    dispatch(verifySuccess());
  });
};

export const loadData = (user: User) => (dispatch: any) => {
  const FirebaseItems: Item[] = [];
  const FirebaseTags: Tag[] = [];
  const FirebaseTabs: Tab[] = [];
  ref.child(`users/${user.uid}/`).on("child_added", (x) => {
    console.log(x);
  });
  ref.child(`users/${user.uid}/`).once("value", (snapshot) => {
    if (snapshot.exists()) {
      if (snapshot.val().constructor.name === "Object") {
        Object.keys(snapshot.val()).forEach((i, x) => {
          const node: any = Object.values(snapshot.val())[x];
          if (node) {
            Object.keys(node).forEach((y, z) => {
              if (i === "items") {
                const itemTags: Tag[] = [];
                const itemTagNode = Object.keys(node[y]).findIndex(
                  (k) => k === "tags"
                );
                if (itemTagNode > -1) {
                  const itemTagsNode: any = Object.values(node[y])[itemTagNode];
                  Object.keys(itemTagsNode).forEach((tkey) => {
                    itemTags.push({
                      id: tkey,
                      ...itemTagsNode[tkey],
                    });
                  });
                }
                FirebaseItems.push({
                  id: y,
                  alreadyRead: node[y]["alreadyRead"],
                  date: node[y]["date"],
                  url: node[y]["url"],
                  tags: itemTags,
                });
              } else if (i === "knownTags") {
                FirebaseTags.push({
                  id: z,
                  ...node[y],
                });
              } else if (i === "tabs") {
                FirebaseTabs.push({
                  id: z,
                  ...node[y],
                });
              }
            });
          }
        });
      } else {
        console.log(snapshot.val());
      }
      dispatch(loadItems(FirebaseItems));
      dispatch(loadKnownTags(FirebaseTags));
      dispatch(loadTabs(FirebaseTabs));
    } else {
      dispatch(setUser(user.uid));
    }
    dispatch(reload());
  });
};

export const setUser = (uid: string) => (dispatch: any) => {
  dispatch(reload());
  const itemsRef = ref.child(`users/${uid}/tabs/`);
  const firebaseTabs: FirebaseTab[] = [];
  initialTabs.map((tab) => {
    const newPostKey: any = itemsRef.push().key;
    firebaseTabs[newPostKey] = {
      title: tab.title,
      url: tab.url,
      predefined: tab.predefined,
      color: tab.color,
    };
  });
  itemsRef.set(firebaseTabs, (error) => {
    if (error) {
      dispatch(popSnack(true, "error"));
    } else {
      const storeTabs: Tab[] = [];
      Object.keys(firebaseTabs).forEach((tab: any) => {
        storeTabs.push({
          id: tab,
          ...firebaseTabs[tab],
        });
      });
      dispatch(tabsSet(storeTabs));
      dispatch(popSnack(true, "success"));
    }
    dispatch(reload());
  });
};
