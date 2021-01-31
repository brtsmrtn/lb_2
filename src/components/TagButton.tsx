import React from "react";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Tag } from "../types/Tag";
import TagList from "./TagList";
import { ListItem } from "../types/ListItem";

export type TagButtonProps = {
  item: ListItem;
  tags: Tag[];
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
};
export class TagButton extends React.Component<
  TagButtonProps,
  { dialogOpen: boolean }
> {
  constructor(props: TagButtonProps) {
    super(props);
    this.state = { dialogOpen: false };
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
              fromTags={this.props.tags}
              item={this.props.item}
              tagAdded={this.props.tagAdded}
              tagDeleted={this.props.tagDeleted}
            />
            <TextField
              label="New tag"
              disabled
              id={"text-field"}
              placeholder="Add tag"
              helperText="Could be 'NLP' or 'Thesis' or whatever else."
              margin="dense"
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
