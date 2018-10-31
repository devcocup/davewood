import React, { Component } from "react";

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <HomeButton />
          <Brand />
        </div>
      </nav>
    );
  }
}
export default Header;

const HomeButton = () => (
  <ul className="nav navbar-nav navbar-right">
    <li>
      <a className="navbar-brand" href="#">
        <span className="glyphicon glyphicon-user" />
      </a>
    </li>
  </ul>
);

const Brand = () => <h2 className="navbar-header">Dave's Woodworking</h2>;
