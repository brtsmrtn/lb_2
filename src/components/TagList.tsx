import React from "react";
import Chip from "@material-ui/core/Chip";
import { Tag } from "../types/Tag";
import { ListItem } from "../types/ListItem";
export type TagListProps = {
  editable: boolean;
  item: ListItem;
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
};
export class TagList extends React.Component<TagListProps> {
  render(): JSX.Element {
    return (
      <div>
        {this.props.item.tags.map((tag: Tag, index: number) => (
          <Chip
            key={tag.id}
            label={tag.title}
            style={{
              backgroundColor: tag.color,
            }}
            {...{
              "data-tag-index": index,
            }}
            {...(this.props.editable
              ? { onDelete: () => this.props.tagDeleted(this.props.item, tag) }
              : {})}
          />
        ))}
        <br />
      </div>
    );
  }
}
export default TagList;
