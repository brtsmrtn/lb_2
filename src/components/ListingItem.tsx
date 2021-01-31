import React from "react";
import { ListItem } from "../types/ListItem";
import { Button } from "@material-ui/core";
import { TagButton } from "./TagButton";
import { Tag } from "../types/Tag";
import TagList from "./TagList";

type ListingItemProps = {
  item: ListItem;
  tags: Tag[];
  itemChanged: (listItem: ListItem) => void;
  tagAdded: (item: ListItem, tag: Tag) => void;
  tagDeleted: (item: ListItem, tag: Tag) => void;
};

export class ListingItem extends React.Component<ListingItemProps> {
  render(): JSX.Element {
    return (
      <tr>
        <td>{this.props.item.url}</td>
        <td>{this.props.item.date}</td>
        <td>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => this.props.itemChanged(this.props.item)}
          >
            {!!this.props.item.alreadyRead ? "Unread" : "Read"}
          </Button>
        </td>
        <td>
          <TagButton
            tags={this.props.tags}
            item={this.props.item}
            tagAdded={this.props.tagAdded}
            tagDeleted={this.props.tagDeleted}
          />
        </td>
        <td>
          <TagList
            editable={false}
            item={this.props.item}
            tagAdded={this.props.tagAdded}
            tagDeleted={this.props.tagDeleted}
          />
        </td>
      </tr>
    );
  }
}
