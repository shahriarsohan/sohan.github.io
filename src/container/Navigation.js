import React, { Component } from "react";
import "./Navigation.css";

class Navigation extends Component {
  state = {
    open: false
  };

  menuCLick = () => {
    this.setState(oldState => {
      return { open: !oldState.open };
    });
  };

  scrollToComponent = className => {
    const element = document.querySelector(`.${className}`);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  render() {
    const { open } = this.state;
    let classesMenuBg = "menu-bg";
    let classesMenuBurgur = "menu-burger";
    let classesMenuItems = "menu-items";
    let humBurgerIcon = "☰";
    if (open) {
      classesMenuBg = "menu-bg fs";
      classesMenuBurgur = "menu-burger fs c-white";
      classesMenuItems = "menu-items fs";
      humBurgerIcon = "✕";
    }
    return (
      <React.Fragment>
        <div className={classesMenuBg}> </div>
        <div className={classesMenuBurgur} onClick={this.menuCLick}>
          {humBurgerIcon}
        </div>
        <div className={classesMenuItems} onClick={this.menuCLick}>
          <div onClick={() => this.scrollToComponent("main-header")}>
            About Me
          </div>
          <div onClick={() => this.scrollToComponent("main-header")}>Hello</div>
          <div onClick={() => this.scrollToComponent("main-header")}>
            Resume
          </div>
          <div onClick={() => this.scrollToComponent("main-header")}>
            Porfolio
          </div>
          <div onClick={() => this.scrollToComponent("main-header")}>
            Contact
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Navigation;
