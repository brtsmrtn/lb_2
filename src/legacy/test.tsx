import React, { Component } from "react";
import "./v1.css";



type Link = {
  state: string;
  url: string;
  add: Date;
};

export const Listing = ({ state, url, add }: Link) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
);


type URLState = {
  url: string
}

// Clock has no properties, but the current state is of type ClockState
// The generic parameters in the Component typing allow to pass props
// and state. Since we don't have props, we pass an empty object.
export class URL extends Component<{}, URLState> {

  // The tick function sets the current state. TypeScript will let us know
  // which ones we are allowed to set.
  tick() {
    this.setState({
      time: new Date()
    });
  }

  // Before the component mounts, we initialise our state
  componentWillMount() {
    this.tick();
  }

  // After the component did mount, we set the state each second.
  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  // render will know everything!
  render() {
    return <p>The current time is {this.state.time.toLocaleTimeString()}</p>
  }
}

class ValidateLink extends React.Component(url: string):boolean {
    let regEx = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)$/gm;
    return regEx.test(url);
}

function Appx() {
  return (
    <div className="AppV1">
      <section className="intro row">
        <div className="intro_info col flex-60 pad-r">
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
        <div className="intro_input col flex-40">
          <form className="col-rev flex-100">
            <div className="row h-norm item-center">
              <div className="col flex-75 pad-r item-center">
                <span id="help" className="green"></span>
              </div>
              <div className="col flex-25 item-center self-center">
                <input
                  className="submit h-norm content-center strong"
                  id="submit"
                  type="submit"
                  value="Add link"
                  disabled
                />
              </div>
            </div>
            <div className="row h-big item-center">
              <input
                className="link h-norm blue pad-r pad-l"
                id="link"
                type="text"
                autoComplete="off"
                spellCheck="false"
                autoCorrect="off"
                required
                placeholder="https://medium.com/swlh/sexism-in-tech-an-inconvenient-truth-26df0329e39"
              />
            </div>
          </form>
        </div>
      </section>
      <section id="listing" className="listing">
        <table>
          <thead>
            <tr>
              <th className="flex-7-5 strong silver">State</th>
              <th className="flex-80 left strong silver">Link</th>
              <th className="flex-12-5 strong silver">Added</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </section>
    </div>
  );
}

export default App;
