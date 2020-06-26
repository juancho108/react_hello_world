import React, { Component } from "react";
import H1 from "../components/H1";
import logo from "../logo.svg";

const styles = {
  header: ({ backgroundColor }) => ({
    backgroundColor,
    minHeight: "20vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(15px + 2vmin)",
    color: "white",
  }),
};

export default class Cabecera extends Component {
  state = {
    backgroundColor: "#282c34",
  };

  cambiaColorHeader = () => {
    this.setState({ backgroundColor: "#555" });
  };

  manejaClick = () => {
    const { miau, manejaClick } = this.props;
    manejaClick(miau);
  };

  render() {
    const { miau, manejaClick } = this.props;
    const { backgroundColor } = this.state;

    return (
      <header
        onClick={this.cambiaColorHeader}
        style={styles.header({ backgroundColor })}
      >
        <img
          onClick={this.manejaClick}
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <H1>{miau}</H1>
      </header>
    );
  }
}
