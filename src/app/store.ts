import {
  KnownTagsActions,
  knownTagsReducer,
  KnownTagsState,
} from "../features/tags";
import { ItemsActions, itemsReducer, ItemsState } from "../features/items";
import {
  UrlInputActions,
  urlInputReducer,
  UrlInputState,
} from "../features/urlInput";
import { TabsActions, tabsReducer, TabsState } from "../features/tabs";
import { LoadingState, loadingReducer } from "../features/loading";
import {
  UserState,
  userReducer,
  verifyAuth,
  UserActions,
} from "../features/user";
import { configureStore } from "@reduxjs/toolkit";
import { SnackState, snackReducer, SnackActions } from "../features/snack";
export type ApplicationState = {
  knownTags: KnownTagsState;
  items: ItemsState;
  urlInput: UrlInputState;
  tabs: TabsState;
  userData: UserState;
  loading: LoadingState;
  snack: SnackState;
};
const store = configureStore<
  ApplicationState,
  KnownTagsActions &
    ItemsActions &
    UrlInputActions &
    TabsActions &
    UserActions &
    SnackActions
>({
  reducer: {
    knownTags: knownTagsReducer,
    items: itemsReducer,
    urlInput: urlInputReducer,
    tabs: tabsReducer,
    userData: userReducer,
    loading: loadingReducer,
    snack: snackReducer,
  },
});
store.dispatch(verifyAuth());

export default store;

// useEffect(() => {
//   const FirebaseItems: ItemType[] = [];
//   const FirebaseTags: TagType[] = [];
//   const FirebaseTabs: TabType[] = [];
//   const ItemsListener = ref
//     .child(`users/${userData.user.uid}/`)
//     .on("value", (snapshot) => {
//       if (snapshot.exists()) {
//         if (snapshot.val().constructor.name === "Object") {
//           Object.keys(snapshot.val()).forEach((i, x) => {
//             const node: any = Object.values(snapshot.val())[x];
//             if (node) {
//               Object.keys(node).forEach((y, z) => {
//                 if (i === "items") {
//                   const itemTags: TagType[] = [];
//                   const itemTagNode = Object.keys(node[y]).findIndex(
//                     (k) => k === "tags"
//                   );
//                   if (itemTagNode > -1) {
//                     const itemTagsNode: any = Object.values(node[y])[
//                       itemTagNode
//                     ];
//                     Object.keys(itemTagsNode).forEach((tkey) => {
//                       itemTags.push({
//                         id: tkey,
//                         ...itemTagsNode[tkey],
//                       });
//                     });
//                   }
//                   FirebaseItems.push({
//                     id: z,
//                     alreadyRead: node[y]["alreadyRead"],
//                     date: node[y]["date"],
//                     url: node[y]["url"],
//                     tags: itemTags,
//                   });
//                 } else if (i === "knownTags") {
//                   FirebaseTags.push({
//                     id: z,
//                     ...node[y],
//                   });
//                 } else if (i === "tabs") {
//                   FirebaseTabs.push({
//                     id: z,
//                     ...node[y],
//                   });
//                 }
//               });
//             }
//           });
//         }
//         if (!userData.userDataLoaded) {
//           dispatch(loadItems(FirebaseItems));
//           dispatch(loadKnownTags(FirebaseTags));
//           dispatch(loadTabs(FirebaseTabs));
//           dispatch(userDataLoaded());
//           dispatch(reload(false));
//         } else {
//           console.log("jsem tu znova");
//         }
//       } else {
//         dispatch(setUser(userData.user.uid));
//         dispatch(userDataLoaded());
//       }
//     });
//   return () =>
//     ref.child(`users/${userData.user.uid}`).off("value", ItemsListener);
// });
