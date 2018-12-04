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

            <div id="icons" className="row justify-content-center">
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

          </nav>

        </div>
      </nav>
    );
  }
}

export default Footer;
