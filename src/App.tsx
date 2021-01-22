import React, { useState } from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import { ListItem } from "./types/ListItem";

const App = (): JSX.Element => {
  const submitForm = () => {
    const currentDate = new Date();
    setUnreadItems([
      ...unreadItems,
      {
        id: unreadItems.length + 1,
        url: url,
        date: currentDate.toLocaleString(),
      },
    ]);
    setUrl("");
  };
  const moveItems = (listItem: ListItem) => {
    const indexToMove = unreadItems.findIndex((it) => it.id === listItem.id);
    unreadItems.splice(indexToMove, 1);
    setUnreadItems([...unreadItems]);
    setReadItems([...readItems, listItem]);
  };
  const [url, setUrl] = useState("");
  const [unreadItems, setUnreadItems] = useState<ListItem[]>([]);
  const [readItems, setReadItems] = useState<ListItem[]>([]);
  return (
    <div>
      <AddLink url={url.toLowerCase()} onChange={setUrl} />
      <SubmitLink url={url} items={unreadItems} onClick={submitForm} />
      <Message url={url} items={unreadItems}></Message>
      <div>
        <Listing
          title="Unread"
          items={unreadItems}
          itemChanged={moveItems}
        ></Listing>
        <Listing title="Read" items={readItems}></Listing>
      </div>
    </div>
  );
};

export default App;
