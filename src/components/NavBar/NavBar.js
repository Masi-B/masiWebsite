import React, { Component } from "react";
import { motion } from "framer-motion";
import { MenuList } from "./MenuList";
import "./NavBar.css";

/*Navigation bar class
Created 23 Oct 2021
*/

class NavBar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    return (
      <nav className="navItems">
        <motion.h1
          className="navLogo"
          animate={{
            scale: [1, 1.2, 1.2, 1.1, 1],
            borderRadius: ["10%", "10%", "25%", "25%", "10%"],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          Masimba Banda
          <i className="masi"></i>
        </motion.h1>
        <div className="menuIcon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuList.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default NavBar;
