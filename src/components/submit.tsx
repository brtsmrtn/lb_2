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

class SUBMIT extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    this.state = {
      value: this.props.value,
      prompt: this.props.prompt,
      disabled: this.props.disabled,
    };
    console.log();
  }
  render() {
    return (
      <input
        className="submit h-norm content-center strong"
        type="submit"
        value="Add link"
        disabled={!this.state.disabled}
      />
    );
  }
}

export default SUBMIT;
