import React, { Component } from "react";

import "./styles.css";

export default class MapState extends Component {
  state = {
    MapState: [
      {
        name: "Wooyoung",
        age: 22,
        section: "Voice"
      },
      {
        name: "Choi San",
        age: 22,
        section: "Voice"
      },
      {
        name: "Seong Hwa",
        age: 23,
        section: "Voice"
      },
      {
        name: "Hong Joong",
        age: 23,
        section: "Rap"
      },
      {
        name: "Min Gi",
        age: 23,
        section: "Rap"
      },
      {
        name: "Jeong Yunho",
        age: 22,
        section: "Dancer voice"
      }
    ]
  };
  render() {
    return (
      <div>
        {this.state.MapState.map((item) => (
          <div>
            <h2 class="titulo">Name: {item.name}</h2>
            <h2 class="number">Age: {item.age}</h2>
            <h2 class="ordem">Section: {item.section}</h2>
          </div>
        ))}
      </div>
    );
  }
}
