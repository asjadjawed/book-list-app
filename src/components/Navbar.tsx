import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <h1>Book List App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
