import React from "react";
import Chip from "@material-ui/core/Chip";
import { Tag } from "../types/Tag";
import { ListItem } from "../types/ListItem";
export type TagListProps = {
  fromTags?: Tag[];
  editable: boolean;
  item: ListItem;
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
};
export class TagList extends React.Component<TagListProps> {
  render(): JSX.Element {
    if (this.props.fromTags) {
      const availableTags = this.props.fromTags.filter(
        (x) => !this.props.item.tags.includes(x)
      );
      return (
        <div>
          {availableTags.map((tag: Tag) => (
            <Chip
              variant="outlined"
              size="small"
              key={tag.title}
              label={tag.title}
              color={tag.color}
              onClick={() => this.props.tagAdded(this.props.item, tag)}
            />
          ))}
        </div>
      );
    } else {
      if (this.props.editable) {
        return (
          <div>
            {this.props.item.tags.map((tag: Tag) => (
              <Chip
                size="small"
                key={tag.id}
                label={tag.title}
                onDelete={() => this.props.tagDeleted(this.props.item, tag)}
                color={tag.color}
              />
            ))}
            <br />
            <br />
          </div>
        );
      } else {
        return (
          <div>
            {this.props.item.tags.map((tag: Tag) => (
              <Chip
                size="small"
                key={tag.id}
                label={tag.title}
                onClick={() => this.props.tagAdded(this.props.item, tag)}
                color={tag.color}
              />
            ))}
            <br />
          </div>
        );
      }
    }
  }
}
export default TagList;
