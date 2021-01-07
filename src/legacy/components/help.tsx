import React from "react";

export interface Props {
  value?: string;
}

class HELP extends React.Component<Props> {
  // tslint:disable-next-line:typedef
  constructor(props: any) {
    super(props);
    this.state = { value: "" };
  }
  render() {
    return <span id="help" className="green"></span>;
  }
}

export default HELP;
