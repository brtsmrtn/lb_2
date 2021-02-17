import React from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";
import { Listing } from "./components/Listing";
import "./App";

const App = (): JSX.Element => {
  return (
    <div>
      <AddLink />
      <SubmitLink />
      <Message />
      <Listing />
    </div>
  );
};
export default App;
