import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <div className="navbar">
        <SiteTitle />
        <HomeButton />
      </div>
    );
  }
}
export default Header;

const HomeButton = () => (
  <a href="/">
    <i className="fas fa-home fa-3x" />
  </a>
);

const SiteTitle = () => <h1>Dave's Woodworking</h1>;
