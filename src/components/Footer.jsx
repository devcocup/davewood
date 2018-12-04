import React from 'react';
import { siteMetadata } from '../../gatsby-config'

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <nav className="col-12 text-light">
            <div className="navbar-text">
              <h4 className="navbar-header">Connect on LinkedIn & GitHub</h4>
            </div>

            <div id="icons" className="row justify-content-center">

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

          </nav>

        </div>
        {/* </div> */}
      </nav>
    );
  }
}

export default Footer;
