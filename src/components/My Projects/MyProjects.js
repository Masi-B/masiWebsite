import React, { Component } from "react";
import { ProjectsInformation } from "./ProjectsInfo";

export class MyProjects extends Component {
  render() {
    return (
      
        <div className="projects">
          <ul className="projList">
            {ProjectsInformation.map((item, index) => {
              return (
                <li key={index}>
                  <div>
                    <h2> {item.name} </h2>
                    <h4> {item.location} </h4>
                    <h4> {item.date}</h4>
                    {item.details}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
    );
  }
}

export default MyProjects;
