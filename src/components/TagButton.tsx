import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ApplicationState } from "../app/store";
import { ItemType } from "../types/ListItem";
import { TagType } from "../types/Tag";
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
import { assignTagToItem } from "../features/items";
import { addNewTab } from "../features/tabs";

export type TagButtonProps = {
  item: ItemType;
};
export const TagButton: (props: TagButtonProps) => JSX.Element = ({
  item,
}: TagButtonProps) => {
  const dispatch = useDispatch();
  const knownTags = useSelector((state: ApplicationState) => state.knownTags);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [errorTag, setErrorTag] = useState<ErrorTagMessage>(undefined);
  const isTagNew = (tagTitle: string, tags: TagType[]) =>
    tags.find((tag) => tag.title === tagTitle);
  const onChangeAutocomplete = (
    tag: TagType[],
    reason: string,
    item: ItemType
  ) => {
    const targetTag = tag[tag.length - 1];
    if (reason === "select-option") {
      const tagAlreadyAssigned = isTagNew(targetTag.title, item.tags);
      if (tagAlreadyAssigned) {
        setErrorTag(errorTags.submit);
      } else {
        dispatch(assignTagToItem(targetTag, item));
        setErrorTag(errorTags.empty);
      }
    }
  };
  const onChangeTextField = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    item: ItemType
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
    item: ItemType
  ) => {
    const tag = e.target as HTMLTextAreaElement;
    const tagTitle = tag.value;
    if (e.key === "Enter" && tagTitle) {
      const tagAlreadyAssigned = isTagNew(tagTitle, item.tags);
      const tagAlreadyKnown = isTagNew(tagTitle, knownTags);
      if (!tagAlreadyAssigned) {
        if (tagAlreadyKnown) {
          dispatch(assignTagToItem(tagAlreadyKnown, item));
          setErrorTag(errorTags.empty);
        } else {
          const updateKnownTagsAction = addKnownTag(tagTitle);
          dispatch(updateKnownTagsAction);
          const tagAlreadyAssigned = isTagNew(tagTitle, item.tags);
          if (tagAlreadyAssigned) {
            setErrorTag(errorTags.assigned);
          } else {
            dispatch(addNewTab(updateKnownTagsAction.tag));
            dispatch(assignTagToItem(updateKnownTagsAction.tag, item));
            setErrorTag(errorTags.empty);
          }
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
            onChange={(_, value: TagType[] | undefined, reason) => {
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
