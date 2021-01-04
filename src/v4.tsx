import React from "react";
import ReactDOM from "react-dom";

function validateLink(value: string) {
  console.log("validateLink#1");
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

export interface LinkProps {
  value?: string;
  disabled?: boolean;
  message?: string;
  //onChange: (e?: React.FormEvent<HTMLInputElement>) => void;
  //onClick: (e?: React.FormEvent<HTMLInputElement>) => void;
  //onClick(e: React.FormEvent<HTMLInputElement> | undefined): void | undefined;
  //prevalidateLink(l: string | undefined): void | undefined;
}
export interface LinkStates {
  value?: string;
  disabled?: boolean;
  message?: string;
}

class AddLink extends React.Component<LinkProps, LinkStates> {
  constructor(props: LinkProps) {
    super(props);
    const { value } = this.props;
    this.state = { value };
  }
  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.props.onChange(e);
  }
  componentWillReceiveProps(props: LinkProps) {
    const { value } = props;
    this.setState({ value });
    console.log("addlink change#1");
  }
  render() {
    return (
      <input
        type="text"
        autoComplete="off"
        spellCheck="false"
        autoCorrect="off"
        required
        placeholder="https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39"
        value={this.state.value}
        onChange={this.handleChange.bind(this)}
      />
    );
  }
}

class SubmitLink extends React.Component<LinkProps, LinkStates> {
  constructor(props: LinkProps) {
    super(props);
    const { disabled } = this.props;
    this.state = { disabled };
  }
  handleChange(e: React.FormEvent<HTMLInputElement>) {
    this.props.onClick(e);
    console.log("submit change#2");
  }
  componentWillReceiveProps(props: LinkProps) {
    const { disabled } = props;
    this.setState({ disabled });
    console.log("submit change#1");
  }
  render() {
    return (
      <input
        type="submit"
        value="Add link"
        disabled={this.state.disabled}
        onClick={this.handleChange.bind(this)}
      />
    );
  }
}

class Prompt extends React.Component<LinkProps, LinkStates> {
  constructor(props: LinkProps) {
    super(props);
    const { message } = this.props;
    this.state = { message };
  }
  componentWillReceiveProps(props: LinkProps) {
    const { message } = props;
    this.setState({ message });
    console.log("prompt change#1");
  }
  render() {
    return <p>&#9654; {this.state.message}</p>;
  }
}

class App extends React.Component<LinkProps, LinkStates> {
  constructor(props: LinkProps) {
    super(props);
    this.state = {
      value: "",
      disabled: true,
      message:
        "Use this place for storing interesting pieces of the web you actually want to read.",
    };
  }
  prevalidateLink(l: string | undefined) {
    let disabled = true;
    let message =
      "Use this place for storing interesting pieces of the web you actually want to read.";
    console.log("prevalidateLink#1");
    if (l) {
      if (validateLink(l)) {
        disabled = false;
        message = "Looks great";
      } else {
        message = "Something's going on, but it's not quite it";
      }
    }
    this.setState({
      ["message"]: message,
      ["disabled"]: disabled,
    });
    return l;
  }
  handleLinkChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({
      value: this.prevalidateLink(e.currentTarget.value),
    });
    console.log("handleLinkChange#1");
  }
  SubmitForm(e) {
    //this.setState({ disabled: e. });
  }

  render() {
    return (
      <div>
        <AddLink
          value={this.state.value}
          onChange={this.handleLinkChange.bind(this)}
        />
        <SubmitLink
          disabled={this.state.disabled}
          onClick={this.SubmitForm.bind(this)}
        />
        <Prompt message={this.state.message}></Prompt>
        {/* <Listing items={items}></Listing> */}
      </div>
    );
  }
}

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
