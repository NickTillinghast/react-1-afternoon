import React, { Component } from "react";

export default class EvenAndOdd extends Component {
  constructor() {
    super();

    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ""
    };
  }
  handleChange(val) {
    this.setState({ userInput: val });
  }

  assignEvenAndOdds(userInput) {
    let odds = [];
    let evens = [];
    let userArr = userInput.split(",");

    for (var i = 0; i < userArr.length; i++) {
      if (userArr[i] % 2 === 0) {
        evens.push(parseInt(userArr[i], 10));
      } else {
        odds.push(parseInt(userArr[i], 10));
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });
  }
  render() {
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4> Evens and Odds </h4>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => {
            this.assignEvenAndOdds(this.state.userInput);
          }}
        >
          Split
        </button>
        <span className="resultsBox">
          Evens:{JSON.stringify(this.state.evenArray)}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}
        </span>
      </div>
    );
  }
}
