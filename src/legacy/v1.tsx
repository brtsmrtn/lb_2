import React from "react";
import ReactDOM from "react-dom";
//import "./v1.css";
import INPUT from "./components/input";
import SUBMIT from "./components/submit";
import HELP from "./components/help";

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

function onINPUTChange(value: string): boolean {
  if (value) {
    return true;
  } else {
    return false;
  }
}

// const el = <Card title="Welcome!" paragraph="To this example" />;
class App extends React.Component<Props, States> {
  constructor(props: any) {
    super(props);
    //this.onINPUTChange = this.onINPUTChange.bind(this);
    this.state = {
      value: "",
      prompt: "",
      disabled: false,
    };
  }

  render() {
    const currentLocalStorage = "Link_Biscuit:v1";
    const PROPS = {
      value: this.props.value,
      prompt: this.props.prompt,
      disabled: this.props.disabled,
    };
    return (
      <section className="intro row">
        <div className="col flex-60 pad-r">
          <div className="row pad-r h-big item-center">
            <h1 className="blue strong">Link Biscuit</h1>
          </div>
          <div className="row pad-r h-norm item-center">
            <span className="dimgray">
              &#9654; Use this place for storing interesting pieces of the web
              you <b>actually</b> want to read.
            </span>
          </div>
        </div>
        <div className="col flex-40">
          <form className="col-rev flex-100">
            <div className="row h-norm item-center">
              <div className="col flex-75 pad-r item-center">
                <HELP {...PROPS} />
              </div>
              <div className="col flex-25 item-center self-center">
                <SUBMIT {...PROPS} />
              </div>
            </div>
            <div className="row h-big item-center">
              <INPUT {...PROPS} />
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default App;
