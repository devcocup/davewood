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

          <div className="col-4">
            <a className="navbar-brand" href="/">
              <img id="brand" className="img-responsive bg-light" src="/icons/icon-144x144.png" alt={siteMetadata.title} />
            </a>
          </div>
          {/* <h1 className="text-light">{siteMetadata.title}</h1>

          
          <div className="navbar-text text-light">
            <h2 className="navbar-header"><a href="/">{siteMetadata.title}</a></h2>
          </div> */}
          <div className="col-8">
            <div id="icons" className="row justify-content-end">
              <a className="nav-link" href="/">
                <img src="https://img.icons8.com/metro/36/e7e6e6/home.png" width="36px" className="img-fluid text-light" alt="home" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia.facebook.url}>
                <img src="https://img.icons8.com/metro/50/e7e6e6/facebook.png" width="36px" className="mx-1" alt="facebook" />
              </a>
              <a className="nav-link" href={siteMetadata.socialMedia.instagram.url}>
                <img src="https://img.icons8.com/metro/50/e7e6e6/instagram.png" width="36px" className="mx-1" alt="instagram" />
              </a>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Navbar;
