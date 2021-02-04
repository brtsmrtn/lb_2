import React from "react";
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
import { PromiseTag } from "../types/PromiseTag";

export type TagButtonProps = {
  item: ListItem;
  knownTags: Tag[];
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
  updateKnownTags: (title: string) => Promise<PromiseTag>;
};
export class TagButton extends React.Component<
  TagButtonProps,
  { dialogOpen: boolean; tags: Tag[]; errorTag: string }
> {
  constructor(props: TagButtonProps) {
    super(props);
    this.state = {
      dialogOpen: false,
      tags: props.item.tags,
      errorTag: "",
    };
  }
  isTagNew = function (tagTitle: string, tags: Tag[]): Tag | undefined {
    return tags.find((t) => t.title === tagTitle);
  };
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
          <DialogContent>
            <DialogContentText>
              Add new tag or pick any from the list.
            </DialogContentText>
            <Autocomplete
              multiple
              disableClearable
              id="tags-outlined"
              options={this.props.knownTags}
              getOptionLabel={(option) => option.title}
              value={this.props.item.tags}
              filterSelectedOptions
              selectOnFocus
              autoComplete
              clearOnBlur={false}
              onChange={(e, value, reason) => {
                const targetTag = value[value.length - 1];
                if (reason === "select-option") {
                  const tagAlreadyAssigned = this.isTagNew(
                    targetTag.title,
                    this.props.item.tags
                  );
                  if (tagAlreadyAssigned) {
                    this.setState({
                      errorTag: errorTags.submit,
                    });
                  } else {
                    this.props.tagAdded(this.props.item, targetTag);
                    this.setState({ errorTag: errorTags.empty });
                  }
                }
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="outlined"
                  label={this.state.errorTag}
                  autoFocus
                  onChange={(e) => {
                    const targetTag = e.target as HTMLTextAreaElement;
                    const targetTagTitle = targetTag.value;
                    if (targetTagTitle) {
                      const tagAlreadyAssigned = this.isTagNew(
                        targetTagTitle,
                        this.props.item.tags
                      );
                      if (tagAlreadyAssigned) {
                        this.setState({ errorTag: errorTags.assigned });
                      } else {
                        this.setState({
                          errorTag: errorTags.submit,
                        });
                      }
                    } else {
                      this.setState({ errorTag: errorTags.empty });
                    }
                  }}
                  onKeyDown={(e) => {
                    const targetTag = e.target as HTMLTextAreaElement;
                    const targetTagTitle = targetTag.value;
                    if (e.key === "Enter" && targetTagTitle) {
                      const tagAlreadyAssigned = this.isTagNew(
                        targetTagTitle,
                        this.props.item.tags
                      );
                      const tagAlreadyKnown = this.isTagNew(
                        targetTagTitle,
                        this.props.knownTags
                      );
                      if (!tagAlreadyAssigned) {
                        if (tagAlreadyKnown) {
                          this.props.tagAdded(this.props.item, tagAlreadyKnown);
                          this.setState({ errorTag: errorTags.empty });
                        } else {
                          this.props
                            .updateKnownTags(targetTagTitle)
                            .then((res) => {
                              if (res.ok === 1) {
                                this.props.tagAdded(this.props.item, res.item);
                                this.setState({ errorTag: errorTags.empty });
                              } else {
                                this.setState({
                                  errorTag: errorTags.wrong,
                                });
                              }
                            });
                        }
                      }
                    }
                  }}
                />
              )}
              renderTags={() => (
                <TagList
                  editable={true}
                  item={this.props.item}
                  tagAdded={this.props.tagAdded}
                  tagDeleted={this.props.tagDeleted}
                />
              )}
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
