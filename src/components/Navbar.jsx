import React from "react";
import { siteMetadata } from '../../gatsby-config'

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-success">

        <div className="container-fluid">

          <div className="navbar-text text-light">
            <h2 className="navbar-header"><a href="/">{siteMetadata.title}</a></h2>
          </div>

          <div id="icons" className="row text-center">
            <a className="nav-link" href="/">
              <img src="https://img.icons8.com/metro/36/ffffff/home.png" width="36px" className="img-fluid text-light" alt="home" />
            </a>
            <a className="nav-link" href={siteMetadata.socialMedia}>
              <img src="https://img.icons8.com/metro/50/ffffff/linkedin.png" width="36px" className="mx-1" alt="linkedin" />
            </a>
            <a className="nav-link" href={siteMetadata.socialMedia}>
              <img src="https://img.icons8.com/metro/50/ffffff/github.png" width="36px" className="mx-1" alt="github" />
            </a>
          </div>

        </div>

      </div>
    );
  }
}

export default Navbar;
