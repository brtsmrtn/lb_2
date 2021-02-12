import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Tag } from "../../types/Tag";
import { COLORS } from "../../utils/constants";
import { AppThunk } from "../../app/store";
import { ListItem } from "../../types/ListItem";
import { assignTagToItem, getItem, getItems } from "./itemsSlice";
const tagsInitialState: Tag[] = [
  {
    id: 1,
    title: "zkusebni",
    color: "#ec0b39",
  },
  {
    id: 2,
    title: "zkusebni2",
    color: "#ec0b39",
  },
];

const knownTags = createSlice({
  name: "knownTags",
  initialState: tagsInitialState, //tagsInitialState
  reducers: {
    updateKnownTags(
      state,
      { payload }: PayloadAction<{ item: ListItem; targetTagTitle: string }>
    ) {
      const tagTitle = payload.targetTagTitle;
      const tagFound = state.find((tag) => tag.title === tagTitle);
      let newTag = undefined;
      if (!tagFound) {
        const tagId = state.length + 1;
        const tagColor =
          COLORS[tagId >= COLORS.length ? COLORS.length - 1 : tagId - 1];
        newTag = {
          id: tagId,
          title: tagTitle,
          color: tagColor,
        };
        state.push(newTag);
        // const doso = updateAndThenGet(payload.item, newTag);
        // console.log(doso);
      }
      // if (tagIsNew) {
      //    tagAdded(item, tagIsNew);
      //    setErrorTag(errorTags.empty);
      // } else {
      //    setErrorTag(errorTags.wrong);
      // }
    },
  },
});

export const { updateKnownTags } = knownTags.actions;

export default knownTags.reducer;
