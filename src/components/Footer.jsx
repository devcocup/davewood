import React from 'react';
import facebook from '../img/FontAwesomeSVGs/facebook.svg';
import instagram from '../img/FontAwesomeSVGs/instagram.svg';


class Footer extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container justify-content-center">

          <div className="row navbar-text text-light align-self-center">
            <h4 className="navbar-header">Connect on Facebook and Instagram</h4>
          </div>

          <br />

          <div className="nav-link justify-content-center">
            <img src={facebook} width="36px" className="mx-2" alt="facebook" />
            <img src={instagram} width="36px" className="mx-2" alt="instagram" />
          </div>

        </div>
      </nav>
    );
  }
}

export default Footer;
