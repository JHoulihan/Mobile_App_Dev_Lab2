import React, { Component } from "react";

class App extends Component {
  // create this.state with our two variables
  // this.state.up and this.state.down
  constructor(props) {
    super(props);
    this.state = { number: 1 };
    this.handleReset = this.handleReset.bind(this);
    this.handleForward = this.handleForward.bind(this);
    this.handleBackward = this.handleBackward.bind(this);
  } // end constructor

  handleReset() {
    this.setState({
      number: 0
    });
  }

  handleForward() {
    let currentNum = this.state.number;

    let numNow = currentNum % 2 === 0 ? currentNum + 5 : currentNum + 7;
    this.setState({ number: numNow });
  }

  handleBackward() {
    let currentNum = this.state.number;
    let numNow = currentNum % 2 !== 0 ? currentNum - 2 : currentNum - 1;
    this.setState({ number: numNow });
  }

  render() {
    return (
      <div className="App">
        This is the parent-level component. <br />
        The current value for <b>this.state.number</b>
        is {this.state.number}.
        <Forward forwardHandler={this.handleForward} />
        <Backward backwardHandler={this.handleBackward} />
        <Reset resetHandler={this.handleReset} />
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

//==================== Start a new component class
class Forward extends Component {
  render() {
    const forwardHandler = this.props.forwardHandler;

    return (
      <div className="ForwardComponent">
        This is the Forward component
        <br />
        This is a child-level component <br />
        <button onClick={forwardHandler}>Forward</button>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

//==================== Start a new component class
class Backward extends Component {
  render() {
    const backwardHandler = this.props.backwardHandler;

    return (
      <div className="BackwardComponent">
        This is the Backward component
        <br />
        This is a child-level component <br />
        <button onClick={backwardHandler}>Backward</button>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

//=================== Start a new component class
class Reset extends Component {
  render() {
    const resetHandler = this.props.resetHandler;

    return (
      <div className="ResetComponent">
        This is the Reset component. <br />
        This is a child-level component <br />
        <button onClick={resetHandler}>Reset</button>
      </div>
    ); // end of return statement
  } // end of render function
} // end of class

export default App;
