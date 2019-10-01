import React, { Component } from "react";

export default class FilterObject extends Component {
  constructor() {
    super();

    this.state = {
      myFamily: [
        {
          name: "Amber",
          hair: "brown",
          relation: "wife"
        },
        {
          name: "Cora",
          hair: "blonde",
          relation: "first daughter"
        },
        {
          name: "Kinley",
          hair: "black",
          relation: "second daughter"
        },
        {
          name: "Scarlett",
          hair: "dirty blonde",
          relation: "third daughter"
        }
      ],
      userInput: "",
      filteredFamily: []
    };
  }

  handleChange(val) {
    this.setState({ userInput: val });
  }
  filteredFamily(prop) {
    let myFamily = this.state.myFamily;
    let filteredFamily = [];
    for (let i = 0; i < myFamily.length; i++) {
      if (myFamily[i].hasOwnProperty(prop)) {
        filteredFamily.push(myFamily[i]);
      }
    }
    this.setState({ myFamily: myFamily });
  }

  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4> Filter Object </h4>
        <span className="puzzleText">
          Original: {JSON.stringify(this.state.myFamily, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => this.handleChange(e.target.value)}
        ></input>
        <button
          className="confirmationButton"
          onClick={() => this.filteredFamily(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          Filtered: {JSON.stringify(this.state.filteredFamily, null, 10)}
        </span>
      </div>
    );
  }
}
