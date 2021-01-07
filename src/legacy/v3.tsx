import React from "react";
import ReactDOM from "react-dom";

class LengthInput extends React.Component {
  constructor(props) {
    super(props);
    const { length } = this.props;
    this.state = { length };
  }
  handleChange(e) {
    this.props.onChange(e);
  }
  componentWillReceiveProps(props) {
    const { length } = props;
    this.setState({ length });
  }
  render() {
    const { unit } = this.props;
    return (
      <>
        <label>Length ({unit})</label>
        <input
          value={this.state.length}
          onChange={this.handleChange.bind(this)}
          placeholder={this.props.unit}
        />
        <br />
      </>
    );
  }
}
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lengthInMeter: 0, lengthInFeet: 0 };
  }
  handleMeterChange(e) {
    this.setState({ lengthInMeter: +e.target.value });
    this.setState({ lengthInFeet: +e.target.value * 3.28 });
  }
  handleFeetChange(e) {
    this.setState({ lengthInFeet: +e.target.value });
    this.setState({ lengthInMeter: +e.target.value / 3.28 });
  }
  render() {
    return (
      <div className="App">
        <LengthInput
          length={this.state.lengthInMeter}
          onChange={this.handleMeterChange.bind(this)}
          unit="meter"
        />
        <LengthInput
          length={this.state.lengthInFeet}
          onChange={this.handleFeetChange.bind(this)}
          unit="feet"
        />
      </div>
    );
  }
}

export default App;
