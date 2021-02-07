import React, { useState } from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import { ListItem } from "./types/ListItem";
import "./App";
import { Tag } from "./types/Tag";
import { COLORS } from "./utils/constants";

const App = (): JSX.Element => {
  const submitForm = () => {
    const currentDate = new Date();
    const newItems = [...items];
    setItems([
      ...newItems,
      {
        id: (newItems.length + 1).toString(),
        url: url,
        date: currentDate.toLocaleString(),
        alreadyRead: false,
        tags: [],
      },
    ]);
    setUrl("");
  };
  const changeItemStatus = (listItem: ListItem) => {
    const newItems = [...items];
    const newListItem = { ...listItem, alreadyRead: !listItem.alreadyRead };
    newItems.splice(
      newItems.findIndex((item) => item.id === newListItem.id),
      1,
      newListItem
    );
    setItems([...newItems]);
  };
  const updateKnownTags = (tagTitle: string) => {
    const tagFound = knownTags.find((tag) => tag.title === tagTitle);
    let newTag = undefined;
    if (!tagFound) {
      const tagId = knownTags.length + 1;
      const tagColor =
        COLORS[tagId >= COLORS.length ? COLORS.length - 1 : tagId - 1];
      newTag = {
        id: tagId.toString(),
        title: tagTitle,
        color: tagColor,
      };
      setKnownTags([...knownTags, newTag]);
    }
    return newTag;
  };
  const assignTagToItem = (listItem: ListItem, tag: Tag) => {
    const newItems = [...items];
    const newListItem = {
      ...listItem,
      tags: [...listItem.tags, tag],
    };
    newItems.splice(
      newItems.findIndex((item) => item.id === newListItem.id),
      1,
      newListItem
    );
    setItems([...newItems]);
  };
  const unassignTagFromItem = (listItem: ListItem, tagItem: Tag) => {
    const newItems = [...items];
    const newListItem = { ...listItem, tags: [...listItem.tags] };
    newListItem.tags.splice(
      newListItem.tags.findIndex((tag) => tag.id === tagItem.id),
      1
    );
    newItems.splice(
      newItems.findIndex((item) => item.id === newListItem.id),
      1,
      newListItem
    );
    setItems([...newItems]);
  };
  const [url, setUrl] = useState("");
  const [items, setItems] = useState<ListItem[]>([]);
  const [knownTags, setKnownTags] = useState<Tag[]>([]);
  return (
    <div>
      <AddLink url={url} onChange={setUrl} />
      <SubmitLink url={url} items={items} onClick={submitForm} />
      <Message url={url} items={items}></Message>
      <div>
        <Listing
          title="Links to read"
          items={items.filter((item) => item.alreadyRead === false)}
          itemChanged={changeItemStatus}
          knownTags={knownTags}
          tagAdded={assignTagToItem}
          tagDeleted={unassignTagFromItem}
          updateKnownTags={updateKnownTags}
        ></Listing>
        <Listing
          title="Previously read links"
          items={items.filter((item) => item.alreadyRead === true)}
          itemChanged={changeItemStatus}
          knownTags={knownTags}
          tagAdded={assignTagToItem}
          tagDeleted={unassignTagFromItem}
          updateKnownTags={updateKnownTags}
        ></Listing>
      </div>
    </div>
  );
};
export default App;
