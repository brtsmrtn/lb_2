import React, { useState } from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import { ListItem } from "./types/ListItem";
import "./App.css";

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
  const [url, setUrl] = useState("");
  const [items, setItems] = useState<ListItem[]>([]);
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
        ></Listing>
        <Listing
          title="Previously read links"
          items={items.filter((item) => item.alreadyRead === true)}
          itemChanged={changeItemStatus}
        ></Listing>
      </div>
    </div>
  );
};
export default App;
