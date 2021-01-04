import React, { useState } from "react";

export interface InputProps {
  value?: string;
  disabled?: boolean;
}

export interface Message {
  text: string;
}

export class AddLink extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = { value: this.props.defaultLink };
  }

  public handleChange(event: any): void {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          autoComplete="off"
          spellCheck="false"
          autoCorrect="off"
          required
          placeholder="https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39"
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
        />
        <input type="submit" value="Add link" />
      </form>
    );
  }
}

export const Message = ({ text }: Message) => {
  return <p>{text}</p>;
};

const App = () => {
  const [value, setValue] = useState("");
  const defaultMessage =
    "Use this place for storing interesting pieces of the web you actually want to read.";
  const [message, setMessage] = useState(defaultMessage);
  const [disabled, setDisabled] = useState(true);

  const handleChange = ({ target }: any) => {
    setValue(target.value);
    if (target.value) {
      setDisabled(false);
      setMessage("Something's going on");
    } else {
      setDisabled(true);
      setMessage(defaultMessage);
    }
  };

  const submitForm = () => console.log({ value });

  return (
    <form>
      <input
        type="text"
        autoComplete="off"
        spellCheck="false"
        autoCorrect="off"
        required
        placeholder="https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39"
        value={value}
        onChange={handleChange}
      />
      <input
        type="submit"
        value="Add link"
        disabled={disabled}
        onClick={submitForm}
      />
      <br />
      <p>&#9654; {message}</p>
    </form>
  );
};

export default App;
