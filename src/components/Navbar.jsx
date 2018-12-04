import React from "react";

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">

        <div className="container-fluid">

          <div className="navbar-text text-light">
            <h2 className="navbar-header"><a href="/">Dave's Woodworking</a></h2>
          </div>

          <div id="icons" className="row text-center">
            <a className="nav-link" href="/">
              <img src="/static/home-solid-de6c1dfc9002ccefef36c78a5e2bad2e.svg" width="45px" className="mx-1" alt="home" />
            </a>
            <a className="nav-link" href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">
              <img src="/static/facebook-20f36cc26c5f2d9e9447dc96079bf727.svg" width="36px" className="mx-1" alt="facebook" />
            </a>
            <a className="nav-link" href="https://www.instagram.com/dtmiles1591/">
              <img src="/static/instagram-54116aa3def71e1475e7a7cfdb26c408.svg" width="36px" className="mx-1" alt="instagram" />
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default Navbar;

// const Brand = () => <h1 className="navbar-header">Dave's Woodworking</h1>;
