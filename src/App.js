import React, { Component } from "react";
import Navigation from "./container/Navigation";
import Header from "./components/Header";
import Intro from "./components/introsection";
import Education from "./components/Education";

import { Container } from "react-bootstrap";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Header />

        <Container>
          <Intro />
          <hr />
          <Education />
        </Container>
      </>
    );
  }
}

export default App;
