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
import TagList from "./TagList";
import { ListItem } from "../types/ListItem";
import Chip from "@material-ui/core/Chip";

export type TagButtonProps = {
  item: ListItem;
  availableTags: Tag[];
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
  updateAvailableTags: (title: string) => Promise<any>;
};
export class TagButton extends React.Component<
  TagButtonProps,
  { dialogOpen: boolean; assignedTags: Tag[] }
> {
  constructor(props: TagButtonProps) {
    super(props);
    this.state = { dialogOpen: false, assignedTags: props.item.tags };
  }
  render(): JSX.Element {
    let dialogText = "No tag is assigned.";
    if (this.props.item.tags.length) {
      const numberOfAssignedTags = this.props.item.tags.length;
      if (numberOfAssignedTags) {
        if (numberOfAssignedTags === 1) {
          dialogText = "This one tag is assigned.";
        } else {
          dialogText = `These ${numberOfAssignedTags} tags are assigned:`;
        }
      } else {
        dialogText = "No tag is assigned:";
      }
    }
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
            <DialogContentText>{dialogText}</DialogContentText>
            <TagList
              editable={true}
              item={this.props.item}
              tagAdded={this.props.tagAdded}
              tagDeleted={this.props.tagDeleted}
            />
            <DialogContentText>
              Pick a tag or create new one (not yet functioning).
            </DialogContentText>
            <TagList
              editable={false}
              fromTags={this.props.availableTags}
              item={this.props.item}
              tagAdded={this.props.tagAdded}
              tagDeleted={this.props.tagDeleted}
            />
            <Autocomplete
              multiple
              id="tags-outlined"
              options={this.props.availableTags}
              getOptionLabel={(option) => option.title}
              defaultValue={[this.props.availableTags[0]]}
              value={this.props.item.tags}
              blurOnSelect
              onChange={(e, value) => {
                const newTag = value.filter(
                  (n) => !this.props.item.tags.includes(n)
                );
                this.props.tagAdded(this.props.item, newTag[0]);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label="Tags"
                  placeholder="Tags"
                  onKeyDown={(e) => {
                    const tagTarget = e.target as HTMLTextAreaElement;
                    if (e.key === "Enter" && tagTarget.value) {
                      const tagExists = this.props.availableTags.find(
                        (t) => t.title === tagTarget.value
                      );
                      if (tagExists) {
                        console.log(
                          "i should add check whether the one is added or add him right away"
                        );
                      } else {
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
              renderTags={(tagValue) => {
                return tagValue.map((option) => (
                  <Chip
                    label={option.title}
                    color={option.color}
                    key={option.id}
                    onDelete={() =>
                      this.props.tagDeleted(this.props.item, option)
                    }
                  />
                ));
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ dialogOpen: false })}
              color="primary"
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
