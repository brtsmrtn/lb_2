import React, { useState } from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import { ListItem } from "./types/ListItem";

const App = () => {
  const submitForm = () => {
    setItems([...items, { id: 2, url: url, date: "dfdd" }]);
  };
  const initialItems: ListItem[] = [{ id: 1, url: "fff", date: "dddd" }];
  const [url, setUrl] = useState("");
  const [items, setItems] = useState(initialItems);
  return (
    <div>
      <AddLink url={url} onChange={setUrl} />
      <SubmitLink url={url} items={items} onClick={submitForm} />
      <Message url={url}></Message>
      <Listing items={items}></Listing>
    </div>
  );
};

export default App;
