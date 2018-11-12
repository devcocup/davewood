import React, { Component } from "react";

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-inverse">
        <div className="container-fluid">
          <h1 className="navbar-header">
            <a className="navbar-brand" href="/">Dave's Woodworking</a>
          </h1>
        </div>

      </div>
    );
  }
}
export default Navbar;

// const Brand = () => <h1 className="navbar-header">Dave's Woodworking</h1>;
