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
    return (
      <div>
        {this.props.item.tags.map((tag: Tag) => (
          <Chip
            onFocus={() => null}
            size="medium"
            key={tag.id}
            label={tag.title}
            clickable={false}
            style={{
              backgroundColor: tag.color,
              color: "#102027",
              fontSize: 11,
            }}
          />
        ))}
        <br />
      </div>
    );
  }
}
export default TagList;
