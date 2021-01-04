import React from "react";

export interface Props {
  value?: string;
  prompt?: string;
  disabled?: boolean;
}
export interface States {
  value?: string;
  prompt?: string;
  disabled?: boolean;
}

function validateLink(value: string) {
  return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(
    value
  );
}

class INPUT extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: this.props.value,
      prompt: this.props.prompt,
      disabled: this.props.disabled,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const input = e.target;
    const disabled = true;
    const prompt = "";
    if (
      input.value &&
      (input.value.startsWith("https://") || input.value.startsWith("http://"))
    ) {
      let disabled = false;
      if (validateLink(input.value)) {
        let prompt = "&#9654; That link looks good.";
      } else {
        let prompt = "&#9654; That link still needs some sauce.";
      }
    } else {
      let disabled = true;
      let prompt = "&#9654; Beginning with <i>http(s)://</i> is a must.";
    }
    this.setState({ value: input.value, prompt: prompt, disabled: disabled });

    //console.log(this);
    //console.log(this.props);
    //console.log(this.state);
  }
  render() {
    return (
      <input
        className="link h-norm blue pad-r pad-l"
        //id="link"
        type="text"
        autoComplete="off"
        spellCheck="false"
        autoCorrect="off"
        required
        placeholder="https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39"
        value={this.props.value}
        onChange={this.handleChange}
      />
    );
  }
}

export default INPUT;
