import React from "react";
import { siteMetadata } from '../../gatsby-config'

/**
 * Class Component
 * <SiteTitle /><HomeButton />
 */
class Navbar extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">
        <div className="container-fluid">

          <div className="col">
            <a className="navbar-brand" href={siteMetadata.siteUrl}>
              <img id="brand" className="img-fluid bg-light" src="/icons/icon-144x144.png" alt={siteMetadata.title} />
            </a>
          </div>

          <div className="col">
            <div id="icons" className="row flex">
              <a className="nav-link" href={siteMetadata.socialMedia.home.url}>
                <img src={siteMetadata.socialMedia.home.logo} width="36px" className="img-fluid text-light" alt="home" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia.facebook.url}>
                <img src={siteMetadata.socialMedia.facebook.logo} width="36px" className="img-fluid text-light" alt="facebook" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia.instagram.url}>
                <img src={siteMetadata.socialMedia.instagram.logo} width="36px" className="img-fluid text-light" alt="instagram" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia.shop.url}>
                <img src={siteMetadata.socialMedia.shop.logo} width="36px" className="img-fluid text-light" alt="instagram" />
              </a>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Navbar;
