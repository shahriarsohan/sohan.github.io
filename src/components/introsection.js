import React from "react";
import "./introsection.css";

const Intro = props => {
  return (
    <div className="hello__outer">
      <p className="heading">
        Hi<span className="blink">_</span>
      </p>
      <p className="hello__para">
        I am a web developer able to build a web presence from the ground up -
        from concept, navigation, layout and programming backend with django.
        Skilled at writing well-designed, testable and efficient code using
        current best practices in web development. Fast learner, hard worker and
        team player who is proficient in an array of scripting languages and
        multimedia web tools.
      </p>
      <a href="#" className="hello__button">
        <i className="fas fa-download" /> Download Resume
      </a>
    </div>
  );
};

export default Intro;
