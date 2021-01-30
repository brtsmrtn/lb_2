import React, { useState, useEffect } from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import { ListItem } from "./types/ListItem";
import { databaseRef } from "./FirebaseContext";
import "./App.css";

const App = (): JSX.Element => {
  useEffect(() => {
    const listener = databaseRef.child("items").on("value", (snapshot) => {
      const fetchedTasks: ListItem[] = [];
      snapshot.forEach((childSnapshot) => {
        const key = childSnapshot.key;
        const data = childSnapshot.val();
        fetchedTasks.push({ id: key, ...data });
      });
      setItems(fetchedTasks);
    });
    return () => databaseRef.child("items").off("value", listener);
  });
  const submitForm = () => {
    const currentDate = new Date();
    const newItemKey = databaseRef.child("items").push().key;
    const itemData = {
      id: newItemKey,
      url: url,
      date: currentDate.toLocaleString(),
      status: false,
    };
    setUrl("");
    databaseRef.child("items/" + newItemKey).update(itemData);
  };
  const changeItemStatus = (listItem: ListItem) => {
    const newStatus = listItem.status === true ? false : true;
    databaseRef.child("items/" + listItem.id).update({ status: newStatus });
  };
  const [url, setUrl] = useState("");
  const [items, setItems] = useState<ListItem[]>([]);
  return (
    <div>
      <AddLink url={url.toLowerCase()} onChange={setUrl} />
      <SubmitLink url={url} items={items} onClick={submitForm} />
      <Message url={url} items={items}></Message>
      <Listing
        title="Links to read"
        items={items.filter((item) => item.status === false)}
        itemChanged={changeItemStatus}
      ></Listing>
      <Listing
        title="Previously read links"
        items={items.filter((item) => item.status === true)}
        itemChanged={changeItemStatus}
      ></Listing>
    </div>
  );
};
export default App;
