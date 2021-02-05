import React, { useState } from "react";
import { Tag } from "../types/Tag";
import { ListItem } from "../types/ListItem";
import TagList from "./TagList";
import { errorTags } from "../functions/errorMessages";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";

export type TagButtonProps = {
  item: ListItem;
  knownTags: Tag[];
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
  updateKnownTags: (title: string) => Tag | undefined;
};
export const TagButton: (props: TagButtonProps) => JSX.Element = ({
  item,
  knownTags,
  tagAdded,
  tagDeleted,
  updateKnownTags,
}: TagButtonProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [errorTag, setErrorTag] = useState("");
  const isTagNew = function (tagTitle: string, tags: Tag[]): Tag | undefined {
    return tags.find((t) => t.title === tagTitle);
  };
  const onChangeAutocomplete = (
    value: Tag[],
    reason: string,
    item: ListItem
  ) => {
    const targetTag = value[value.length - 1];
    if (reason === "select-option") {
      const tagAlreadyAssigned = isTagNew(targetTag.title, item.tags);
      if (tagAlreadyAssigned) {
        () => setErrorTag(errorTags.submit);
      } else {
        tagAdded(item, targetTag);
        setErrorTag(errorTags.empty);
      }
    }
  };
  const onChangeTextField = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>,
    item: ListItem
  ) => {
    const targetTag = e.target as HTMLTextAreaElement;
    const targetTagTitle = targetTag.value;
    if (targetTagTitle) {
      const tagAlreadyAssigned = isTagNew(targetTagTitle, item.tags);
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
    item: ListItem
  ) => {
    const targetTag = e.target as HTMLTextAreaElement;
    const targetTagTitle = targetTag.value;
    if (e.key === "Enter" && targetTagTitle) {
      const tagAlreadyAssigned = isTagNew(targetTagTitle, item.tags);
      const tagAlreadyKnown = isTagNew(targetTagTitle, knownTags);
      if (!tagAlreadyAssigned) {
        if (tagAlreadyKnown) {
          tagAdded(item, tagAlreadyKnown);
          setErrorTag(errorTags.empty);
        } else {
          const tagIsNew = updateKnownTags(targetTagTitle);
          if (tagIsNew) {
            tagAdded(item, tagIsNew);
            setErrorTag(errorTags.empty);
          } else {
            setErrorTag(errorTags.wrong);
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
              marginTop: "20px",
            }}
          >
            {errorTag ? errorTag : <br />}
          </DialogContentText>
          <Autocomplete
            style={{
              marginBottom: "120px",
            }}
            options={knownTags}
            getOptionLabel={(option) => option.title}
            value={item.tags}
            clearOnBlur={false}
            multiple
            disableClearable
            id="tags-outlined"
            filterSelectedOptions
            selectOnFocus
            autoComplete
            onChange={(_, value, reason) =>
              onChangeAutocomplete(value, reason, item)
            }
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
            renderTags={() => (
              <TagList editable={true} item={item} tagDeleted={tagDeleted} />
            )}
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
