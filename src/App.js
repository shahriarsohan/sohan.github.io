import React, { Component } from "react";
import Navigation from "./container/Navigation";
import Header from "./components/Header";
import Intro from "./components/introsection";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />
        <Intro />
        <hr />
      </>
    );
  }
}

export default App;
