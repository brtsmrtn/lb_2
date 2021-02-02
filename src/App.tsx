import React, { useState } from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import { ListItem } from "./types/ListItem";
import "./App.css";
import { Tag } from "./types/Tag";

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
  const updateAvailableTags = (title: string) => {
    const tagExists = tags.find((t) => t.title === title);
    if (!tagExists) {
      const returnTag: Tag = {
        id: (tags.length + 1).toString(),
        title: title,
        color: "primary",
      };
      setTags([...tags, returnTag]);
      return new Promise<{ ok: number; item: Tag }>((res) => {
        res({ ok: 1, item: returnTag });
      });
    } else {
      return new Promise<{ ok: number; item: Tag }>((res) => {
        res({ ok: 0, item: tagExists });
      });
    }
  };
  const addTag = (listItem: ListItem, tag: Tag) => {
    items.splice(
      items.findIndex((it) => it.id === listItem.id),
      1,
      { ...listItem, tags: [...listItem.tags, tag] }
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
  const defaultTags: Tag[] = [
    { id: "1", title: "NLP", color: "primary" },
    { id: "2", title: "Thesis", color: "secondary" },
  ];
  const [url, setUrl] = useState("");
  const [items, setItems] = useState<ListItem[]>([]);
  const [tags, setTags] = useState<Tag[]>(defaultTags);
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
          tags={tags}
          tagAdded={addTag}
          tagDeleted={deleteTag}
          updateAvailableTags={updateAvailableTags}
        ></Listing>
        <Listing
          title="Previously read links"
          items={items.filter((item) => item.alreadyRead === true)}
          itemChanged={changeItemStatus}
          tags={tags}
          tagAdded={addTag}
          tagDeleted={deleteTag}
          updateAvailableTags={updateAvailableTags}
        ></Listing>
      </div>
    </div>
  );
};
export default App;
