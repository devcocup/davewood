import React from 'react';
import { siteMetadata } from '../../gatsby-config'

class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <nav className="col-12">
            <div className="navbar-text text-white">
              <h4 className="navbar-header">Connect on Facebook and Instagram</h4>
            </div>

            <div id="icons" className="row justify-content-center">

              <a className="nav-link" href={siteMetadata.socialMedia.home.url}>
                <img src={siteMetadata.socialMedia.home.logo} width="36px" className="img-fluid text-light" alt="home" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia.facebook.url}>
                <img src={siteMetadata.socialMedia.facebook.logo} width="36px" className="mx-1" alt="facebook" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia.instagram.url}>
                <img src={siteMetadata.socialMedia.instagram.logo} width="36px" className="mx-1" alt="instagram" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia.shop.url}>
                <img src={siteMetadata.socialMedia.shop.logo} width="36px" className="img-fluid text-light" alt="instagram" />
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
