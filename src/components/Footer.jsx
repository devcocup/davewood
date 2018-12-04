import React from 'react';
class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">

          <nav className="col-12 text-light">
            <div className="navbar-text">
              <h4 className="navbar-header">Connect on Facebook and Instagram</h4>
            </div>

            <div id="icons" className="row justify-content-center"><a className="nav-link" href="/">
              <img src="https://img.icons8.com/metro/36/ffffff/home.png" width="36px" className="img-fluid text-light" alt="home" />
            </a>
              <a className="nav-link" href="https://www.facebook.com/Daves-Woodworking-1577530669229362/">
                <img src="https://img.icons8.com/metro/50/ffffff/facebook.png" width="36px" className="mx-1" alt="facebook" />
              </a>
              <a className="nav-link" href="https://www.instagram.com/dtmiles1591/">
                <img src="https://img.icons8.com/metro/50/ffffff/instagram-new.png" width="36px" className="mx-1" alt="instagram" />
              </a>
            </div>

          </nav>

        </div>
      </nav>
    );
  }
}

export default Footer;
