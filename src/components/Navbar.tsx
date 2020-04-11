import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export class Navbar extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { light, dark, isLightTheme } = context;
          const theme = isLightTheme ? light : dark;
          return (
            <nav style={{ background: theme.ui, color: theme.syntax }}>
              <h1>Book List App</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
