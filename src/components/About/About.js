import React, { Component } from "react";
import { AboutInformation } from "./AboutInfo";

export class About extends Component {
  render() {
    return (
      <div className="myInfo">
        {AboutInformation.map((item, index) => {
          return (<div><h4>{item.info}</h4> <h4>{item.tech}</h4></div>);
        })}
      </div>
    );
  }
}

export default About;
