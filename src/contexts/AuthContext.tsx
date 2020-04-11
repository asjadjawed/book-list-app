import React, { Component, createContext } from "react";

const defaultState = { isAuthenticated: false };

export const AuthContext = createContext(defaultState);

class AuthContextProvider extends Component {
  state = { ...defaultState };

  toggleAuth = this.setState({ isAuthenticated: !this.state.isAuthenticated });

  render() {
    const contextValues = { ...this.state, toggleAuth: this.toggleAuth };

    return (
      <AuthContext.Provider value={contextValues}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
