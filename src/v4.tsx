import React, { useState } from "react";
import { AddLink } from "./components/AddLink";
import { SubmitLink } from "./components/SubmitLink";
import { Message } from "./components/Message";

const App = () => {
  const submitForm = (event: React.FormEvent<HTMLInputElement>) => {
    //   //this.setState({ disabled: e. });
  };

  const [url, setUrl] = useState("");
  return (
    <div>
      <AddLink url={url} onChange={setUrl} />
      <SubmitLink url={url} onClick={submitForm} />
      <Message url={url}></Message>
      {/* <Listing items={items}></Listing> */}
    </div>
  );
};

export default App;

//export interface Items {
//   url: string;
// }

// const items = [
//   {
//     url: "https://typeofnan.dev/your-first-react-typescript-project-todo-app/",
//   },
//   {
//     url:
//       "https://stackoverflow.com/questions/29280445/reactjs-setstate-with-a-dynamic-key-name",
//   },
//   {
//     url:
//       "https://reactjs.org/docs/lists-and-keys.html",
//   },
// ];
// class Listing extends React.Component<Items> {
//   constructor(props: Items) {
//     super(props);
//     this.state = {
//       url: "",
//     };
//   }
//   render() {
//     const listItems = items.map((url) => <li>{url}</li>);
//     return <ul>{listItems}</ul>;
//   }
// }
