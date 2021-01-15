import React, { useState } from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import { ListItem } from "./types/ListItem";

const App = () => {
  const submitForm = () => {
    const currentDate = new Date();
    setItems([
      ...items,
      {
        id: items.length + 1,
        url: url,
        date: currentDate.toLocaleString(),
      },
    ]);
    setUrl("");
  };
  const initialItems: ListItem[] = [
    //{ id: 1, url: "fff", date: new Date().toLocaleString() },
  ];
  const [url, setUrl] = useState("");
  const [items, setItems] = useState(initialItems);
  return (
    <div>
      <AddLink url={url.toLowerCase()} onChange={setUrl} />
      <SubmitLink url={url} items={items} onClick={submitForm} />
      <Message url={url} items={items}></Message>
      <Listing items={items}></Listing>
    </div>
  );
};

export default App;
