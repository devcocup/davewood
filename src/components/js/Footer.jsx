import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className="navbar navbar-dark bg-dark">
        <div className="navbar-header">
          <h4 className="navbar-text text-center"><center>Connect on
          <a className="btn-link btn btn-primary mx-2" href="https://www.facebook.com/Daves-Woodworking-1577530669229362/"> Facebook </a>
            and <a className="btn-link btn btn-primary mx-2" href="https://www.instagram.com/dtmiles1591/"> Instagram </a></center></h4>
        </div>

        <nav className="nav-links justify-content-center">
          <a className="nav-link" href="">
            <img src="/static/instagram-brands.svg" id="icon" className="img-responsive" />
          </a>

          <a className="nav-link" href="">
            <img src="/static/facebook-square-brands.svg" id="icon" className="img-responsive" />
          </a>

        </nav>
      </div>
    );
  }
}

export default Footer;
