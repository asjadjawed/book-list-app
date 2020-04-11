import React, { createContext, Component } from "react";

const defaultState = {
  isLightTheme: true,
  light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
  dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
};

export const ThemeContext = createContext(defaultState);

class ThemeContextProvider extends Component {
  state = { ...defaultState };

  toggleTheme = () => this.setState({ isLightTheme: !this.state.isLightTheme });

  render() {
    const contextValues = { ...this.state, toggleTheme: this.toggleTheme };
    return (
      <ThemeContext.Provider value={contextValues}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContextProvider;
