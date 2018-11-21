import React, { Component } from "react";

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-extend-lg navbar-dark bg-dark">

        <div className="container-fluid">

          <h1 className="navbar-header">
            <a className="navbar-brand text-capitalize" href="/">
              Dave's Woodworking</a>
          </h1>

          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>

        </div>

      </nav>
    );
  }
}
export default Navbar;

// const Brand = () => <h1 className="navbar-header">Dave's Woodworking</h1>;
