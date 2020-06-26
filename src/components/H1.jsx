import React, { Component } from "react";

const style = {
  fontSize: "1.5em",
};

export default class H1 extends Component {
  render() {
    const { children } = this.props;
    return <h1 {...this.props} style={style} />;
  }
}
