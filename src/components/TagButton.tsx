import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Tag } from "../types/Tag";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { ListItem } from "../types/ListItem";
import Chip from "@material-ui/core/Chip";
import { TagResponse } from "../types/TagResponse";

export type TagButtonProps = {
  item: ListItem;
  availableTags: Tag[];
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
  updateAvailableTags: (title: string) => Promise<TagResponse>;
};
export class TagButton extends React.Component<
  TagButtonProps,
  { dialogOpen: boolean; assignedTags: Tag[]; helperText: string }
> {
  constructor(props: TagButtonProps) {
    super(props);
    this.state = {
      dialogOpen: false,
      assignedTags: props.item.tags,
      helperText: "",
    };
  }
  render(): JSX.Element {
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => this.setState({ dialogOpen: true })}
        >
          Add tag
        </Button>
        <Dialog
          open={this.state.dialogOpen}
          onClose={() => this.setState({ dialogOpen: false })}
          aria-labelledby={"form-dialog-title"}
        >
          <DialogTitle id={"form-dialog-title"}>Add tags</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add new tag or pick one from the list.
            </DialogContentText>
            <Autocomplete
              fullWidth
              multiple
              disableClearable
              id="tags-outlined"
              options={this.props.availableTags}
              getOptionLabel={(option) => option.title}
              value={this.props.item.tags}
              filterSelectedOptions
              selectOnFocus
              autoComplete
              clearOnBlur={false}
              onChange={(e, value, reason) => {
                if (reason !== "remove-option") {
                  const newTag = value.filter(
                    (n) => !this.props.item.tags.includes(n)
                  );
                  if (newTag) {
                    this.props.tagAdded(this.props.item, newTag[0]);
                  }
                }
                this.setState({ helperText: "" });
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={this.state.helperText}
                  autoFocus
                  onChange={(e) => {
                    const tagTarget = e.target as HTMLTextAreaElement;
                    if (tagTarget) {
                      const tagExists = this.props.item.tags.find(
                        (t) => t.title === tagTarget.value
                      );
                      if (!tagExists && tagTarget.value) {
                        this.setState({
                          helperText: "Submit with 'Enter'",
                        });
                      } else {
                        this.setState({ helperText: "" });
                      }
                    }
                  }}
                  onKeyPress={(e) => {
                    const tagTarget = e.target as HTMLTextAreaElement;
                    const tagExists = this.props.availableTags.find(
                      (t) => t.title === tagTarget.value
                    );
                    if (e.key === "Enter" && tagTarget.value) {
                      if (!tagExists) {
                        this.props
                          .updateAvailableTags(tagTarget.value)
                          .then((res) => {
                            if (res.ok === 1) {
                              this.props.tagAdded(this.props.item, res.item);
                            }
                          });
                      }
                    }
                  }}
                />
              )}
              renderTags={(value, getTagProps) =>
                value.map((option, index) => (
                  <Chip
                    label={option.title}
                    {...getTagProps({ index })}
                    key={option.id}
                    style={{
                      backgroundColor: option.color,
                      color: "#757575",
                    }}
                    onDelete={() =>
                      this.props.tagDeleted(this.props.item, option)
                    }
                  />
                ))
              }
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ dialogOpen: false })}
              color="primary"
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
