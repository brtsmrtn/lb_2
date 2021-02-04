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
    setItems([
      ...items,
      {
        id: (items.length + 1).toString(),
        url: url,
        date: currentDate.toLocaleString(),
        alreadyRead: false,
        tags: [],
      },
    ]);
    setUrl("");
  };
  const changeItemStatus = (listItem: ListItem) => {
    items.splice(
      items.findIndex((it) => it.id === listItem.id),
      1,
      { ...listItem, alreadyRead: !listItem.alreadyRead }
    );
    setItems([...items]);
  };
  const updateKnownTags = (title: string) => {
    const tagFound = knownTags.find((t) => t.title === title);
    const returnErr = tagFound ? 0 : 1;
    let returnTag = {} as Tag;
    if (tagFound) {
      returnTag = tagFound;
    } else {
      const tagId = knownTags.length + 1;
      const tagColor =
        COLORS[tagId >= COLORS.length ? COLORS.length - 1 : tagId - 1];
      returnTag = {
        id: tagId.toString(),
        title: title,
        color: tagColor,
      };
      setKnownTags([...knownTags, returnTag]);
    }
    return new Promise<{ ok: number; item: Tag }>((res) => {
      res({ ok: returnErr, item: returnTag });
    });
  };
  const addTag = (listItem: ListItem, tag: Tag) => {
    items.splice(
      items.findIndex((it) => it.id === listItem.id),
      1,
      {
        ...listItem,
        tags: [...listItem.tags, tag],
      }
    );
    setItems([...items]);
  };
  const deleteTag = (listItem: ListItem, tagItem: Tag) => {
    listItem.tags.splice(
      listItem.tags.findIndex((li) => li.id === tagItem.id),
      1
    );
    items.splice(
      items.findIndex((it) => it.id === listItem.id),
      1,
      {
        ...listItem,
      }
    );
    setItems([...items]);
  };
  const [url, setUrl] = useState("");
  const [items, setItems] = useState<ListItem[]>([]);
  const [knownTags, setKnownTags] = useState<Tag[]>([]);
  return (
    <div>
      <AddLink url={url.toLowerCase()} onChange={setUrl} />
      <SubmitLink url={url} items={items} onClick={submitForm} />
      <Message url={url} items={items}></Message>
      <div>
        <Listing
          title="Links to read"
          items={items.filter((item) => item.alreadyRead === false)}
          itemChanged={changeItemStatus}
          knownTags={knownTags}
          tagAdded={addTag}
          tagDeleted={deleteTag}
          updateKnownTags={updateKnownTags}
        ></Listing>
        <Listing
          title="Previously read links"
          items={items.filter((item) => item.alreadyRead === true)}
          itemChanged={changeItemStatus}
          knownTags={knownTags}
          tagAdded={addTag}
          tagDeleted={deleteTag}
          updateKnownTags={updateKnownTags}
        ></Listing>
      </div>
    </div>
  );
};
export default App;
