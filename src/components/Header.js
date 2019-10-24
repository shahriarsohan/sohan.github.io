import React from "react";
import Socialicons from "./socialIcons";
import SohanImg from "../files/IMG_9576.JPG";
import Bg from "../files/bg.jpg";

import "./Header.css";

const Header = () => {
  return (
    <header
      className="main-header"
      style={{ background: "url(" + Bg + ") center center repeat" }}
    >
      <div className="header-outer">
        <div className="header-wrapper">
          <img src={SohanImg} alt="sohan" className="profile-pic" />
          <div className="header-info">
            <div className="name">
              Shahriar Sohan<span className="blink">_</span>
            </div>
            <p className="role">AI enthusiast | Django | Tensorflow</p>
            <div className="general-data">
              <dl className="list">
                <dt>Age : </dt>
                <dd>20</dd>
                <dt>Phone : </dt>
                <dd>
                  <a href="tel:+8801786910645">+8801786910645</a>
                </dd>
                <dt>E-Mail : </dt>
                <dd>
                  <a href="mailto:sohanmock@gmail.com">sohanmock@gmail.com</a>
                </dd>
              </dl>
            </div>
            <div className="social-profile-data">
              <Socialicons />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
