import React, { Component } from "react";
import "./education.css";

class Education extends Component {
  render() {
    return (
      <div className="main-box">
        <div className="details">
          <h1>Education_</h1>
          <hr />
          <div className="varsity-name">
            <h2>
              <i class="fas fa-university icon"></i> Bangladesh University of
              business and technology
            </h2>
            <p>
              <i
                class="fas fa-laptop-code"
                style={{ marginRight: "1.3rem" }}
              ></i>
              {"   "}
              Bachelor of Computer Science
            </p>
            <p>2019 - present</p>
          </div>
          <hr />
          <div className="varsity-name">
            <h2>
              <i class="fas fa-school icon"></i> SOS Hermann Gmeiner College
            </h2>
            <p>
              <i
                class="fas fa-microscope"
                style={{ marginRight: "1.3rem" }}
              ></i>
              Science
            </p>
            <p>2016 - 2018</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Education;
