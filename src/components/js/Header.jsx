import React, { Component } from "react";

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
    <i className="fa-home" />
  </a>
);

const SiteTitle = () => <h1>Dave's Woodworking</h1>;
