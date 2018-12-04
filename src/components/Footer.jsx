import React from 'react';
import { siteMetadata } from '../../gatsby-config'

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <nav className="col-12">
            <div className="navbar-text text-white">
              <h4 className="navbar-header">Connect on LinkedIn & GitHub</h4>
            </div>

            <div id="icons" className="row justify-content-center">

              <a className="nav-link" href="/">
                <img src="https://img.icons8.com/metro/36/e7e6e6/home.png" width="36px" className="img-fluid text-light" alt="home" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia}>
                <img src="https://img.icons8.com/metro/50/e7e6e6/linkedin.png" width="36px" className="mx-1" alt="linkedin" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia}>
                <img src="https://img.icons8.com/metro/50/e7e6e6/github.png" width="36px" className="mx-1" alt="github" />
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
