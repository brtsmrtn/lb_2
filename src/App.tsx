import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ApplicationState } from "./app/store";
import { ListItem } from "./types/ListItem";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import { addNewItem } from "./features/items";
import "./App";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const items: ListItem[] = useSelector(
    (state: ApplicationState) => state.items
  );
  const submitForm = () => {
    dispatch(addNewItem(url));
    setUrl("");
  };

  const [url, setUrl] = useState("");
  return (
    <div>
      <AddLink url={url} onChange={setUrl} />
      <SubmitLink url={url} items={items} onClick={submitForm} />
      <Message url={url} items={items}></Message>
      <div>
        <Listing
          title="Links to read"
          items={items.filter((item) => item.alreadyRead === false)}
        ></Listing>
        <Listing
          title="Previously read links"
          items={items.filter((item) => item.alreadyRead === true)}
        ></Listing>
      </div>
    </div>
  );
};
export default App;
