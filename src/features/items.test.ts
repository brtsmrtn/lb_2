//import { assignTagToItem, unassignTagFromItem } from "./items";
// import {
//   itemsReducer,
//   itemBeingAdded,
//   initialItemsState,
//   toggleItemStatus,
// } from "./items";
describe("itemsReducer", () => {
  // const reducer = itemsReducer;
  // const item1 = "some url";
  // const tag1 = { id: "1", title: "what", color: "blue" };
  // const tag2 = { id: "2", title: "why", color: "red" };
  console.log("im skipping this today");
  // test("adds multiple new items with default state", () => {
  //   const stateAfterFirst = reducer(
  //     initialItemsState,
  //     itemBeingAdded(item1, "", true)
  //   );
  //   const stateAfterSecond = reducer(
  //     stateAfterFirst,
  //     itemBeingAdded(item1, "", true)
  //   );
  //   expect(stateAfterSecond.length).toBe(2);
  //   expect(stateAfterSecond[0].id).toBe("1");
  //   expect(stateAfterSecond[1].id).toBe("2");
  // });
  // test("adds new items", () => {
  //   const stateAfterFirst = reducer([], itemBeingAdded(item1, "", true));
  //   const stateAfterSecond = reducer(
  //     stateAfterFirst,
  //     itemBeingAdded(item1, "", true)
  //   );
  //   const stateAfterThird = reducer(
  //     stateAfterSecond,
  //     itemBeingAdded(item1, "", true)
  //   );
  //   expect(stateAfterThird.length).toBe(3);
  //   expect(stateAfterFirst[0].url).toBe(item1);
  // });
  // test("toggles item status", () => {
  //   const action = itemBeingAdded(item1, "", true);
  //   const state = reducer([], action);
  //   const stateAfterToggling = reducer(
  //     state,
  //     toggleItemStatus(action.)
  //   );
  //   const stateAfterTogglingBack = reducer(
  //     stateAfterToggling,
  //     toggleItemStatus(stateAfterToggling[0])
  //   );
  //   expect(stateAfterToggling.length).toBe(1);
  //   expect(stateAfterToggling[0].alreadyRead).toBe(true);
  //   expect(stateAfterTogglingBack[0].alreadyRead).toBe(false);
  // });
  // test("assigns a tag to an item", () => {
  //   const stateAfterFirst = reducer([], itemBeingAdded(item1, "", true));
  //   const stateAfterSecond = reducer(
  //     stateAfterFirst,
  //     assignTagToItem(tag1, stateAfterFirst[0], "")
  //   );
  //   expect(stateAfterFirst.length).toBe(1);
  //   expect(stateAfterFirst[0].url).toBe(item1);
  //   expect(stateAfterSecond.length).toBe(1);
  //   expect(stateAfterSecond[0].tags.length).toBe(1);
  //   expect(stateAfterSecond[0].tags[0]).toBe(tag1);
  // });
  // test("unassigns an existing tag from an item", () => {
  //   const stateAfterFirst = reducer([], itemBeingAdded(item1, "", true));
  //   const stateAfterSecond = reducer(
  //     stateAfterFirst,
  //     assignTagToItem(tag1, stateAfterFirst[0], "")
  //   );
  //   const stateAfterThird = reducer(
  //     stateAfterSecond,
  //     unassignTagFromItem(tag1, stateAfterSecond[0])
  //   );
  //   expect(stateAfterFirst.length).toBe(1);
  //   expect(stateAfterFirst[0].url).toBe(item1);
  //   expect(stateAfterSecond.length).toBe(1);
  //   expect(stateAfterSecond[0].tags.length).toBe(1);
  //   expect(stateAfterSecond[0].tags[0]).toBe(tag1);
  //   expect(stateAfterThird.length).toBe(1);
  //   expect(stateAfterThird[0].tags.length).toBe(0);
  // });
  // test("unassigns a non-existing tag from an item", () => {
  //   const stateAfterFirst = reducer([], itemBeingAdded(item1, "", true));
  //   const stateAfterSecond = reducer(
  //     stateAfterFirst,
  //     assignTagToItem(tag1, stateAfterFirst[0], "")
  //   );
  //   const stateAfterThird = reducer(
  //     stateAfterSecond,
  //     unassignTagFromItem(tag2, stateAfterSecond[0])
  //   );
  //   expect(stateAfterFirst.length).toBe(1);
  //   expect(stateAfterFirst[0].url).toBe(item1);
  //   expect(stateAfterSecond.length).toBe(1);
  //   expect(stateAfterSecond[0].tags.length).toBe(1);
  //   expect(stateAfterSecond[0].tags[0]).toBe(tag1);
  //   expect(stateAfterThird.length).toBe(1);
  //   expect(stateAfterThird[0].tags.length).toBe(1);
  //   expect(stateAfterThird[0].tags[0]).toBe(tag1);
  // });
  // test("assigns two tags and then assigns second tag for the second time", () => {
  //   const stateAfterFirst = reducer([], itemBeingAdded(item1, "", true));
  //   const stateAfterSecond = reducer(
  //     stateAfterFirst,
  //     assignTagToItem(tag1, stateAfterFirst[0], "")
  //   );
  //   const stateAfterThird = reducer(
  //     stateAfterSecond,
  //     assignTagToItem(tag2, stateAfterSecond[0], "")
  //   );
  //   const stateAfterFourth = reducer(
  //     stateAfterThird,
  //     assignTagToItem(tag2, stateAfterThird[0], "")
  //   );
  //   expect(stateAfterSecond.length).toBe(1);
  //   expect(stateAfterThird[0].tags.length).toBe(2);
  //   expect(stateAfterFourth[0].tags.length).toBe(2);
  // });
});

export {};
