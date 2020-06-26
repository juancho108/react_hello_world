import React, { Component } from "react";
import Cabecera from "./components/cabecera";
import P from "./components/P";

import "./App.css";

class App extends Component {
  state = {
    miau: "Bienvenido a Miau",
  };

  cambiarTextoDelEstado = () => {
    this.setState({ miau: "Hola Mundo" });
  };

  manejaClick = (texto) => {
    console.log(texto);
  };

  render() {
    const { miau } = this.state;
    const texto = "Bienvenido Miau";
    const guau = "Bienvenido Guau";
    return (
      <div className="App">
        <Cabecera miau={miau} manejaClick={this.manejaClick} />
        <P onClick={this.cambiarTextoDelEstado}>{miau}</P>
      </div>
    );
  }
}

export default App;
