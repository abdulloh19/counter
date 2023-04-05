import React, { Component } from "react";
import "./counter.css";
import { prettyFormat } from "@testing-library/react";

class Counter extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     addCounter: 0,
  //     counter: 0,
  //   };
  // }

  state = { counters: [] };

  addCounter = () => {
    const a = this.state.counters;
    a.push(0);
    this.setState({ counters: a });

    // this.setState({ addCounter: a + this.state.counter });
  };

  counter = (index) => {
    let b = this.state.counters;
    b[index] = b[index] + 1;

    this.setState({ counters: b });
    // this.setState({ counter: b + 1 });
  };
  decrement = (index) => {
    let b = this.state.counters;
    b[index] = b[index] - 1;

    this.setState({ counters: b });
    // this.setState({ counter: c - 1 });
  };

  restart = () => {
    this.setState({ counters: 0 });
  };

  render() {
    return (
      <div className="wr">
        <button className="btn-add" onClick={this.addCounter}>
          Add Counter
        </button>
        {this.state.counters.map(
          (item, index) => (
            <div className="counters">
              <button onClick={() => this.counter(index)} className="btn">
                +
              </button>
              {/* <p>{this.state.counters}</p> */}
              {item}
              <button onClick={() => this.decrement(index)} className="btn">
                -
              </button>
            </div>
          )
          // <button onClick={() => this.restart(index)} className="res">
          //   Restart
          // </button>
        )}
      </div>
    );
  }
}

export default Counter;
