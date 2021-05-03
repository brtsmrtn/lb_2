import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ApplicationState } from "../app/store";
import { Item } from "../types/ListItem";
import { Tag } from "../types/Tag";
import TagList from "./TagList";
import { errorTags, ErrorTagMessage } from "../functions/errorMessages";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import { addKnownTag } from "../features/tags";
import { assignTag } from "../features/items";

export type TagButtonProps = {
  item: Item;
};
export const TagButton: (props: TagButtonProps) => JSX.Element = ({
  item,
}: TagButtonProps) => {
  const dispatch = useDispatch();
  const { userData, knownTags } = useSelector(
    (state: ApplicationState) => state
  );
  const [dialogOpen, setDialogOpen] = useState(false);
  const [errorTag, setErrorTag] = useState<ErrorTagMessage>(undefined);
  const isTagNew = (tagTitle: string, tags: Tag[]) =>
    tags.find((tag) => tag.title === tagTitle);
  const onChangeAutocomplete = (tag: Tag[], reason: string, item: Item) => {
    const targetTag = tag[tag.length - 1];
    if (reason === "select-option") {
      const tagAlreadyAssigned = isTagNew(targetTag.title, item.tags);
      if (tagAlreadyAssigned) {
        setErrorTag(errorTags.submit);
      } else {
        dispatch(assignTag(targetTag, item, userData.user.uid));
        setErrorTag(errorTags.empty);
      }
    }
  };
  const onChangeTextField = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    item: Item
  ) => {
    const targetTag = e.target as HTMLTextAreaElement;
    const tagTitle = targetTag.value;
    if (tagTitle) {
      const tagAlreadyAssigned = isTagNew(tagTitle, item.tags);
      if (tagAlreadyAssigned) {
        setErrorTag(errorTags.assigned);
      } else {
        setErrorTag(errorTags.submit);
      }
    } else {
      setErrorTag(errorTags.empty);
    }
  };
  const onKeyDownTextField = (
    e: React.KeyboardEvent<HTMLDivElement>,
    item: Item
  ) => {
    const tag = e.target as HTMLTextAreaElement;
    const tagTitle = tag.value;
    if (e.key === "Enter" && tagTitle) {
      const tagAlreadyAssigned = isTagNew(tagTitle, item.tags);
      const tagAlreadyKnown = isTagNew(tagTitle, knownTags);
      if (!tagAlreadyAssigned) {
        if (tagAlreadyKnown) {
          dispatch(assignTag(tagAlreadyKnown, item, userData.user.uid));
          setErrorTag(errorTags.empty);
        } else {
          dispatch(
            addKnownTag(tagTitle, userData.user.uid, item, knownTags.length)
          );
          setErrorTag(errorTags.empty);
        }
      }
    }
  };
  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => setDialogOpen(true)}
      >
        Add tag
      </Button>
      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        aria-labelledby={"form-dialog-title"}
      >
        <DialogContent>
          <DialogContentText
            style={{
              color: "black",
            }}
          >
            Add new tag or pick any from the list.
          </DialogContentText>
          <DialogContentText
            style={{
              fontStyle: "italic",
              fontSize: 12,
              height: "20px",
            }}
          >
            {errorTag}
          </DialogContentText>
          <Autocomplete
            style={{
              marginBottom: "120px",
            }}
            options={knownTags}
            getOptionLabel={(option) => option.title as string}
            getOptionSelected={(option, value) => option.title === value.title}
            value={item.tags}
            clearOnBlur={false}
            multiple
            disableClearable
            id="tags-outlined"
            filterSelectedOptions
            selectOnFocus
            autoComplete
            onChange={(_, value: Tag[] | undefined, reason) => {
              if (value) {
                onChangeAutocomplete(value, reason, item);
              }
            }}
            ListboxProps={{
              style: {
                maxHeight: "100px",
              },
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="outlined"
                autoFocus
                onChange={(e) => onChangeTextField(e, item)}
                onKeyDown={(e) => onKeyDownTextField(e, item)}
              />
            )}
            renderTags={() => <TagList editable={true} item={item} />}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
